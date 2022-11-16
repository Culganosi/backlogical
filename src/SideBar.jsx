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
      <SideBarIcon icon={<GiKnifeFork size="28" />} />
      <Divider />
      <SideBarIcon icon={<GiCoffeeCup size="28" />} />
      <SideBarIcon icon={<GiChickenOven size="28" />} />
      <SideBarIcon icon={<GiFishCooked size="28" />} />
      <SideBarIcon icon={<GiHamShank size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}{" "}
    <span class="sidebar-tooltip group-hover:scale-100">
      {(text = "All Recipes")}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
