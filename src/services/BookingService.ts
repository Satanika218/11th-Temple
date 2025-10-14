/**
 * Internal Booking Service
 * Replaces YouCanBook.me with internal calendar system
 * Business hours: 09:00-19:00, 15-minute slots
 */

export interface TimeSlot {
  id: string;
  date: string; // YYYY-MM-DD format
  time: string; // HH:MM format
  isAvailable: boolean;
  isBooked: boolean;
  bookingId?: string;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  duration: number; // minutes
  message?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  message?: string;
}

class BookingService {
  private readonly BUSINESS_START_HOUR = 9; // 09:00
  private readonly BUSINESS_END_HOUR = 19; // 19:00
  private readonly SLOT_DURATION = 15; // minutes
  private readonly STORAGE_KEY = 'bookings';
  private readonly AVAILABILITY_KEY = 'availability';

  /**
   * Generate available time slots for a given date
   */
  generateTimeSlots(date: string): TimeSlot[] {
    const slots: TimeSlot[] = [];
    const startHour = this.BUSINESS_START_HOUR;
    const endHour = this.BUSINESS_END_HOUR;

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += this.SLOT_DURATION) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const slotId = `${date}-${timeString}`;
        
        slots.push({
          id: slotId,
          date,
          time: timeString,
          isAvailable: this.isSlotAvailable(date, timeString),
          isBooked: this.isSlotBooked(date, timeString)
        });
      }
    }

    return slots;
  }

  /**
   * Get available dates for the next 30 days (excluding weekends)
   */
  getAvailableDates(): string[] {
    const dates: string[] = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends (Saturday = 6, Sunday = 0)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    
    return dates;
  }

  /**
   * Check if a specific time slot is available
   */
  private isSlotAvailable(date: string, time: string): boolean {
    const bookings = this.getBookings();
    const slotDateTime = new Date(`${date}T${time}`);
    const now = new Date();

    // Don't allow booking in the past
    if (slotDateTime <= now) {
      return false;
    }

    // Check if slot is already booked
    return !bookings.some(booking => 
      booking.date === date && 
      booking.time === time && 
      booking.status === 'confirmed'
    );
  }

  /**
   * Check if a specific time slot is booked
   */
  private isSlotBooked(date: string, time: string): boolean {
    const bookings = this.getBookings();
    return bookings.some(booking => 
      booking.date === date && 
      booking.time === time && 
      booking.status === 'confirmed'
    );
  }

  /**
   * Create a new booking
   */
  async createBooking(formData: BookingFormData): Promise<{ success: boolean; booking?: Booking; error?: string }> {
    try {
      // Validate the booking data
      const validation = this.validateBooking(formData);
      if (!validation.isValid) {
        return { success: false, error: validation.error };
      }

      // Check if slot is still available
      if (!this.isSlotAvailable(formData.date, formData.time)) {
        return { success: false, error: 'This time slot is no longer available' };
      }

      // Create the booking
      const booking: Booking = {
        id: this.generateBookingId(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        duration: 30, // Default 30-minute consultation
        message: formData.message,
        status: 'confirmed',
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Save the booking
      this.saveBooking(booking);

      return { success: true, booking };
    } catch (error) {
      console.error('Error creating booking:', error);
      return { success: false, error: 'Failed to create booking. Please try again.' };
    }
  }

  /**
   * Validate booking form data
   */
  private validateBooking(formData: BookingFormData): { isValid: boolean; error?: string } {
    if (!formData.name.trim()) {
      return { isValid: false, error: 'Name is required' };
    }

    if (!formData.email.trim() || !this.isValidEmail(formData.email)) {
      return { isValid: false, error: 'Valid email is required' };
    }

    if (!formData.date) {
      return { isValid: false, error: 'Date is required' };
    }

    if (!formData.time) {
      return { isValid: false, error: 'Time is required' };
    }

    // Check if date is in the future
    const bookingDate = new Date(`${formData.date}T${formData.time}`);
    if (bookingDate <= new Date()) {
      return { isValid: false, error: 'Cannot book appointments in the past' };
    }

    // Check if time is within business hours
    const [hour] = formData.time.split(':').map(Number);
    if (hour < this.BUSINESS_START_HOUR || hour >= this.BUSINESS_END_HOUR) {
      return { isValid: false, error: `Bookings are only available between ${this.BUSINESS_START_HOUR}:00 and ${this.BUSINESS_END_HOUR}:00` };
    }

    return { isValid: true };
  }

  /**
   * Validate email format
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Generate unique booking ID
   */
  private generateBookingId(): string {
    return `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Save booking to localStorage
   */
  private saveBooking(booking: Booking): void {
    const bookings = this.getBookings();
    bookings.push(booking);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookings));
  }

  /**
   * Get all bookings from localStorage
   */
  getBookings(): Booking[] {
    try {
      const bookingsJson = localStorage.getItem(this.STORAGE_KEY);
      if (!bookingsJson) return [];
      
      const bookings = JSON.parse(bookingsJson);
      return bookings.map((booking: any) => ({
        ...booking,
        createdAt: new Date(booking.createdAt),
        updatedAt: new Date(booking.updatedAt)
      }));
    } catch (error) {
      console.error('Error loading bookings:', error);
      return [];
    }
  }

  /**
   * Get bookings for a specific date
   */
  getBookingsForDate(date: string): Booking[] {
    return this.getBookings().filter(booking => booking.date === date);
  }

  /**
   * Cancel a booking
   */
  cancelBooking(bookingId: string): boolean {
    try {
      const bookings = this.getBookings();
      const bookingIndex = bookings.findIndex(b => b.id === bookingId);
      
      if (bookingIndex === -1) {
        return false;
      }

      bookings[bookingIndex].status = 'cancelled';
      bookings[bookingIndex].updatedAt = new Date();
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookings));
      return true;
    } catch (error) {
      console.error('Error cancelling booking:', error);
      return false;
    }
  }

  /**
   * Get booking statistics for admin
   */
  getBookingStats(): {
    total: number;
    confirmed: number;
    pending: number;
    cancelled: number;
    thisWeek: number;
    thisMonth: number;
  } {
    const bookings = this.getBookings();
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    return {
      total: bookings.length,
      confirmed: bookings.filter(b => b.status === 'confirmed').length,
      pending: bookings.filter(b => b.status === 'pending').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length,
      thisWeek: bookings.filter(b => b.createdAt >= weekAgo).length,
      thisMonth: bookings.filter(b => b.createdAt >= monthAgo).length,
    };
  }

  /**
   * Clear all bookings (admin function)
   */
  clearAllBookings(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

export const bookingService = new BookingService();