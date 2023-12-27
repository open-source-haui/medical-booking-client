import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImg from '../../assets/images/logo.png';

import '../../assets/sass/component/_header.scss';
const HeaderClient = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_token');

  const handleRouter = (link) => {
    navigate(`${link}`);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className="header" id="header">
      {/* {Boolean(accessToken) ? ( */}

      {/* ) : ( */}
      <Navbar expand="lg" className=" navbar">
        <Container className="navbar_container">
          <Navbar.Brand href="#home" className="navbar_img">
            <img src={logoImg} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleRouter('/')}>Trang chủ</Nav.Link>
              <Nav.Link onClick={() => handleRouter('/booking')}>
                Đặt lịch
              </Nav.Link>
              <Nav.Link onClick={() => handleRouter('/appointment')}>
                Lịch hẹn
              </Nav.Link>
              <Nav.Link onClick={() => handleRouter('/contact')}>
                Liên hệ
              </Nav.Link>
              <NavDropdown title="Trịnh Thu Hà" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => handleRouter('/profile')}
                  href="#action/3.1"
                >
                  Tài khoản
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* )} */}
    </header>
  );
};

export default HeaderClient;
