import type { NextPage } from "next";
import styled from "styled-components";
import { useState } from "react";

export type HeaderType = {
  className?: string;
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  background-color: transparent;
  box-shadow: 0px 2px 8px rgba(235, 254, 100, 0.4);
  border-radius: 4px;
  background: linear-gradient(180deg, #ebfe64, #8cea69);
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #020202 !important;
  text-align: center;
  white-space: nowrap;
  display: inline-block;
  @media screen and (max-width: 800px) {
    padding: 14px 35px;
    font-size: 14px;
    line-height: 22px;
  }
  @media screen and (max-width: 450px) {
    padding: 12px 30px;
    font-size: 12px;
    line-height: 20px;
  }
`;

const LogoIcon = styled.div`
  height: 40px;
  width: 50px;
  position: relative;
  object-fit: cover;
  @media (max-width: 800px) {
    text-align: center;
    height: 20px;
    width: 25px;
  }
`;
const NavPlaceholderIcon = styled.img`
  align-self: stretch;
  // height: 25px;
  position: relative;
  max-width: 100%;
  marginBott
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  @media (max-width: 800px) {
    height: 30px;
    width: 120px;
  }
`;
const Navigation1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 11px 0px 0px;
  @media (max-width: 800px) {
    padding-top: 2px;
  }
`;
const HeaderContent = styled.div`
  width: 204px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  align-self: center;
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
  margin-top: 5px;
  font-family: mabry;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
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
  font-weight: 600;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  display: inline-block;
  color: #020202 !important;
  white-space: pre-wrap;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(235, 254, 100, 0.4);

  @media screen and (max-width: 1200px) {
    font-size: 12px;

    line-height: 18px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 450px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const NavBtn = styled.button`
  cursor: pointer;
  border: none;
  padding: 8px 24px;
  background-color: transparent;
  border-radius: 4px;
  background: linear-gradient(180deg, #ebfe64, #8cea69);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  height: 35px;
  margin-left: 20px;
  @media screen and (max-width: 1200px) {
    padding: 4px 12px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    display: none;
    font-size: 14px;
    line-height: 20px;
  }
`;

const NavBtnMenu = styled.button`
  cursor: pointer;
  border: none;
  padding: 8px 24px;
  background-color: transparent;
  border-radius: 4px;
  background: linear-gradient(180deg, #ebfe64, #8cea69);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
`;

const HeaderRoot = styled.header`
  padding: 10px 60px;
  align-self: stretch;
  backdrop-filter: blur(50px);
  background-color: rgba(10, 10, 10, 0.5);
  border-bottom: 1px solid #1f1f1f;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  top: 0;
  z-index: 9999999;
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

const HamburguerCntainer = styled.div`
  align-self: center;
  display:none;
  @media screen and (max-width: 1125px) {
    display: flex;
    height: 100%,
    
    justifyContent: "space-between",
   margin: auto,
  }
`;

const MobileMenu = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${({ open }) => (open ? "64px" : "-400px")};
  left: 0;
  gap: 20px;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.9);
  padding: ${({ open }) => (open ? "20px" : "0")};
  box-sizing: border-box;
  transition: opacity 0.4s ease, visibility 0.4s ease;

  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  ${Home}, ${Docs}, ${ContactUs}, ${ForCommunities}, ${LaunchTheWeb} {
    margin: 10px 0;
    transition: opacity 0.4s ease;
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
`;
const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderRoot className={className}>
      <div
        style={{
          display: "flex",
          width: "1500px",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
          height: "50px",
        }}
      >
        <HeaderContent>
          <LogoIcon />
          <Navigation1>
            <NavPlaceholderIcon alt="" src="/versax-logo.svg" />
          </Navigation1>
        </HeaderContent>
        <Menu>
          <NavLinks onClick={() => setMenuOpen(false)}>
            <Home href="#home">Home</Home>
            <Docs href="https://docs.versadex.finance/versabot" target="_blank">
              Docs
            </Docs>
            <ContactUs href="#contact-us">Contact us</ContactUs>
            <ForCommunities href="#white-label">For Communities</ForCommunities>
          </NavLinks>
        </Menu>
        <NavBtn>
          <div
            style={{
              display: "flex",
            }}
          >
            <JoinVersabotV href="https://t.me/OfficialVersaBot" target="_blank">
              JOIN VERSABOT V1
            </JoinVersabotV>
          </div>
        </NavBtn>
      </div>
      <HamburguerCntainer style={{}}>
        <Hamburger onClick={toggleMenu}>
          <img width={80} src="/hamburguer.svg" alt="" />
        </Hamburger>
      </HamburguerCntainer>
      <MobileMenu open={menuOpen}>
        <Home href="#home">Home</Home>
        <Docs href="https://docs.versadex.finance/versabot" target="_blank">
          Docs
        </Docs>
        <ContactUs href="#contact-us">Contact us</ContactUs>
        <ForCommunities href="#white-label">For Communities</ForCommunities>
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
