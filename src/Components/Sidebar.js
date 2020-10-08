import React from "react";
// import { useStateValue } from "../StateProvider";
import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMore";
// import userEvent from "@testing-library/user-event";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://icons-for-free.com/iconfiles/png/512/avatar-1320568024619304547.png"
        title="Frankie"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
};

export default Sidebar;
