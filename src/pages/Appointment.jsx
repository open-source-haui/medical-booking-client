import React, { useEffect, useState } from 'react';
import axios from 'axios';

import FooterClient from '../layouts/client/Footer';
import HeaderClient from '../layouts/client/Header';

import { BASE_URL } from '../common/baseUrl';
import { GET_HEALTH_FORM } from '../api/doctors/getHealthForm.api';

import '../assets/sass/component/_appointment.scss';

const Appointment = () => {
  const [healthForm, setHealthForm] = useState();

  const getHealthForm = async () => {
    try {
      const result = await axios.get(`${BASE_URL}${GET_HEALTH_FORM}`);
      // const { data } = result;
      // if (data?.code >= 200 && data?.code < 300) {
      //   setHealthForm(data?.data?.results);
      //   setMetadata({
      //     limit: data?.data?.limit,
      //     page: data?.data?.page,
      //     totalPages: data?.data?.totalPages,
      //     totalResults: data?.data?.totalResults,
      //   });
      // } else {
      //   alert(data?.message || 'INTERNAL SERVER ERROR');
      // }
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      alert(err?.message);
      return null;
    }
  };

  // useEffect(() => {
  //   getHealthForm();
  // }, []);

  return (
    <div id="appointment">
      <HeaderClient />

      <div className="appointment__main">
        <table>
          <tr>
            <th>STT</th>
            <th>Tên bác sĩ</th>
            <th>Thời gian khám</th>
            <th>Ngày khám</th>
            <th>Thời gian đặt</th>
            <th>Trạng thái</th>
            <th>Tác vụ</th>
          </tr>

          <tr>
            <td></td>
          </tr>
        </table>
      </div>

      <FooterClient />
    </div>
  );
};

export default Appointment;
