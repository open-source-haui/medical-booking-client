import React from 'react';
import fake from '../../assets/images/quoted.png';
import '../../assets/sass/component/_doctoritem.scss';

const DoctorItem = () => {
  return (
    <div className="doctor__item">
      <div className="doctor__item-content">
        <div className="doctor__item-image">
          <img src={fake} alt="" />
        </div>
        <h2 className="doctor__item-name">Bùi Huy Hai</h2>
        <p className="doctor__item-degree">Trinh do dai hoc</p>
        <p className="doctor__item-experience">10 nam kinh nghiem</p>
      </div>

      <hr />

      <div className="booking__enter">
        <div className="booking__enter-text">Đặt lịch ngay</div>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default DoctorItem;