import React from "react";
import { Slide } from "react-awesome-reveal";

interface MenuProps {
  isMenuOpen?: any;
  toggleMenu?: any;
  openModal?: any;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Slide className="menu" direction="down" triggerOnce={isMenuOpen}>
      Menu
    </Slide>
  );
};

export default Menu;
