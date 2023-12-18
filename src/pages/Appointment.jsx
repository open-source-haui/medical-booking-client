import React from 'react';

import FooterClient from '../layouts/client/Footer';
import HeaderClient from '../layouts/client/Header';

import '../assets/sass/component/_appointment.scss';

const Appointment = () => {
  return (
    <div id="appointment">
      <HeaderClient />

      <div className="appointment__main"></div>

      <FooterClient />
    </div>
  );
};

export default Appointment;
