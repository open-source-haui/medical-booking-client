import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FooterClient from '../layouts/client/Footer';
import HeaderClient from '../layouts/client/Header';

import '../assets/sass/component/_profile.scss';

import user from '../assets/images/profile_user.jpg';

const Profile = () => {
  return (
    <div id="profile">
      <HeaderClient />

      {/* <div className="profile__container">
        <div className="profile__info">
          <div className="profile__info-left">
            <img src={user} alt="" />
          </div>
          <div className="profile__info-right">
            <h3>
              trinh thu ha-<span>user</span>
            </h3>
            <p>
              ID: <span>2370164107391247</span>
            </p>
          </div>
        </div>

        <div className="profile__detail">
          <h4 className="profile__detail-title">Thông tin cơ bản</h4>
        </div>
      </div> */}
      <div className="profile__container_update">
        <h2>Cập nhật thông tin cá nhân</h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ảnh đại diện</Form.Label>
            <img src={user} alt="" className="avatar-img" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Họ và tên <span>*</span>
            </Form.Label>
            <Form.Control type="text" placeholder="Trịnh Thu Hà" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Email <span>*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="thuha2003@example.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Điện thoại</Form.Label>
            <Form.Control type="phone" placeholder="0912.345.678" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ngày sinh</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Nam"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Nữ"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control type="text" placeholder="Địa chỉ" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Số CMND/CCCD</Form.Label>
            <Form.Control type="text" placeholder="Số CMND/CCCD" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mã thẻ BHYT</Form.Label>
            <Form.Control type="text" placeholder="Mã thẻ BHYT" />
          </Form.Group>
          <Button
            as="input"
            type="submit"
            value="Cập nhật"
            className="profile-btn"
          />{' '}
          <Button
            as="input"
            type="button"
            value="Hủy bỏ"
            className="profile-btn cancel"
          />{' '}
        </Form>
      </div>
      <FooterClient />
    </div>
  );
};

export default Profile;
