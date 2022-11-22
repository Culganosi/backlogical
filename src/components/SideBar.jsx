import { Link } from "react-router-dom";
import { FaXbox, FaSteam, FaPlaystation, FaHome } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";

const SideBar = () => {
  return (
    <div className="fixed z-20 left-0 h-full w-24 m-0 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <Link to="/Games">
        <SideBarIcon icon={<FaHome size="38" color="white" />} text={"Home"} />
      </Link>
      <Divider />
      <Link to="/xbox">
        <SideBarIcon
          icon={<FaXbox size="38" color="#107C10" />}
          text={"Xbox"}
        />
      </Link>
      <Link to="/steam">
        <SideBarIcon
          icon={<FaSteam size="38" color="#00000" />}
          text={"PC/Steam"}
        />
      </Link>
      <Link to="/nintendo">
        <SideBarIcon
          icon={<SiNintendoswitch size="38" color="#e4000f" />}
          text={"Nintendo Switch"}
        />
      </Link>
      <Link to="/playstation">
        <SideBarIcon
          icon={<FaPlaystation size="38" color="#006FCD" />}
          text={"Playstation"}
        />
      </Link>
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
