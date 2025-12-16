import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, UserCheck, Mail, Stethoscope } from 'lucide-react';

const Doctors = () => {
  const { getDoctors } = useAuth();
  const navigate = useNavigate();
  const doctors = getDoctors();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Doctors</h1>
            <p className="text-sm text-gray-500">{doctors.length} doctors available</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserCheck className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                    <p className="text-sm text-gray-500">@{doctor.username}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Stethoscope className="w-4 h-4" />
                    <span>{doctor.specialization || 'General'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{doctor.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {doctors.length === 0 && (
          <div className="text-center py-16">
            <UserCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No doctors registered yet</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Doctors;
