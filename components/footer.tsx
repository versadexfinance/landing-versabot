import type { NextPage } from "next";
import styled from "styled-components";

export type FooterType = {
  className?: string;
};

const WrapperEllipse8Child = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  left: 0px;
  top: 0px;
  transform: scale(2.638);
`;
const WrapperEllipse = styled.div`
  width: 401.1px;
  height: 413px;
  position: absolute;
  margin: 0 !important;
  top: -333px;
  right: -101.1px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;
const H = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 52px;
  font-weight: 700;
  font-family: inherit;
  background: linear-gradient(199.92deg, #fff, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 800px) {
    font-size: 38px;
    line-height: 42px;
  }
  @media screen and (max-width: 450px) {
    font-size: 29px;
    line-height: 31px;
  }
`;
const SubscriptionDescription = styled.div`
  font-family: mabry;
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 28px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
const Text1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  min-width: 350px;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: 16px;
    min-width: 100%;
  }
`;
const SubscriptionPlaceholderButto = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  height: 28px;
  flex: 1;
  position: relative;
  line-height: 28px;
  color: #bfbfbf;
  text-align: left;
  display: inline-block;
  min-width: 187px;
  padding: 0;
`;
const Input = styled.div`
  flex: 1;
  border-radius: 4px;
  border: 1px solid #535353;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 19px;
  min-width: 229px;
  max-width: 100%;
`;
const JoinVersabotV = styled.b`
  width: 94px;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  display: inline-block;
  color: #020202;
  text-align: center;
  min-width: 94px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 16px 40px;

  background-color: transparent;
  box-shadow: 0px 2px 8px rgba(235, 254, 100, 0.4);
  border-radius: 4px;
  background: linear-gradient(180deg, #ebfe64, #8cea69);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 800px) {
    padding: 12px 30px;
  }
`;
const Form = styled.div`
  width: 550px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    padding: 20px;
  }
`;
const Subscription = styled.div`
  width: 1144px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 56px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 800px) {
    gap: 28px;
  }
`;
const Line = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid #595959;
  box-sizing: border-box;
`;
const LogoIcon = styled.img`
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
const BrandContainerIcon = styled.img`
  align-self: stretch;
  height: 18px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  @media (max-width: 800px) {
    height: 18px;
    width: 120px;
  }
`;
const LogoText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;
`;
const WebLogo = styled.div`
  width: 204px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Docs = styled.a`
  text-decoration: none;
  color: inherit;
  align-self: stretch;
  width: 42px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: none;
`;
const Home = styled.a`
  text-decoration: none;
  color: inherit;
  width: 47px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  min-width: 47px;
`;
const Docs1 = styled.a`
  text-decoration: none;
  color: inherit;
  width: 42px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: inline-block;
  min-width: 42px;
`;
const ContactUs = styled.a`
  width: 93px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: inline-block;
`;
const ForCommunities = styled.a`
  width: 140px;
  text-decoration: none;
  color: inherit;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: inline-block;
`;
const NavOptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: 10px;
  font-size: 16px;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const Menu = styled.div`
  width: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 36px;
  max-width: 100%;
  @media screen and (min-width: 800px) {
    font-size: 12x !important; 
    gap: 10px;
    bg-color: blue !important;
  }
`;
const Menu1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;
const VersadexCopyright = styled.div`
  width: 304px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: inline-block;
`;
const SocialIcons = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 24px;
`;
const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
`;
const CopyrightSocials = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  font-size: 14px;
  color: #4d4d4d;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const LineParent = styled.div`
  width: 1144px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 31.5px;
  max-width: 100%;
  text-align: center;
  font-size: 18px;
  color: #e1e1e1;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`;
const Footer1 = styled.div`
  flex: 1;
  backdrop-filter: blur(43px);
  border-radius: 32px;
  background: linear-gradient(176.62deg, #131313, #0a0a0a);
  border: 2px solid #303030;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 65px 20px 61px;
  position: relative;
  gap: 96px;
  max-width: 100%;
  @media screen and (max-width: 1300px) {
    gap: 48px;
  }
  @media screen and (max-width: 800px) {
    gap: 24px;
  }
  @media screen and (max-width: 450px) {
    padding-top: 42px;
    padding-bottom: 40px;
    box-sizing: border-box;
  }
`;
const FooterRoot = styled.footer`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 60px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 48px;
  color: #fff;
  font-family: Syne;
  @media screen and (max-width: 800px) {
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
  }
`;

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <FooterRoot className={className}>
      <Footer1>
        <WrapperEllipse>
          <WrapperEllipse8Child loading="lazy" alt="" src="/ellipse-8.svg" />
        </WrapperEllipse>
        <Subscription>
          <Text1>
            <H>Referral program</H>
            <SubscriptionDescription  >
              Coming soon! Drop your e-mail to join the program
            </SubscriptionDescription>
          </Text1>
          <Form>
            <Input>
              <SubscriptionPlaceholderButto
                placeholder="Your E-mail"
                type="text"
              />
            </Input>
            <Button>
              <JoinVersabotV>Subscribe</JoinVersabotV>
            </Button>
          </Form>
        </Subscription>
        <LineParent>
          <Line />
          <Menu1>
            <WebLogo>
              <LogoIcon alt="" src="/logo-icon-1@2x.png" />
              <LogoText>
                <BrandContainerIcon alt="" src="/frame-255-1@2x.png" />
              </LogoText>
            </WebLogo>
            <Menu>
              <Docs>Docs</Docs>
              <NavOptions>
                <Home href="#home">Home</Home>
                <Docs1
                  href="https://docs.versadex.finance/versabot"
                  target="_blank"
                >
                  Docs
                </Docs1>
                <ContactUs>Contact us</ContactUs>
                <ForCommunities href="#white-label">
                  For Communities
                </ForCommunities>
              </NavOptions>
            </Menu>
          </Menu1>
          <CopyrightSocials>
            <VersadexCopyright>
              VersaDex Copyright 2024. All Rights Reserved.
            </VersadexCopyright>
            <SocialIconsContainer>
              <SocialIcons loading="lazy" alt="" src="/social-icons.svg" />
              <a href="https://x.com/versadex" target="_blank">
                <SocialIcons alt="" src="/social-icons-1.svg" />
              </a>
            </SocialIconsContainer>
          </CopyrightSocials>
        </LineParent>
      </Footer1>
    </FooterRoot>
  );
};

export default Footer;


