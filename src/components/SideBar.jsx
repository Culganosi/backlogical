import { FaXbox, FaSteam, FaPlaystation, FaHome } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";

const SideBar = () => {
  return (
    <div className="fixed z-20 left-0 h-full w-24 m-0 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SideBarIcon icon={<FaHome size="38" />} text={"Home"} />
      <Divider />
      <SideBarIcon icon={<FaXbox size="38" />} text={"Xbox"} />
      <SideBarIcon icon={<FaSteam size="38" />} text={"PC/Steam"} />
      <SideBarIcon
        icon={<SiNintendoswitch size="38" />}
        text={"Nintendo Switch"}
      />
      <SideBarIcon icon={<FaPlaystation size="38" />} text={"Playstation"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
