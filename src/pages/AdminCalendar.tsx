import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, BarChart3 } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import AdminBookingCalendar from "@/components/AdminBookingCalendar";
import { bookingService } from "@/services/BookingService";

const AdminCalendar = () => {
  const [viewMode, setViewMode] = useState<'bookings' | 'stats'>('bookings');
  
  const stats = bookingService.getBookingStats();
  const bookings = bookingService.getBookings();
  const todayBookings = bookingService.getBookingsForDate(new Date().toISOString().split('T')[0]);

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 purple-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Admin <span className="text-brand-lime">Calendar</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Manage consultation bookings and appointments
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              ⚠️ Admin-only access - Internal booking management system
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Management */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Statistics Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{stats.total}</h3>
                <p className="text-gray-600">Total Bookings</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{todayBookings.length}</h3>
                <p className="text-gray-600">Today's Bookings</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{stats.confirmed}</h3>
                <p className="text-gray-600">Confirmed</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{stats.thisWeek}</h3>
                <p className="text-gray-600">This Week</p>
              </CardContent>
            </Card>
          </div>

          {/* Admin Booking Calendar */}
          <AdminBookingCalendar />

          {/* Quick Actions */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-brand-navy">
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Monday - Friday</p>
                <p className="text-brand-navy font-semibold">09:00 - 19:00</p>
                <p className="text-sm text-gray-500 mt-2">15-minute booking slots</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-brand-navy">
                  Booking Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Default Duration: 30 minutes</p>
                <p className="text-gray-600 mb-2">Advance Booking: 30 days</p>
                <p className="text-gray-600">Weekend Bookings: Disabled</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-brand-navy">
                  Data Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Booking data is stored locally and securely managed.</p>
                <Button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear all booking data? This cannot be undone.')) {
                      bookingService.clearAllBookings();
                      window.location.reload();
                    }
                  }}
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 w-full"
                >
                  Clear All Bookings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminCalendar;