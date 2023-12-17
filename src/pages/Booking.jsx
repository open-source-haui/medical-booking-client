import React from 'react';

import FooterClient from '../layouts/client/Footer';
import HeaderClient from '../layouts/client/Header';
import Accordion from 'react-bootstrap/Accordion';
import banner from '../assets/images/booking-banner.webp';
import DoctorItem from '../components/booking/DoctorItem';

import '../assets/sass/component/_booking.scss';

const Booking = () => {
  return (
    <div>
      <HeaderClient />
      <div className="booking__banner" id="booking__banner">
        <div className="banner__content">
          <h1 className="banner__title">Website đặt lịch khám trực tuyến</h1>
          <p className="">Đặt khám với hơn 30 bác sĩ</p>
          <p>để có số thứ tự và khung giờ khám trước.</p>

          <div className="banner__search">
            <input
              type="search"
              placeholder="Tên bác sĩ muốn đặt..."
              name="search"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="banner__image">
          <img src={banner} alt="" />
        </div>
      </div>
      <section className="booking__doctor">
        <h4 className="booking-title">Đặt khám bác sĩ</h4>
        <p className="booking-des">Chọn một bác sĩ bạn muốn khám</p>

        <div className="doctor__container">
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
          <DoctorItem></DoctorItem>
        </div>
      </section>
      <div className="booking__question">
        <h2 className="booking__question-title">Câu hỏi thường gặp</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-content-title">
              Tôi phải làm gì nếu sau khi chọn đặt khám – thanh toán loại hình
              BHYT nhưng khi đến khám thì bệnh viện từ chối BHYT của tôi?
            </Accordion.Header>
            <Accordion.Body className="accordion-content">
              <p>
                Nếu nhân viên bệnh viện xác minh rằng bạn không thuộc đối tượng
                BHYT hoặc thẻ BHYT không còn hiệu lực, bạn có thể:{' '}
              </p>
              <p>
                – Trường hợp 1: Tiếp tục thực hiện việc khám chữa bệnh với loại
                hình khác không có BHYT, đồng thời chi trả khoản phí khám chênh
                lệch nếu đã thanh toán trên ứng dụng.
              </p>
              <p>– Trường hợp 2: Hủy việc khám chữa bệnh tại bệnh viện.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Tôi có thể bị bệnh viện từ chối sau khi đã đặt lịch khám (và thanh
              toán) thành công hay không?
            </Accordion.Header>
            <Accordion.Body className="accordion-content">
              Bênh viện sẽ không từ chối khám chữa bệnh sau khi bạn đã đặt khám
              thành công. Tuy nhiên, trong trường hợp thông tin bạn cung cấp
              trên ứng dụng không khớp với thông tin thực tế, bạn có thể không
              được ưu tiên khám trong khung giờ dự kiến và sẽ phải thực hiện
              việc đăng ký khám tại quầy theo quy trình thông thường tại bệnh
              viện.serunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Tại sao tài khoản của tôi không liên kết được với Hồ sơ Y tế?
            </Accordion.Header>
            <Accordion.Body className="accordion-content">
              <p>
                Nếu bạn đã thực hiện đầy đủ các thao tác nhưng không liên kết
                được Hồ sơ Y tế thì có thể:
              </p>
              <p>
                – Trường hợp 1: Bạn đã nhập sai mã bệnh nhân mà bệnh viện cung
                cấp.
              </p>
              <p>
                – Trường hợp 2: Số điện thoại bạn đăng ký tại bệnh viện không
                trùng với số điện thoại bạn đăng ký trên ứng dụng Vui lòng liên
                hệ hotline 19002805 để được hỗ trợ thêm.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Cận lâm sàng là gì?</Accordion.Header>
            <Accordion.Body className="accordion-content">
              Các chỉ định cận lâm sàng thường được bác sĩ đưa ra bao gồm: Xét
              nghiệm các mẫu bệnh phẩm như: máu, nước tiểu, dịch tiết… Siêu âm:
              siêu âm tim, siêu âm khớp, siêu âm thai… Chụp X quang, chụp cắt
              lớp vi tính lồng ngực, ổ bụng… Chụp cộng hưởng từ não, khớp… Đo
              điện tim, điện cơ, điện não. Nội soi: nội soi hô hấp, tiêu hóa,…
              Một số chỉ định xét nghiệm và chẩn đoán khác…để được hỗ trợ thêm.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <section className="doctor__info">
        <h4 className="booking-title">Đặt khám bác sĩ</h4>
      </section>
      <FooterClient />
    </div>
  );
};

export default Booking;
