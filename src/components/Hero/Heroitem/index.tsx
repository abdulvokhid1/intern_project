import type { FC } from "react";
import type { HeroItemType } from "../../../@types";

const HeroItem: FC<HeroItemType> = ({
  big_plant,
  small_plant,
  subtitle,
  title,
  buttonText,
  description,
}) => {
  return (
    <div className="flex justify-between">
      <div className="ml-[43px] flex-[2] ">
        <h2 className="mt-[68px] text-[#3D3D3D] font-medium text-[15px]">
          {subtitle}
        </h2>
        <h1 className="text-[#3D3D3D] font-black text-8xl mt-[7px] leading-[70px]">
          {title} <span className=" text-[#46A358]">Planet</span>
        </h1>
        <p className=" w-[557px] text-[#727272] font-normal mt-[10px] mb-[44px]">
          {description}
        </p>
        <button className="w-[257px] gap-2  h-[40px] bg-[#46A358] text-white  items-center flex text-center rounded-md justify-center font-medium text-[16px]">
          {buttonText}
        </button>
      </div>
      <div className="flex-[1] flex justify-center items-center relative">
        <img
          className=" left-[55px] absolute bottom-1"
          src={small_plant}
          alt="small plant"
        />
        <img className="h-[450px]" src={big_plant} alt=" big plant" />
      </div>
    </div>
  );
};

export default HeroItem;
