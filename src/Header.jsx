import React from "react";

function Header() {
  return (
    <div className="header">
      <h1 className="font-press-start text-4xl text-green-600 text-justify ">
        Hella Bella's Recipes
      </h1>
      <Divider />
    </div>
  );
}

const Divider = () => <hr className="sidebar-hr" />;
export default Header;
