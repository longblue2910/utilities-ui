import React from "react";
import AccordionMenu from "../accordionMenu/AccordionMenu";

interface MenuLeftProps {
  showAccordion?: boolean;
}

const MenuLeft: React.FC<MenuLeftProps> = ({ showAccordion = false }) => {
  return (
    <div>
      {showAccordion && <AccordionMenu />}
      {/* Các phần khác của MenuLeft */}
    </div>
  );
};

export default MenuLeft;
