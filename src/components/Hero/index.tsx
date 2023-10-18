import type { FC } from "react";
import { Carousel } from "antd";
import HeroItem from "./Heroitem";
import { hero_mock } from "../../utils";

const Hero: FC = () => {
  return (
    <div className="h-[450px] 3-full bg-[#f5f5f580] mt-[12px]">
      <Carousel autoplay>
        {hero_mock.map((value) => {
          return <HeroItem key={value.id} {...value} />;
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
