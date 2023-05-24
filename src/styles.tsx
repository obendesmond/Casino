import styled from "styled-components";

const Nav = styled.header`
  background: ${props => props.theme.secondary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 1;
  position: sticky;
  top: 0;
  margin-bottom: 50px;
`;
const NavItem = styled.div`
  padding: 10px 5px;
  color: ${props => props.theme.white};
  font-size: 22px;
  flex: 1;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
`;

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.primary};
  background: ${props => props.theme.secondary};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export { Button, Nav, NavItem };
