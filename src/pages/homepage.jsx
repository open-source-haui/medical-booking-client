import { Button } from 'antd';
import HeaderClient from '../layouts/client/header';
import FooterClient from '../layouts/client/footer';

const HomePage = () => {
  return (
    <>
      <HeaderClient />
      <div className="flex flex-col justify-center gap-1 items-center">
        <h1 className="text-green-500 font-bold">Medical booking</h1>
        <Button type="primary" size="large">
          Primary Button
        </Button>
      </div>
      <FooterClient />
    </>
  );
};

export default HomePage;
