import styled, { keyframes } from "styled-components";

// Header.tsx
const Nav = styled.header`
  background: ${props => props.theme.secondary};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  position: sticky;
  top: 0;
  overflow: auto;
`;
const NavItem = styled.div`
  padding: 10px 15px;
  color: ${props => props.theme.white};
  font-size: 22px;
  flex: 1;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
`;

// Games.tsx
const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: ${props => props.theme.white2};
`;

// Game.tsx
const show = keyframes`

  to {
    opacity: 1;
  }
  `;

const Title = styled.div`
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  text-align: center;
  color: ${props => props.theme.white};
  display: none;
  flex-direction: column;
  justify-content: flex-center;
  transition: 0.2s ease-in-out;
`;
const SingleGame = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin: 10px;
  height: 150px;
  width: 250px;
  position: relative;
  cursor: pointer;
  animation: ${show} 2s linear infinite;
  &:hover {
    box-shadow: 0px 0px 50px -12px rgba(0, 0, 0, 1);
  }
  &:hover ${Title} {
    display: flex;
  }
  &:hover .con {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  --d: 6px; /* folded part */
  --c: ${props => props.theme.primary}; /* color */
  --f: 16px; /* ribbon font-size */
  display: inline-block;

  &::before {
    content: attr(data-ribbon);
    position: absolute;
    font-size: var(--f);
    top: 0;
    right: 0;
    transform: translate(29.29%, -100%) rotate(45deg);
    color: #fff;
    text-align: center;
    border: 1px solid transparent;
    border-bottom: 0;
    transform-origin: bottom left;
    padding: 5px 35px calc(var(--d) + 5px);
    background: linear-gradient(rgba(0, 0, 0, 0.5) 0 0) bottom/100% var(--d)
      no-repeat var(--c);
    background-clip: padding-box;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      calc(100% - var(--d)) calc(100% - var(--d)),
      var(--d) calc(100% - var(--d)),
      0 100%
    );
    -webkit-mask: linear-gradient(
          135deg,
          transparent calc(50% - var(--d) * 0.707),
          #fff 0
        )
        bottom left,
      linear-gradient(-135deg, transparent calc(50% - var(--d) * 0.707), #fff 0)
        bottom right;
    -webkit-mask-size: 300vmax 300vmax;
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
  }
`;
const SingleGame2 = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin: 10px;
  height: 150px;
  width: 250px;
  position: relative;
  cursor: pointer;
  animation: ${show} 2s linear infinite;
  &:hover {
    box-shadow: 0px 0px 50px -12px rgba(0, 0, 0, 1);
  }
  &:hover ${Title} {
    display: flex;
  }
  &:hover .con {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

const Image = styled.img<{ src: string; alt: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const JackPot = styled.div`
  width: 100%;
  padding: 6px;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  z-index: 1;
  color: ${props => props.theme.white};
  font-weight: bold;
  text-align: center;
`;

const FooterEl = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
`;

export {
  GamesContainer,
  JackPot,
  Image,
  SingleGame,
  SingleGame2,
  Nav,
  NavItem,
  Title,
  FooterEl,
};
