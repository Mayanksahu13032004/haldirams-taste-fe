import { useAuth } from '@/contexts/AuthContext';
import { useAppointments } from '@/contexts/AppointmentContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, UserCheck, Clock, LogOut, Plus } from 'lucide-react';

const Dashboard = () => {
  const { user, logout, getDoctors, getPatients } = useAuth();
  const { appointments, getAppointmentsByPatient, getAppointmentsByDoctor } = useAppointments();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const userAppointments = user?.role === 'patient' 
    ? getAppointmentsByPatient(user.id)
    : getAppointmentsByDoctor(user.id);

  const bookedAppointments = userAppointments.filter(apt => apt.status === 'booked');

  const stats = [
    { title: 'Total Doctors', value: getDoctors().length, icon: UserCheck, color: 'bg-blue-500' },
    { title: 'Total Patients', value: getPatients().length, icon: Users, color: 'bg-green-500' },
    { title: 'My Appointments', value: bookedAppointments.length, icon: Calendar, color: 'bg-purple-500' },
    { title: 'All Appointments', value: appointments.filter(a => a.status === 'booked').length, icon: Clock, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Hospital Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome, {user?.name} ({user?.role})</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {user?.role === 'patient' && (
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/book-appointment')}>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary p-3 rounded-full">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Book Appointment</h3>
                  <p className="text-sm text-gray-500">Schedule a new appointment</p>
                </div>
              </CardContent>
            </Card>
          )}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/appointments')}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-purple-500 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">View Appointments</h3>
                <p className="text-sm text-gray-500">Manage your appointments</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/doctors')}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">View Doctors</h3>
                <p className="text-sm text-gray-500">Browse available doctors</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/patients')}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-green-500 p-3 rounded-full">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">View Patients</h3>
                <p className="text-sm text-gray-500">Browse registered patients</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Appointments */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Recent Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            {bookedAppointments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No appointments scheduled</p>
            ) : (
              <div className="space-y-4">
                {bookedAppointments.slice(0, 5).map((apt) => (
                  <div key={apt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">
                        {user?.role === 'patient' ? apt.doctorName : apt.patientName}
                      </p>
                      <p className="text-sm text-gray-500">{apt.reason}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">{apt.date}</p>
                      <p className="text-sm text-gray-500">{apt.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
