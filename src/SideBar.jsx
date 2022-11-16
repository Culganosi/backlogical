import {
  GiKnifeFork,
  GiCoffeeCup,
  GiChickenOven,
  GiFishCooked,
  GiHamShank,
} from "react-icons/gi";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SideBarIcon icon={<GiKnifeFork size="28" />} text={"Home"} />
      <Divider />
      <SideBarIcon
        icon={<GiChickenOven size="28" />}
        text={"Chicken Recipes"}
      />
      <SideBarIcon icon={<GiFishCooked size="28" />} text={"Fish Recipes"} />
      <SideBarIcon icon={<GiHamShank size="28" />} text={"Ham Recipes"} />
      <SideBarIcon icon={<GiCoffeeCup size="28" />} text={"Beverages"} />
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
