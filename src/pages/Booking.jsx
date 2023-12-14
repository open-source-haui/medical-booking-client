import React from 'react';

import FooterClient from '../layouts/client/Footer';
import HeaderClient from '../layouts/client/Header';

import banner from '../assets/images/booking-banner.webp';

const Booking = () => {
  return (
    <div>
      <HeaderClient />

      <section className="banner" id="banner">
        <div className="banner__content">
          <h1 className="banner__title">Website đặt lịch khám trực tuyến</h1>
          <p className="banner__title">Đặt khám với hơn 30 bác sĩ</p>
          <p>để có số thứ tự và khung giờ khám trước.</p>

          <div className="banner__search">
            <input type="text " placeholder="Tên bác sĩ muốn đặt..." />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="banner__image">
            <img src={banner} alt="" />
          </div>
        </div>
      </section>

      <FooterClient />
    </div>
  );
};

export default Booking;
