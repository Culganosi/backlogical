import {
  GiKnifeFork,
  GiCoffeeCup,
  GiChickenOven,
  GiFishCooked,
  GiHamShank,
} from "react-icons/gi";

const SideBar = () => {
  return (
    <div className="fixed z-10 left-0 h-screen w-24 m-0 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SideBarIcon icon={<GiKnifeFork size="38" />} text={"Home"} />
      <Divider />
      <SideBarIcon
        icon={<GiChickenOven size="38" />}
        text={"Chicken Recipes"}
      />
      <SideBarIcon icon={<GiFishCooked size="38" />} text={"Fish Recipes"} />
      <SideBarIcon icon={<GiHamShank size="38" />} text={"Ham Recipes"} />
      <SideBarIcon icon={<GiCoffeeCup size="38" />} text={"Beverages"} />
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
