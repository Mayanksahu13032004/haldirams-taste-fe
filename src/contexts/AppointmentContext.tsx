import { createContext, useContext, useState, useEffect } from 'react';

const AppointmentContext = createContext(null);

const mockAppointments = [
  { id: '1', patientId: '3', patientName: 'Mike Wilson', doctorId: '1', doctorName: 'Dr. John Smith', date: '2025-12-20', time: '10:00', status: 'booked', reason: 'Regular checkup' },
];

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('hospitalAppointments');
    if (saved) {
      setAppointments(JSON.parse(saved));
    } else {
      setAppointments(mockAppointments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('hospitalAppointments', JSON.stringify(appointments));
  }, [appointments]);

  const bookAppointment = (appointmentData) => {
    const newAppointment = {
      ...appointmentData,
      id: Date.now().toString(),
      status: 'booked'
    };
    setAppointments(prev => [...prev, newAppointment]);
    return { success: true, appointment: newAppointment };
  };

  const cancelAppointment = (appointmentId) => {
    setAppointments(prev => 
      prev.map(apt => 
        apt.id === appointmentId ? { ...apt, status: 'cancelled' } : apt
      )
    );
    return { success: true };
  };

  const getAppointmentsByPatient = (patientId) => {
    return appointments.filter(apt => apt.patientId === patientId);
  };

  const getAppointmentsByDoctor = (doctorId) => {
    return appointments.filter(apt => apt.doctorId === doctorId);
  };

  return (
    <AppointmentContext.Provider value={{ 
      appointments, 
      bookAppointment, 
      cancelAppointment, 
      getAppointmentsByPatient, 
      getAppointmentsByDoctor 
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointments must be used within AppointmentProvider');
  }
  return context;
};
