import React from 'react';
// import fake from '../../assets/images/quoted.png';
import '../../assets/sass/component/_doctoritem.scss';
import { Link } from 'react-router-dom';

const DoctorItem = ({ item, id }) => {
  return (
    <Link to={`/doctors/${id}`} className="doctor__item" key={item.id}>
      <div className="doctor__item-content">
        <div className="doctor__item-image">
          <img src={item.image} alt="" />
        </div>
        <h2 className="doctor__item-name">{item.name}</h2>
        <p className="doctor__item-degree">{item.degree}</p>
        <p className="doctor__item-experience">{item.experience}</p>
      </div>

      <hr />

      <div className="booking__enter">
        <div className="booking__enter-text">Đặt lịch ngay</div>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </Link>
  );
};

export default DoctorItem;
