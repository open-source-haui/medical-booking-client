import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';

// import

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../assets/sass/component/_auth.scss';
import login from '../assets/images/login.png';

import { BASE_URL } from '../common/baseUrl';
import { LOGIN_API } from '../api/doctors/login.api';
import { loadState } from '../utils/localStorage';

const Login = () => {
  const onSubmit = () => async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}${LOGIN_API}`, userData, {
        headers: {
          Authorization: `Bearer ${loadState('accessToken')}`,
        },
      });
      console.log(response.data.code);
      if (response.data.code === 401) {
        alert('User does not exist!!');
      } else {
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        alert('Logged in successfully 🙌');
        navigate('/reactjs-class-hitclub/');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="direction-icon">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="login reusable-auth">
        <div className="reusable-image">
          <img src={login} alt="" />
        </div>
        <div className="login_content reusable-content">
          <h2 className="title">Đăng nhập hệ thống</h2>

          <Form className="login-form reusable-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Địa chỉ email <span>*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập địa chỉ email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Mật khẩu <span>*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="***********"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="reusable-btn">
              Đăng nhập
            </Button>
          </Form>
          <p>
            <span>Bạn chưa có tài khoản? </span>
            <Link to={'/register'}> Đăng ký</Link>
            <Link to={'/forgot-password'}> Quên mật khẩu</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
