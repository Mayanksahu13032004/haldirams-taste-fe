import { useAuth } from '@/contexts/AuthContext';
import { useAppointments } from '@/contexts/AppointmentContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { ArrowLeft, Calendar, Clock, User, X } from 'lucide-react';

const Appointments = () => {
  const { user } = useAuth();
  const { appointments, cancelAppointment, getAppointmentsByPatient, getAppointmentsByDoctor } = useAppointments();
  const navigate = useNavigate();

  const userAppointments = user?.role === 'patient' 
    ? getAppointmentsByPatient(user.id)
    : getAppointmentsByDoctor(user.id);

  const handleCancel = (appointmentId) => {
    const result = cancelAppointment(appointmentId);
    if (result.success) {
      toast.success('Appointment cancelled successfully');
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'booked':
        return <Badge className="bg-green-500">Booked</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      case 'completed':
        return <Badge className="bg-blue-500">Completed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">My Appointments</h1>
              <p className="text-sm text-gray-500">{userAppointments.length} total appointments</p>
            </div>
          </div>
          {user?.role === 'patient' && (
            <Button onClick={() => navigate('/book-appointment')}>
              Book New Appointment
            </Button>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {userAppointments.length === 0 ? (
          <Card className="border-0 shadow-md">
            <CardContent className="py-16 text-center">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No appointments found</p>
              {user?.role === 'patient' && (
                <Button onClick={() => navigate('/book-appointment')}>
                  Book Your First Appointment
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {userAppointments.map((appointment) => (
              <Card key={appointment.id} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {user?.role === 'patient' ? appointment.doctorName : appointment.patientName}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{appointment.reason}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getStatusBadge(appointment.status)}
                      {appointment.status === 'booked' && (
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleCancel(appointment.id)}
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Appointments;
