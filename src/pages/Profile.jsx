import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FooterClient from '../layouts/client/Footer';
import HeaderClient from '../layouts/client/Header';

import { BASE_URL } from '../common/baseUrl';
import { GET_PROFILE } from '../api/doctors/getProfile.api';

import '../assets/sass/component/_profile.scss';

import user from '../assets/images/profile_user.jpg';

const Profile = () => {
  const [profile, setProfile] = useState();

  const getProfile = async () => {
    try {
      const result = await axios.get(`${BASE_URL}${GET_PROFILE}`);
      const { data } = result;
      // if (data?.code >= 200 && data?.code < 300) {
      //   setDoctors(data?.data?.results);
      //   setMetadata({
      //     limit: data?.data?.limit,
      //     page: data?.data?.page,
      //     totalPages: data?.data?.totalPages,
      //     totalResults: data?.data?.totalResults,
      //   });
      // } else {
      //   alert(data?.message || 'INTERNAL SERVER ERROR');
      // }
      return result;
    } catch (err) {
      console.error(err);
      alert(err?.message);
      return null;
    }
  };

  useEffect(() => {
    getProfile();
  });
  return (
    <div id="profile">
      <HeaderClient />
      <div className="profile__main">
        <div className="profile__container_update">
          <h2>Thông tin cá nhân</h2>
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

        <div className="profile__password">
          <h2>Thay đổi mật khẩu</h2>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Mật khẩu hiện tại <span>*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Mật khẩu hiện tại của bạn"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Mật khẩu mới <span>*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu mới"
                required
              />
            </Form.Group>
            <a href="#">Quên mật khẩu</a>
            <Button variant="primary" type="submit" className="btn-change">
              Thay đổi
            </Button>
          </Form>
        </div>
      </div>
      <FooterClient />
    </div>
  );
};

export default Profile;
