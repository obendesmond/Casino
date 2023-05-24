import React from "react";
import { Nav, NavItem } from "../styles";
import theme from "../theme";

interface HeaderProps {
  categories: string[];
  selectedCategory: string;
  handleSelectCategory: (c: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  categories,
  selectedCategory,
  handleSelectCategory,
}) => {
  return (
    <Nav>
      {categories.map((c, i) => (
        <NavItem
          style={{
            backgroundColor: selectedCategory === c ? theme.primary : "",
          }}
          onClick={() => handleSelectCategory(c)}
          key={i + c}
        >
          {c}
        </NavItem>
      ))}
    </Nav>
  );
};

export default Header;
