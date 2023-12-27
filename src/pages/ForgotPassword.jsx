import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../assets/sass/component/_auth.scss';
import image from '../assets/images/image.jpeg';

const ForgotPassword = () => {
  return (
    <div>
      <Link to={'/'} className="direction-icon">
        <i class="fa-solid fa-arrow-left"></i>
      </Link>
      <div
        className=" reusable-auth "
        style={{ height: '320px', marginTop: '10rem' }}
      >
        <div className="reusable-image">
          <img src={image} alt="" />
        </div>
        <div className=" reusable-content">
          <h2 className="title">Quên mật khẩu</h2>

          <Form className="login-form reusable-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Địa chỉ email cần cấp lại mật khẩu <span>*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="Nhập địa chỉ email" />
            </Form.Group>

            <Button variant="primary" type="submit" className="reusable-btn">
              Lấy lại mật khẩu
            </Button>
          </Form>
          <p>
            <span>Bạn đã nhớ mật khẩu? </span>
            <Link to={'/login'}> Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
