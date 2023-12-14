import HeaderClient from '../layouts/client/Header';
import FooterClient from '../layouts/client/Footer';
import ArrowUp from '../components/ArrowUp';

import banner from '../assets/images/banner_doctor.png';
import quoted from '../assets/images/quoted.png';
import connectionDocter from '../assets/images/connection-doctor.webp';

import '../assets/sass/component/_homepage.scss';

function HomePage() {
  return (
    <>
      <HeaderClient />

      <section className="banner">
        <div className="banner-left">
          <h1>Hệ thống đặt lịch khám trực tuyến</h1>
          <h1>Phòng khám</h1>
          <h1 className="h1-blue">Nha khoa Minh Anh</h1>
          <div className="button">
            <div className="btn-register">Tài khoản</div>
            <div className="btn-booking">Đặt lịch ngay</div>
          </div>
          <h2>
            Hoàn toàn <span>không tính phí. </span>
          </h2>
        </div>
        <div className="banner-right">
          <img src={banner} alt="" />
        </div>
      </section>

      <section className="utillities">
        <div className="card_container">
          <div className="card_item">
            <div className="card_item-content">
              <i className="fa-solid fa-tooth"></i>
              <p>Nhiều bác sĩ giỏi</p>
            </div>
          </div>

          <div className="card_item">
            <div className="card_item-content">
              <i className="fa-solid fa-tooth"></i>
              <p>Chuyên sâu nha khoa</p>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item-content">
              <i className="fa-solid fa-tooth"></i>
              <p>Thủ tục nhanh gọn</p>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item-content">
              <i className="fa-solid fa-tooth"></i>
              <p>Uy tín trách nhiệm</p>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item-content">
              <i className="fa-solid fa-tooth"></i>
              <p>Tư vấn miễn phí</p>
            </div>
          </div>
        </div>
      </section>

      <section className="title">Trích lời...</section>
      <section className="quoted">
        <div className="quoted-left">
          <div className="quoted-left-content">
            <div className="quoted-img">
              <img src={quoted} alt="" />
            </div>
            <h2>Bùi Huy Hải</h2>
            <p>Giám đốc điều hành</p>
          </div>
        </div>
        <div className="quoted-right">
          <h2>
            Nha khoa Minh Anh
            <span> là một trong những phòng khám tốt nhất Hà Nội</span>
          </h2>
          <p className="des">
            Đây là lời của ông Bùi Huy Hải, Giám đốc điều hành nhiều năm.
          </p>
          <p className="content">
            Booking.hitly.vn đã khiến mọi việc trở nên cực kỳ dễ dàng đối với
            chúng tôi bệnh nhân đặt lịch hẹn và chúng tôi thậm chí còn dễ dàng
            hơn quản lý đặt phòng của chúng tôi một cách hiệu quả.
          </p>
        </div>
      </section>

      <section className="great-support">
        <div className="great-support-left">
          <div className="support__title">
            <h2>
              Hỗ trợ <span>tuyệt vời! </span>
            </h2>
            <p>
              Đội ngũ nhân viên Trực tiếp của chúng tôi làm việc 24 giờ trong
              tuần làm việc - sẵn sàng trợ giúp khách hàng của bạn mọi cách!
            </p>
            <div className="support__options">
              <div className="support__option">
                <i class="fa-solid fa-check"></i>
                <p>Có rất nhiều video hướng dẫn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="great-support-right">
          <div className="connection-docter-img">
            <img src={connectionDocter} alt="" />
          </div>
        </div>
      </section>

      <ArrowUp />

      <FooterClient />
    </>
  );
}

export default HomePage;
