import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="login_image">
        <img src="../assets/images/login-register.png" alt="" />
      </div>
      <div className="login_content">
        <h1 className="title">Đăng nhập hệ thống</h1>
        <form action="">
          <label htmlFor=""></label>
          <input type="email" />
          <label htmlFor=""></label>
          <input type="password" />
        </form>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Địa chỉ email</Form.Label>
            <Form.Control type="email" placeholder="Nhập địa chỉ email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="***********" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Đăng nhập
          </Button>
        </Form>
        <span>
          Bạn chưa có tài khoản
          <Link to={'/signup'}> Đăng ký</Link>
          <Link to={'/'}> Quên mật khẩu</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
