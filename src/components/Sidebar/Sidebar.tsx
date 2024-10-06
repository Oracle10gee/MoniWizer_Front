import { sidebarItems } from "./utils";
import { MoniWizrSideLogo } from "assets/icons/svgs";
import { useSidebar } from "./useSidebar";
import { useState } from "react";

const Sidebar = () => {
  const { handleRoute, highlightPath } = useSidebar();
  const activeClass =
    "bg-[#ffff] shadow-custom-shadow-one border-0 rounded-lg text-[#011B33]";

  return (
    <div className="flex flex-col p-7 bg-[#F2F2F2] w-[250px] shadow-custom-shadow-two h-screen font-poppins">
      <img
        src={MoniWizrSideLogo}
        alt="logo"
        className="w-[131px] h-[26px] mt-5"
      />
      <div className="flex flex-col gap-2 mt-14">
        {sidebarItems.map((chi, idx) => {
          const { label, icon: Icon, path } = chi;
          return (
            <div
              className={`${
                highlightPath(path) ? activeClass : ""
              } py-3 px-[15px] cursor-pointer w-full group hover:text-[#011B33] transition-all duration-300  sidebar-group `}
              onClick={() => handleRoute(path)}
            >
              <div
                key={idx}
                className={`grid grid-cols-2  w-[70px] items-center  `}
              >
                <Icon
                  color={highlightPath(path) ? "#011B33" : ""}
                  className="group-hover:fill-[#011B33] transition-all duration-300"
                  strokeClassName="group-hover:stroke-[#011B33] transition-all duration-300" 
                />
                <p className="font-normal text-xl">{label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
