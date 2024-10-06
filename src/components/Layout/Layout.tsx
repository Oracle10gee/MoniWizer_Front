import { Sidebar } from "components/Sidebar";
import { LayoutTypes } from "./types";
import { Navbar } from "components/Navbar";

const Layout = ({ children, navTitle, navInitials }: LayoutTypes) => {
  return (
    <div>
      <Navbar title={navTitle} initials={navInitials} />
      <Sidebar />
      <div className="w-[calc(100%-252px)] bg-white h-[calc(100%-100px)] absolute right-0 bottom-0 overflow-auto">
        <div className="bg-white p-8 ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
