import type { FC } from "react";
import { Modal } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setSiteMapModalVisibility } from "../../../redux/modalSlice";
const SiteMap: FC = () => {
  const { siteMapModalVisibility } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();
  const custom_link_style: string =
    "text-[1rem] font-normal  leading 6 cursor-pointer";
  const custom_hover_style: string =
    "hover:border-l-[5px] hover:border-[#46A358] hover:pl-[5px] hover:text-[#46A358] transition-colors";
  return (
    <Modal
      open={siteMapModalVisibility}
      title="Site map"
      footer={false}
      onCancel={() => {
        dispatch(setSiteMapModalVisibility());
      }}
    >
      <div className="flex gap-4 flex-col mt-5">
        <h3 className={`${custom_link_style} ${custom_hover_style}`}>Home</h3>
        <h3 className={`${custom_link_style} ${custom_hover_style}`}>Blog</h3>
      </div>
      <div className="items-center flex text-center rounded-md justify-center mt-[41px]">
        <button className="w-[257px] gap-2  h-[49px] bg-[#46A358] text-white  items-center flex text-center rounded-md justify-center font-medium text-[16px]">
          <LoginOutlined />
          Login
        </button>
      </div>
    </Modal>
  );
};
export default SiteMap;
