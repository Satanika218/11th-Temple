import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { bookingService, TimeSlot, BookingFormData } from '@/services/BookingService';
import { useToast } from '@/hooks/use-toast';

const InternalBookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStep, setBookingStep] = useState<'date' | 'time' | 'details' | 'confirmation'>('date');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  useEffect(() => {
    // Load available dates on component mount
    const dates = bookingService.getAvailableDates();
    setAvailableDates(dates);
  }, []);

  useEffect(() => {
    // Load time slots when date is selected
    if (selectedDate) {
      const slots = bookingService.generateTimeSlots(selectedDate);
      setTimeSlots(slots);
    }
  }, [selectedDate]);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime('');
    setFormData(prev => ({ ...prev, date }));
    setBookingStep('time');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData(prev => ({ ...prev, time }));
    setBookingStep('details');
  };

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await bookingService.createBooking(formData);
      
      if (result.success) {
        setBookingConfirmed(true);
        setBookingStep('confirmation');
        toast({
          title: "Booking Confirmed!",
          description: `Your consultation is scheduled for ${formatDate(selectedDate)} at ${selectedTime}`,
        });
      } else {
        toast({
          title: "Booking Failed",
          description: result.error || "Please try again",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateShort = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatTime = (timeString: string): string => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const resetBooking = () => {
    setSelectedDate('');
    setSelectedTime('');
    setBookingStep('date');
    setBookingConfirmed(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
  };

  if (bookingConfirmed) {
    return (
      <Card className="bg-brand-navy-light border-brand-silver/20 shadow-2xl">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Booking Confirmed!</h3>
          <div className="space-y-4 text-brand-silver">
            <p className="text-lg">
              Your free 30-minute consultation is scheduled for:
            </p>
            <div className="bg-brand-navy/50 rounded-lg p-4 border border-brand-lime/20">
              <p className="text-brand-lime font-semibold text-xl">
                {formatDate(selectedDate)}
              </p>
              <p className="text-brand-lime font-semibold text-xl">
                {formatTime(selectedTime)}
              </p>
            </div>
            <p>
              We've sent a confirmation email to <strong>{formData.email}</strong>
            </p>
            <p className="text-sm">
              You'll receive a reminder 24 hours before your appointment.
            </p>
          </div>
          <Button 
            onClick={resetBooking}
            className="mt-6 bg-brand-lime text-brand-navy hover:bg-brand-lime/90"
          >
            Book Another Consultation
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-brand-navy-light border-brand-silver/20 shadow-2xl">
      <CardHeader className="bg-brand-purple text-white">
        <CardTitle className="text-2xl font-bold flex items-center">
          <Calendar className="mr-3 h-6 w-6" />
          Book Your Free Consultation
        </CardTitle>
        <p className="text-brand-silver">
          Choose your preferred date and time for a 30-minute consultation
        </p>
      </CardHeader>
      
      <CardContent className="p-8">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${bookingStep === 'date' ? 'text-brand-lime' : 'text-brand-silver'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep === 'date' ? 'bg-brand-lime text-brand-navy' : 'bg-brand-silver/20'}`}>
                1
              </div>
              <span className="ml-2 hidden sm:inline">Date</span>
            </div>
            <div className="w-8 h-px bg-brand-silver/20"></div>
            <div className={`flex items-center ${bookingStep === 'time' ? 'text-brand-lime' : 'text-brand-silver'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep === 'time' ? 'bg-brand-lime text-brand-navy' : 'bg-brand-silver/20'}`}>
                2
              </div>
              <span className="ml-2 hidden sm:inline">Time</span>
            </div>
            <div className="w-8 h-px bg-brand-silver/20"></div>
            <div className={`flex items-center ${bookingStep === 'details' ? 'text-brand-lime' : 'text-brand-silver'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep === 'details' ? 'bg-brand-lime text-brand-navy' : 'bg-brand-silver/20'}`}>
                3
              </div>
              <span className="ml-2 hidden sm:inline">Details</span>
            </div>
          </div>
        </div>

        {/* Step 1: Date Selection */}
        {bookingStep === 'date' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Select a Date</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {availableDates.slice(0, 12).map((date) => (
                <Button
                  key={date}
                  onClick={() => handleDateSelect(date)}
                  variant={selectedDate === date ? "default" : "outline"}
                  className={`p-4 h-auto flex flex-col ${
                    selectedDate === date 
                      ? 'bg-brand-lime text-brand-navy' 
                      : 'border-brand-silver/20 text-white hover:bg-brand-lime/10'
                  }`}
                >
                  <span className="text-sm font-medium">
                    {new Date(date).toLocaleDateString('en-GB', { weekday: 'short' })}
                  </span>
                  <span className="text-lg font-bold">
                    {new Date(date).getDate()}
                  </span>
                  <span className="text-xs">
                    {new Date(date).toLocaleDateString('en-GB', { month: 'short' })}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Time Selection */}
        {bookingStep === 'time' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">
                Select a Time for {formatDate(selectedDate)}
              </h3>
              <Button 
                onClick={() => setBookingStep('date')}
                variant="outline"
                size="sm"
                className="border-brand-silver/20 text-brand-silver"
              >
                Change Date
              </Button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {timeSlots.filter(slot => slot.isAvailable).map((slot) => (
                <Button
                  key={slot.id}
                  onClick={() => handleTimeSelect(slot.time)}
                  variant={selectedTime === slot.time ? "default" : "outline"}
                  className={`p-3 ${
                    selectedTime === slot.time 
                      ? 'bg-brand-lime text-brand-navy' 
                      : 'border-brand-silver/20 text-white hover:bg-brand-lime/10'
                  }`}
                >
                  {formatTime(slot.time)}
                </Button>
              ))}
            </div>
            {timeSlots.filter(slot => slot.isAvailable).length === 0 && (
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-brand-silver mx-auto mb-4" />
                <p className="text-brand-silver">No available slots for this date</p>
                <Button 
                  onClick={() => setBookingStep('date')}
                  className="mt-4 bg-brand-lime text-brand-navy"
                >
                  Choose Another Date
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Contact Details */}
        {bookingStep === 'details' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Your Details</h3>
              <div className="text-right">
                <p className="text-brand-lime font-semibold">{formatDate(selectedDate)}</p>
                <p className="text-brand-lime font-semibold">{formatTime(selectedTime)}</p>
              </div>
            </div>
            
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white text-brand-navy"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white text-brand-navy"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-white">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white text-brand-navy"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white">What would you like to discuss? (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-white text-brand-navy"
                  placeholder="Tell us about your business challenges or what you'd like to achieve..."
                  rows={4}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="button"
                  onClick={() => setBookingStep('time')}
                  variant="outline"
                  className="border-brand-silver/20 text-brand-silver"
                >
                  Back to Time Selection
                </Button>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90 flex-1"
                >
                  {isLoading ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Confirming Booking...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Confirm Booking
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InternalBookingCalendar;