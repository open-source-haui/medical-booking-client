import { Button } from 'antd';
import HeaderClient from '../layouts/client/header';
import FooterClient from '../layouts/client/footer';

const HomePage = () => {
  return (
    <div>
      <HeaderClient />
      <div className="flex w-screen h-screen flex-col justify-center gap-1 items-center">
        <h1 className="text-green-500 font-bold">Medical booking</h1>
        <Button className="bg-[#1677ff]" type="primary">
          Primary Button
        </Button>
      </div>
      <FooterClient />
    </div>
  );
};

export default HomePage;
