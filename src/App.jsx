import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Homepage';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import DoctorDetail from './pages/DoctorDetail';

import './assets/sass/base.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile" element={<DoctorDetail />} />
    </Routes>
  );
}

export default App;
