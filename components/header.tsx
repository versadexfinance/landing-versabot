import type { NextPage } from "next";
import styled from "styled-components";
import { useState } from "react";

export type HeaderType = {
  className?: string;
};

const LogoIcon = styled.img`
  height: 40px;
  width: 50px;
  position: relative;
  object-fit: cover;
`;
const NavPlaceholderIcon = styled.img`
  align-self: stretch;
  height: 18px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Navigation1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 11px 0px 0px;
`;
const HeaderContent = styled.div`
  width: 204px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;
const Home = styled.a`
  text-decoration: none;
  width: 47px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 47px;
`;
const Docs = styled.a`
  text-decoration: none;
  width: 42px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 42px;
`;
const ContactUs = styled.a`
  text-decoration: none;
  width: 93px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  white-space: nowrap;
`;
const ForCommunities = styled.a`
  text-decoration: none;
  color: white;
  width: 140px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  white-space: nowrap;
`;
const LaunchTheWeb = styled.a`
  text-decoration: none;
  width: 166px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: inline-block;
  white-space: nowrap;
`;
const NavLinks = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 1125px) {
    display: none;
  }
`;
const Menu = styled.div`
  width: 712px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    width: 0px;
  }
`;
const JoinVersabotV = styled.a`
  text-decoration: none;
  width: 157px;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  cursor:
  font-weight: 700;
  color: #020202;
  text-align: center;
  display: inline-block;
`;
const NavBtn = styled.button`
  cursor: pointer;
  border: none;
  padding: 8px 24px;
  background-color: transparent;
  box-shadow: 0px 2px 8px rgba(235, 254, 100, 0.4);
  border-radius: 4px;
  background: linear-gradient(180deg, #ebfe64, #8cea69);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const NavBtnMenu = styled.button`
  cursor: pointer;
  border: none;
  padding: 8px 24px;
  background-color: transparent;
  box-shadow: 0px 2px 8px rgba(235, 254, 100, 0.4);
  border-radius: 4px;
  background: linear-gradient(180deg, #ebfe64, #8cea69);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
`;

const HeaderRoot = styled.header`
  align-self: stretch;
  backdrop-filter: blur(50px);
  background-color: rgba(10, 10, 10, 0.5);
  border-bottom: 1px solid #1f1f1f;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 60px;
  top: 0;
  z-index: 99;
  position: sticky;
  gap: 20px;
  max-width: 100%;
  text-align: center;
  font-size: 18px;
  color: #e1e1e1;

  @media screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media screen and (max-width: 1125px) {
    display: flex;
  }
`;

const Bar = styled.div`
  height: 3px;
  width: 25px;
  background-color: #e1e1e1;
  margin: 4px 0;
  transition: 0.4s;
`;

const MobileMenu = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.9);
  padding: 20px;
  box-sizing: border-box;

  ${Home}, ${Docs}, ${ContactUs}, ${ForCommunities}, ${LaunchTheWeb} {
    margin: 10px 0;
  }
`;

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderRoot className={className}>
      <HeaderContent>
        <LogoIcon alt="" src="/logo-icon@2x.png" />
        <Navigation1>
          <NavPlaceholderIcon alt="" src="/nav-placeholder@2x.png" />
        </Navigation1>
      </HeaderContent>
      <Menu>
        <NavLinks>
          <Home href="#home">Home</Home>
          <Docs href="https://docs.versadex.finance/versabot" target="_blank">
            Docs
          </Docs>
          <ContactUs href="#contact-us">Contact us</ContactUs>
          <ForCommunities href="#white-label">For Communities</ForCommunities>
          {/* <LaunchTheWeb>Launch the web app</LaunchTheWeb> */}
        </NavLinks>
      </Menu>
      <NavBtn>
        <JoinVersabotV href="https://t.me/versadex" target="_blank">
          JOIN VERSABOT V1
        </JoinVersabotV>
      </NavBtn>
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <MobileMenu open={menuOpen}>
        <Home href="#home">Home</Home>
        <Docs href="https://docs.versadex.finance/versabot" target="_blank">
          Docs
        </Docs>
        <ContactUs href="#contact-us">Contact us</ContactUs>
        <ForCommunities href="#whitel-label">For Communities</ForCommunities>
        {/* <LaunchTheWeb>Launch the web app</LaunchTheWeb> */}
        <NavBtnMenu>
          <JoinVersabotV href="https://t.me/versadex" target="_blank">
            JOIN VERSABOT V1
          </JoinVersabotV>
        </NavBtnMenu>
      </MobileMenu>
    </HeaderRoot>
  );
};

export default Header;
