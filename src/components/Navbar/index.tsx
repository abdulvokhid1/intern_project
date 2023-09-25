import type { FC } from "react";
import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import SiteMap from "./Sitemap";

const Navbar: FC = () => {
  const icon_style: string = "cursor-pointer text-[20px]";
  return (
    <div className="w-[80%] m-auto flex justify-between items-center h-[90px] border-b border-[#46A358]">
      <SiteMap />
      <div>
        <img />
        <h3>logo</h3>
      </div>
      <div className="flex gap-4">
        <h3 className="cursor-pointer">Home</h3>
        <h3 className="cursor-pointer">Blog</h3>
      </div>
      <div className=" flex gap-[30px] items-center">
        <SearchOutlined className={`${icon_style}`} />
        <BellOutlined className={`${icon_style}`} />
        <ShoppingCartOutlined className={`${icon_style}`} />
        <button className="text-white w-[100px] h-[35px] bg-[#46A358] flex justify-center items-center gap-2 rounded-md max-md:hidden">
          <LoginOutlined />
          Login
        </button>
        <MenuOutlined className={`${icon_style} hidden max-md:flex`} />
      </div>
    </div>
  );
};

export default Navbar;
