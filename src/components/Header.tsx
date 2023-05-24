import React from "react";
import { Nav, NavItem } from "../styles";
import theme from "../theme";

interface HeaderProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Nav>
      {categories.map((c, i) => (
        <NavItem
          style={{
            backgroundColor: selectedCategory === c ? theme.primary : "",
          }}
          onClick={() => setSelectedCategory(c)}
          key={i + c}
        >
          {c}
        </NavItem>
      ))}
    </Nav>
  );
};

export default Header;
