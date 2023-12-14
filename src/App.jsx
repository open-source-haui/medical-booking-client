import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Homepage';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Account from './pages/Account';

import './assets/sass/base.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user" element={<User />} />
      <Route path="/account" element={<Account />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
