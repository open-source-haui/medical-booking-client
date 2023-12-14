import React from 'react';
import '../../assets/sass/component/_footer.scss';
import dadangky from '../../assets/images/dadangky.svg';
import dmca from '../../assets/images/dmca-badge.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="footer_1 ">
          <p className="footer__title">CÔNG TY TNHH MINH ANH VIỆT NAM</p>
          <p>
            VPĐD: Số 86 đường Lê Thanh Nghị quận Bắc Từ Liêm thành phố Hà Nội
          </p>
          <p>
            Hotline: <span>1898-2003</span> (8:30 - 20:30 từ T2 đến T7)
          </p>
          <p>
            Số ĐKKD 099996886 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp lần đầu
            ngày 19/05/2023.
          </p>
          <p>
            Chịu trách nhiệm nội dung: <span>Nha sĩ Nguyễn Quang Huy.</span>
          </p>
        </div>
        <div className="footer_2 footer-differ">
          <p className="footer__title ">Về Minh Anh</p>
          <p>Giới thiệu về Minh Anh</p>
          <p>Ban điều hành</p>
          <p>Nhân sự & Tuyển dụng</p>
          <p>Liên hệ</p>
        </div>
        <div className="footer_3 footer-differ">
          <p className="footer__title">Dịch vụ</p>
          <p>Đặt khám bác sĩ</p>
          <p>Đặt khám bệnh viện</p>
          <p>Đặt khám phòng khám</p>
          <p>Minh Anh Store</p>
          <p>Y360</p>
          <p>Minh Anh Clinic</p>
        </div>
        <div className="footer_4 footer-differ">
          <p className="footer__title">Hỗ trợ</p>
          <p>Câu hỏi thường gặp</p>
          <p>Điều khoản sử dụng</p>
          <p>Chính sách bảo mật</p>
          <p>Chính sách giải quyết khiếu nại</p>
          <p>Hỗ trợ khách hàng: cskh@minhanh.vn</p>
        </div>
      </div>
      <div className="footer__contact">
        <div className="footer__contact-left">
          <p className="footer__title">Kết nối với chúng tôi</p>
          <div className="footer__contact-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-phone"></i>
          </div>
        </div>
        <div className="footer__contact-right">
          <div className="image">
            <img src={dadangky} alt="Đã đăng ký" />
          </div>
          <div className="image">
            <img src={dmca} alt="Dcma" />
          </div>
        </div>
      </div>

      <div className="footer__note">
        <p>
          Các thông tin trên Minh Anh chỉ dành cho mục đích tham khảo, tra cứu
          và không thay thế cho việc chẩn đoán hoặc điều trị nha khoa.
        </p>
        <p>Cần tuyệt đối tuân theo hướng dẫn của Bác sĩ và Nhân viên y tế.</p>
        <p>Copyright © 2023 Công ty TNHH Minh Anh Việt Nam.</p>
      </div>
    </div>
  );
};

export default Footer;
