import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Trash2, Eye, BarChart3 } from 'lucide-react';
import { bookingService, Booking } from '@/services/BookingService';
import { useToast } from '@/hooks/use-toast';

const AdminBookingCalendar = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [stats, setStats] = useState<any>({});
  const [viewMode, setViewMode] = useState<'calendar' | 'list' | 'stats'>('calendar');
  const { toast } = useToast();

  useEffect(() => {
    loadBookings();
    loadStats();
  }, []);

  const loadBookings = () => {
    const allBookings = bookingService.getBookings();
    setBookings(allBookings);
  };

  const loadStats = () => {
    const bookingStats = bookingService.getBookingStats();
    setStats(bookingStats);
  };

  const handleCancelBooking = (bookingId: string) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      const success = bookingService.cancelBooking(bookingId);
      if (success) {
        loadBookings();
        toast({
          title: "Booking Cancelled",
          description: "The booking has been cancelled successfully.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to cancel booking.",
          variant: "destructive"
        });
      }
    }
  };

  const getBookingsForDate = (date: string): Booking[] => {
    return bookings.filter(booking => 
      booking.date === date && booking.status === 'confirmed'
    ).sort((a, b) => a.time.localeCompare(b.time));
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

  const formatTime = (timeString: string): string => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getNext7Days = (): string[] => {
    const dates: string[] = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    
    return dates;
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (viewMode === 'stats') {
    return (
      <Card className="bg-brand-navy-light border-brand-silver/20 shadow-2xl">
        <CardHeader className="bg-brand-purple text-white">
          <CardTitle className="text-2xl font-bold flex items-center justify-between">
            <div className="flex items-center">
              <BarChart3 className="mr-3 h-6 w-6" />
              Booking Statistics
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => setViewMode('calendar')}
                variant="outline"
                size="sm"
                className="border-white/20 text-white"
              >
                Calendar
              </Button>
              <Button 
                onClick={() => setViewMode('list')}
                variant="outline"
                size="sm"
                className="border-white/20 text-white"
              >
                List
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-brand-navy/50 rounded-lg p-6 border border-brand-lime/20">
              <h3 className="text-brand-lime font-semibold mb-2">Total Bookings</h3>
              <p className="text-3xl font-bold text-white">{stats.total || 0}</p>
            </div>
            <div className="bg-brand-navy/50 rounded-lg p-6 border border-green-500/20">
              <h3 className="text-green-400 font-semibold mb-2">Confirmed</h3>
              <p className="text-3xl font-bold text-white">{stats.confirmed || 0}</p>
            </div>
            <div className="bg-brand-navy/50 rounded-lg p-6 border border-yellow-500/20">
              <h3 className="text-yellow-400 font-semibold mb-2">This Week</h3>
              <p className="text-3xl font-bold text-white">{stats.thisWeek || 0}</p>
            </div>
            <div className="bg-brand-navy/50 rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-blue-400 font-semibold mb-2">This Month</h3>
              <p className="text-3xl font-bold text-white">{stats.thisMonth || 0}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Recent Bookings</h3>
            {bookings.slice(0, 5).map((booking) => (
              <div key={booking.id} className="bg-brand-navy/30 rounded-lg p-4 border border-brand-silver/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{booking.name}</p>
                    <p className="text-brand-silver text-sm">{formatDate(booking.date)} at {formatTime(booking.time)}</p>
                  </div>
                  <Badge className={`${getStatusColor(booking.status)} text-white`}>
                    {booking.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (viewMode === 'list') {
    return (
      <Card className="bg-brand-navy-light border-brand-silver/20 shadow-2xl">
        <CardHeader className="bg-brand-purple text-white">
          <CardTitle className="text-2xl font-bold flex items-center justify-between">
            <div className="flex items-center">
              <User className="mr-3 h-6 w-6" />
              All Bookings
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => setViewMode('calendar')}
                variant="outline"
                size="sm"
                className="border-white/20 text-white"
              >
                Calendar
              </Button>
              <Button 
                onClick={() => setViewMode('stats')}
                variant="outline"
                size="sm"
                className="border-white/20 text-white"
              >
                Stats
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-brand-navy/30 rounded-lg p-6 border border-brand-silver/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-white font-semibold text-lg">{booking.name}</h3>
                      <Badge className={`${getStatusColor(booking.status)} text-white`}>
                        {booking.status}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-brand-silver">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(booking.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {formatTime(booking.time)}
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        {booking.email}
                      </div>
                      {booking.phone && (
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {booking.phone}
                        </div>
                      )}
                    </div>
                    
                    {booking.message && (
                      <div className="mt-3 p-3 bg-brand-navy/50 rounded border border-brand-silver/10">
                        <div className="flex items-start">
                          <MessageSquare className="h-4 w-4 mr-2 mt-1 text-brand-silver" />
                          <p className="text-brand-silver text-sm">{booking.message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {booking.status === 'confirmed' && (
                    <Button
                      onClick={() => handleCancelBooking(booking.id)}
                      variant="outline"
                      size="sm"
                      className="border-red-500/20 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
            
            {bookings.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-brand-silver mx-auto mb-4" />
                <p className="text-brand-silver text-lg">No bookings yet</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Calendar view
  return (
    <Card className="bg-brand-navy-light border-brand-silver/20 shadow-2xl">
      <CardHeader className="bg-brand-purple text-white">
        <CardTitle className="text-2xl font-bold flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="mr-3 h-6 w-6" />
            Admin Calendar
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => setViewMode('list')}
              variant="outline"
              size="sm"
              className="border-white/20 text-white"
            >
              List View
            </Button>
            <Button 
              onClick={() => setViewMode('stats')}
              variant="outline"
              size="sm"
              className="border-white/20 text-white"
            >
              Statistics
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-8">
        <div className="grid gap-6">
          {getNext7Days().map((date) => {
            const dayBookings = getBookingsForDate(date);
            const isToday = date === new Date().toISOString().split('T')[0];
            
            return (
              <div key={date} className={`border rounded-lg p-4 ${isToday ? 'border-brand-lime bg-brand-lime/5' : 'border-brand-silver/20'}`}>
                <h3 className={`font-semibold mb-3 ${isToday ? 'text-brand-lime' : 'text-white'}`}>
                  {formatDate(date)} {isToday && '(Today)'}
                </h3>
                
                {dayBookings.length > 0 ? (
                  <div className="space-y-3">
                    {dayBookings.map((booking) => (
                      <div key={booking.id} className="bg-brand-navy/30 rounded p-3 border border-brand-silver/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">{formatTime(booking.time)} - {booking.name}</p>
                            <p className="text-brand-silver text-sm">{booking.email}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={`${getStatusColor(booking.status)} text-white text-xs`}>
                              {booking.status}
                            </Badge>
                            {booking.status === 'confirmed' && (
                              <Button
                                onClick={() => handleCancelBooking(booking.id)}
                                variant="outline"
                                size="sm"
                                className="border-red-500/20 text-red-400 hover:bg-red-500/10 h-8 w-8 p-0"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-brand-silver text-sm">No bookings scheduled</p>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminBookingCalendar;