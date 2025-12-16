import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAppointments } from '@/contexts/AppointmentContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { ArrowLeft, Calendar } from 'lucide-react';

const BookAppointment = () => {
  const { user, getDoctors } = useAuth();
  const { bookAppointment } = useAppointments();
  const navigate = useNavigate();
  const doctors = getDoctors();

  const [formData, setFormData] = useState({
    doctorId: '',
    date: '',
    time: '',
    reason: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const selectedDoctor = doctors.find(d => d.id === formData.doctorId);
    
    setTimeout(() => {
      const result = bookAppointment({
        ...formData,
        patientId: user.id,
        patientName: user.name,
        doctorName: selectedDoctor?.name || ''
      });

      if (result.success) {
        toast.success('Appointment booked successfully!');
        navigate('/appointments');
      } else {
        toast.error('Failed to book appointment');
      }
      setLoading(false);
    }, 500);
  };

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Book Appointment</h1>
            <p className="text-sm text-gray-500">Schedule a new appointment with a doctor</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-full">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <CardTitle>Appointment Details</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Select Doctor</label>
                <Select onValueChange={(value) => setFormData({ ...formData, doctorId: value })} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doctor) => (
                      <SelectItem key={doctor.id} value={doctor.id}>
                        {doctor.name} - {doctor.specialization || 'General'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Date</label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Time Slot</label>
                <Select onValueChange={(value) => setFormData({ ...formData, time: value })} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Reason for Visit</label>
                <Textarea
                  placeholder="Describe your symptoms or reason for the appointment"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => navigate('/dashboard')} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1" disabled={loading}>
                  {loading ? 'Booking...' : 'Book Appointment'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BookAppointment;
