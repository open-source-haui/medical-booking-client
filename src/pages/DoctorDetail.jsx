import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FooterClient from '../layouts/client/Footer';
import HeaderClient from '../layouts/client/Header';

import { BASE_URL } from '../common/baseUrl';
import { GET_SESSION_WORKING } from '../api/doctors/getSessionWorking.api';
import { GET_DOCTOR } from '../api/doctors/getDoctor.api';

import '../assets/sass/component/_doctordetail.scss';
import { loadState } from '../utils/localStorage';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const DoctorDetail = () => {
  const [doctor, setDoctor] = useState([]);
  const [sessionWorking, setSessionWorking] = useState([]);
  const [metadata, setMetadata] = useState(null);
  const [isActive, setIsActive] = useState();
  let { doctorId } = useParams();

  const getSessionWorking = async () => {
    try {
      const resSessionWorking = await axios.get(
        `${BASE_URL}${GET_SESSION_WORKING(doctorId)}`,
      );

      const { data } = resSessionWorking;

      if (data?.code >= 200 && data?.code < 300) {
        setSessionWorking(data?.data?.results);
        setMetadata({
          limit: data?.data?.limit,
          page: data?.data?.page,
          totalPages: data?.data?.totalPages,
          totalResults: data?.data?.totalResults,
        });
      } else {
        alert(data?.message || 'INTERNAL SERVER ERROR');
      }
      const result = resSessionWorking.data.data.results;

      console.log(result);
      return result;
    } catch (error) {
      console.error(err);
      alert(err?.message);
      return null;
    }
  };
  const getDoctor = async () => {
    try {
      const resDoctor = await axios.get(`${BASE_URL}${GET_DOCTOR(doctorId)}`);
      const bodyData = {
        workingTime: '654a9cbde4f9e6b5f36702c7',
        note: 'Sổ mũi',
      };
      // // Public API
      // const test = await axios.post(`${BASE_URL}${GET_DOCTOR(doctorId)}`, bodyData)

      // // Private API
      // const privateAPI = await axios.post(
      //   `${BASE_URL}${GET_DOCTOR(doctorId)}`,
      //   bodyData,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${loadState('accessToken')}`,
      //     },
      //   },
      // );

      const { data } = resDoctor;
      if (data?.code >= 200 && data?.code < 300) {
        setDoctor(data?.data);
        setMetadata({
          limit: data?.data?.limit,
          page: data?.data?.page,
          totalPages: data?.data?.totalPages,
          totalResults: data?.data?.totalResults,
        });
      } else {
        alert(data?.message || 'INTERNAL SERVER ERROR');
      }
      return resDoctor;
    } catch (err) {
      console.error(err);
      alert(err?.message);
      return null;
    }
  };

  // const formattedDate = moment(mongooseDate).format('MM-DD-YYYY');

  const fetchData = async () => {
    await Promise.all([getDoctor(), getSessionWorking()]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dates = [
    {
      dayOfWeek: 'Thứ 5',
      date: '28 - 12',
      dateValue: '2023-12-28T00:00:00.000Z',
    },
    {
      dayOfWeek: 'Thứ 6',
      date: '29 - 12',
      dateValue: '2023-12-29T00:00:00.000Z',
    },
    {
      dayOfWeek: 'Thứ 7',
      date: '30 - 12',
      dateValue: '2023-12-30T00:00:00.000Z',
    },
    {
      dayOfWeek: 'CN',
      date: '31 - 12',
      dateValue: '2023-12-31T00:00:00.000Z',
    },
    {
      dayOfWeek: 'Thứ 2',
      date: '01 - 01',
      dateValue: '2024-01-01T00:00:00.000Z',
    },
  ];

  const handleClick = (i) => {
    setIsActive(!isActive[i]);
  };

  return (
    <div>
      <HeaderClient />
      <div className="doctor__main">
        <div className="doctor__detail">
          <div className="doctor__info">
            <div className="doctor-img">
              <img src={doctor.image} alt="" />
            </div>
            <div className="doctor-content">
              <h3 className="doctor-content-name">{doctor.name}</h3>
              <p className="text-blue">
                Trình độ <span>{doctor.degree}</span>
              </p>
              <p className="text-blue">
                Số năm kinh nghiệm: <span>{doctor.experience}</span>
              </p>
              <p className="text-blue">{doctor.description}</p>
            </div>
          </div>

          <div className="doctor__noti">
            <svg
              _ngcontent-serverapp-c27=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                _ngcontent-serverapp-c27=""
                d="M3.24343 4.33294L3.24379 4.33273L7.19485 2.04737C7.19521 2.04717 7.19557 2.04696 7.19593 2.04675C7.69613 1.76143 8.30593 1.76291 8.79675 2.04625C8.79676 2.04626 8.79677 2.04626 8.79679 2.04627L12.7535 4.331C12.754 4.3313 12.7545 4.3316 12.755 4.33191C13.2495 4.62321 13.5543 5.14695 13.5601 5.72223V10.2799C13.5601 10.8556 13.2545 11.3834 12.7635 11.6669L12.7634 11.6669L8.80537 13.9525C8.80505 13.9527 8.80472 13.9528 8.80439 13.953C8.30417 14.2384 7.6943 14.237 7.20343 13.9536L3.24518 11.6679C2.7506 11.3765 2.44678 10.8468 2.44678 10.2799V5.71992C2.44678 5.1442 2.75236 4.61645 3.24343 4.33294ZM8.827 11.6601L8.83629 11.6508L8.84509 11.6411C8.94153 11.5339 9.01918 11.4128 9.07498 11.2789C9.12963 11.1477 9.16678 10.9958 9.16678 10.8333C9.16678 10.6734 9.13085 10.5238 9.07769 10.3942C9.01646 10.2377 8.93158 10.1215 8.84509 10.0254L8.83629 10.0157L8.827 10.0064C8.50056 9.67993 7.99421 9.57288 7.55779 9.75695C7.40294 9.81808 7.28773 9.90238 7.1923 9.98827L7.18252 9.99707L7.17322 10.0064C6.94754 10.232 6.83344 10.5349 6.83344 10.8333C6.83344 10.9696 6.85425 11.1245 6.91857 11.2789L6.9252 11.2948L6.9329 11.3102C6.98806 11.4205 7.0585 11.5337 7.15513 11.6411L7.17274 11.6606L7.1923 11.6782C7.28839 11.7647 7.40454 11.8496 7.56102 11.9108C7.69066 11.964 7.84029 11.9999 8.00011 11.9999C8.30776 11.9999 8.60311 11.884 8.827 11.6601ZM8.00011 4.16659C7.45064 4.16659 7.00011 4.61711 7.00011 5.16659V8.66659C7.00011 9.21606 7.45064 9.66659 8.00011 9.66659C8.54959 9.66659 9.00011 9.21606 9.00011 8.66659V5.16659C9.00011 4.61711 8.54959 4.16659 8.00011 4.16659Z"
                fill="currentColor"
                stroke="currentColor"
              ></path>
            </svg>
            <p>Lưu ý</p>
          </div>

          <h3>Đặt khám nhanh</h3>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact">
              Tab content for Contact
            </Tab>
          </Tabs>

          {Array.isArray(dates) && dates.length > 0
            ? dates.map((item) => (
                <div className="doctor__workingplan">
                  <div className="">
                    <p>
                      {item.dayOfWeek}, {item.date}
                    </p>
                  </div>

                  <div>
                    <h1>
                      {Array.isArray(sessionWorking) &&
                      sessionWorking.length > 0
                        ? sessionWorking
                            .filter((i) => {
                              return i.workingPlan.date == item.dateValue;
                            })
                            .map((j, index) => {
                              // console.log(j);
                              return (
                                <p
                                  // style={{
                                  //   backgroundColor: isActive[index]
                                  //     ? 'blue'
                                  //     : 'white',
                                  // }}
                                  // onClick={handleClick(index)}
                                  className="time-hours"
                                >
                                  {j.startTime} - {j.endTime}
                                </p>
                              );
                            })
                        : ''}
                    </h1>
                  </div>
                </div>
              ))
            : ''}
        </div>
      </div>

      <FooterClient />
    </div>
  );
};

export default DoctorDetail;
