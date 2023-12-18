import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../assets/sass/component/_auth.scss';
import login from '../assets/images/login.png';

const Register = () => {
  return (
    <div>
      <div className="direction-icon">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className=" reusable-auth">
        <div className="reusable-image">
          <img src={login} alt="" />
        </div>
        <div className=" reusable-content">
          <h2 className="title">Tạo tài khoản</h2>
          <form action="">
            <label htmlFor=""></label>
            <input type="email" />
            <label htmlFor=""></label>
            <input type="password" />
          </form>
          <Form className="login-form reusable-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control type="text" placeholder="Nhập họ và tên" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Địa chỉ email</Form.Label>
              <Form.Control type="email" placeholder="Nhập địa chỉ email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="***********" />
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