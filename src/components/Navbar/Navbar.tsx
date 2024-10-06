import { BellIcon } from "assets/icons/svgs";
import { navbarTypes } from "./types";
import MenuDrop from "components/Menu/Menu";
import useDisclosure from "hooks/useDisclosure";
import DashboardDrawer from "components/Drawer/Drawer";
import NavProfile from "./Profile";

const Navbar = ({ title, initials }: navbarTypes) => {
  const {
    isOpen: openProfile,
    open: onOpenProfile,
    close: closeProfile,
  } = useDisclosure();
  return (
    <div className="h-[100px] bg-[#ffff] font-poppins w-[calc(100%-251px)] p-6 px-8  absolute top-0 right-0">
      <div className="flex justify-between items-center mt-3">
        <p className="text-[#828282] text-[20px] font-medium">
          {title || "Dashboard"}
        </p>
        <div className="flex gap-5">
          <img src={BellIcon} alt="notification" className="cursor-pointer" />
          <p
            onClick={onOpenProfile}
            className="text-[#011B33] font-medium text-xl border  cursor-pointer rounded-full p-[10px]"
          >
            {initials || "HB"}
          </p>
        </div>
      </div>
      {/* ------ PROFILE DRAWER -------- */}
      <NavProfile open={openProfile} onClose={closeProfile} />
    </div>
  );
};

export default Navbar;
