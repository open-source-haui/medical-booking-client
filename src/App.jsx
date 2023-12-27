import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Homepage';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import DoctorDetail from './pages/DoctorDetail';
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

import './assets/sass/base.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/doctors/:doctorId" element={<DoctorDetail />} />
    </Routes>
  );
}

export default App;
