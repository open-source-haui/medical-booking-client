import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../assets/sass/component/_auth.scss';
import login from '../assets/images/login.png';

const Login = () => {
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
          <form action="">
            <label htmlFor=""></label>
            <input type="email" />
            <label htmlFor=""></label>
            <input type="password" />
          </form>
          <Form className="login-form reusable-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Địa chỉ email</Form.Label>
              <Form.Control type="email" placeholder="Nhập địa chỉ email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="***********" />
            </Form.Group>
            <Button variant="primary" type="submit" className="reusable-btn">
              Đăng nhập
            </Button>
          </Form>
          <p>
            <span>Bạn chưa có tài khoản? </span>
            <Link to={'/'}> Đăng ký</Link>
            <Link to={'/'}> Quên mật khẩu</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
