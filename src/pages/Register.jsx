import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../assets/sass/component/_auth.scss';
import login from '../assets/images/login.png';

import { BASE_URL } from '../common/baseUrl';
import { REGISTER } from '../api/doctors/register.api';
import { loadState } from '../utils/localStorage';

const Register = () => {
  const submit = () => async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}${REGISTER}`, userData, {
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
      <Link to={'/'} className="direction-icon">
        <i class="fa-solid fa-arrow-left"></i>
      </Link>
      <div className=" reusable-auth">
        <div className="reusable-image">
          <img src={login} alt="" />
        </div>
        <div className=" reusable-content">
          <h2 className="title">Tạo tài khoản</h2>

          <Form className="login-form reusable-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Họ và tên <span>*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Nhập họ và tên" required />
            </Form.Group>
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
              Đăng ký
            </Button>
          </Form>
          <p>
            <span>Bạn đã có tài khoản? </span>
            <Link to={'/login'}> Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
