import React from 'react';
import FooterClient from '../layouts/client/Footer';
import HeaderClient from '../layouts/client/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/sass/component/_contact.scss';

const Contact = () => {
  return (
    <div id="contact">
      <HeaderClient />
      <div className="form__contact">
        <div className="form__contact-content">
          <h1 className="form__title">Liên hệ với chúng tôi 😇</h1>
          <p className="form__des">
            Điền vào mẫu dưới đây để gửi tin nhắn cho chúng tôi.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control type="text" placeholder="Trịnh Thu Hà" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control type="phone" placeholder="0912.345.678" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Địa chỉ email</Form.Label>
              <Form.Control type="email" placeholder="thuha2003@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung tin nhắn</Form.Label>
              <Form.Control as="textarea" rows={7} />
            </Form.Group>
            <Button variant="primary" type="submit" className="button">
              Gửi tin nhắn
            </Button>
          </Form>
        </div>
      </div>
      <FooterClient />
    </div>
  );
};

export default Contact;
