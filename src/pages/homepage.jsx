import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

import HeaderClient from '../layouts/client/Header';
import FooterClient from '../layouts/client/Footer';
import ArrowUp from '../components/ArrowUp';

import banner from '../assets/images/banner_doctor.png';
import quoted from '../assets/images/quoted.png';
import connectionDocter from '../assets/images/connection-doctor.webp';

import '../assets/sass/component/_homepage.scss';

const features = [
  {
    name: 'Đội ngũ bác sĩ',
    description:
      'Tất cả các bác sĩ đều có liên kết chính thức với Medical Booking để bảo đảm lịch đặt khám của bạn được xác nhận.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Đặt khám dễ dàng, nhanh chóng, chủ động',
    description:
      'Chỉ với 1 phút, bạn có thể đặt khám thành công với bác sĩ. Phiếu khám bao gồm số thứ tự và khung thời gian dự kiến.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Bảo mật thông tin',
    description:
      'Tuân theo đạo luật HIPAA và ứng dụng công nghệ cao, chúng tôi cam kết bảo mật toàn bộ thông tin cuộc tư vấn của bạn với bác sĩ.',
    icon: LockClosedIcon,
  },
  {
    name: 'Tiện lợi và Tiết kiệm',
    description:
      'Không tốn công di chuyển, không cần chờ khám. Kết nối với các bác sĩ đầu ngành chỉ với chiếc điện thoại của bạn.',
    icon: ArrowPathIcon,
  },
];

function HomePage() {
  return (
    <>
      <HeaderClient />

      <section className="home__banner">
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

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              An tâm tìm và đặt bác sĩ
            </p>
            <p className=" text-lg leading-8 text-gray-600">
              Hơn 500 bác sĩ liên kết chính thức với Medical
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <ArrowUp />

      <FooterClient />
    </>
  );
}

export default HomePage;
