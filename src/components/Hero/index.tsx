import type { FC } from "react";
import { Carousel } from "antd";
import HeroItem from "./Heroitem";

const Hero: FC = () => {
  return (
    <div className="h-[450px] 3-full bg-[#f5f5f580] mt-[12px]">
      <Carousel autoplay>
        <HeroItem />
        <HeroItem />
        <HeroItem />
      </Carousel>
    </div>
  );
};

export default Hero;
