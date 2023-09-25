import type { FC } from "react";
import { Modal } from "antd";
const SiteMap: FC = () => {
  const custom_link_style: string =
    "text-[1rem] font-normal  leading 6 cursor-pointer";
  const custom_hover_style: string =
    "hover:border-l-[5px] hover:border-[#46A358] hover:pl-[5px] hover:text-[#46A358] transition-colors";
  return (
    <Modal open={true} title="Site map" footer="false">
      <div className="flex gap-4 flex-col mt-5">
        <h3 className={`${custom_link_style} ${custom_hover_style}`}>Home</h3>
        <h3 className={`${custom_link_style} ${custom_hover_style}`}>Blog</h3>
      </div>
    </Modal>
  );
};
export default SiteMap;
