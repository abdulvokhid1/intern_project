import type { FC } from "react";

const HeroItem: FC = () => {
  return (
    <div className="flex justify-between">
      <div className="ml-[43px] flex-[2] ">
        <h2 className="mt-[68px] text-[#3D3D3D] font-medium text-[15px]">
          WELCOME TO GREENSHOP
        </h2>
        <h1 className="text-[#3D3D3D] font-black text-8xl mt-[7px] leading-[70px]">
          Let’s Make a Better <span className=" text-[#46A358]">Planet</span>
        </h1>
        <p className=" w-[557px] text-[#727272] font-normal mt-[10px] mb-[44px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className="w-[257px] gap-2  h-[40px] bg-[#46A358] text-white  items-center flex text-center rounded-md justify-center font-medium text-[16px]">
          SHOP NOW
        </button>
      </div>
      <div className="flex-[1] flex justify-center items-center relative">
        <img
          className=" left-[55px] absolute bottom-1"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
          alt="small plant"
        />
        <img
          className="h-[450px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt=" big plant"
        />
      </div>
    </div>
  );
};

export default HeroItem;
