import type { NextPage } from "next";
import styled from "styled-components";
import useIntersectionObserver from "../hooks/intersectionObserver";

export type CallToActionType = {
  className?: string;
};

const TailoredFor = styled.span``;
const AllYourDefi = styled.span`
  background: linear-gradient(180deg, #fff, #cecece);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ImgTelegramIcon = styled.img`
  width: 406px;
  height: 350px;
  position: absolute;
  right: 60px;
  bottom: 30%;
  z-index: 4;
  @media screen and (max-width: 1200px) {
    width: 200px;
    height: 200px;
    bottom: 20%;
    right: 30px;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: 150px;
    bottom: 10%;
    right: 15px;
  }
`;

const H = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 52px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 800px) {
    font-size: 38px;
    line-height: 42px;
  }
  @media screen and (max-width: 450px) {
    font-size: 29px;
    line-height: 31px;
  }
`;
const CallToAction1 = styled.div`
  font-family: mabry;
  width: 691px;
  position: relative;
  font-size: 20px;
  line-height: 28px;
  color: #afafaf;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
const Text1 = styled.div`
  width: 835px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  max-width: 107%;
  flex-shrink: 0;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const JoinVersabotV = styled.a`
  width: 174px;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  display: inline-block;
  color: #020202 !important;
  white-space: pre-wrap;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 450px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  font-weight: 600;
  border-radius: 4px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  background-color: transparent;
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
const JoinVersabotV1 = styled.b`
  width: 188px;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  display: inline-block;
  color: #020202;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 450px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
const CallToActionButtonContaine = styled.div`
  display: flex;
  z-index: 200000;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  max-width: 100%;
  box-shadow: 0px 2px 8px rgba(235, 254, 100, 0.4) !important;

  ,
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    gap: 20px;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
const Content = styled.div`
  bg: #131313;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 871px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 56px 0px 64px 88px;
  box-sizing: border-box;
  gap: 56px;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    padding: 30px 20px;
    width: 100%;
  }
`;
const WrapperEllipse9Child = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  object-fit: contain;
  left: 0px;
  top: 0px;
  transform: scale(2.896);
  @media screen and (max-width: 800px) {
    transform: scale(1.5);
  }
  @media screen and (max-width: 450px) {
    transform: scale(1);
  }
`;
const WrapperEllipse = styled.div`
  position: absolute;
  top: 200px;
  left: 844px;
  width: 327px;
  height: 337px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    left: auto;
    top: 300px;
    right: -80px;
    width: 400px;
    height: 400px;
  }
`;
const Banner = styled.div`
  margin-top: 50px;
  height: 400px;
  width: 1096px;
  position: relative;
  backdrop-filter: blur(91px);
  border-radius: 32px;
  background-color: #131313;
  border: 2px solid #303030;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    height: 500px;
    min-height: 400px;
    width: 100%;
  }
`;
const CallToActionRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px 199px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 48px;
  color: #f7ffbb;
  font-family: Syne;
  position: relative;
  @media screen and (max-width: 800px) {
    padding-bottom: 129px;
    box-sizing: border-box;
    font-size: 32px;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 100px;
    font-size: 24px;
  }
`;

const CallToAction: NextPage<CallToActionType> = ({ className = "" }) => {
  useIntersectionObserver(".animate-on-scroll");

  return (
    <CallToActionRoot className={className}>
      <Banner>
        <Content>
          <Text1>
            <H>
              <TailoredFor>{`Tailored for `}</TailoredFor>
              <AllYourDefi>all your DeFi needs</AllYourDefi>
              <TailoredFor></TailoredFor>
            </H>
            <CallToAction1>
              VersaBot ensures a seamless and truly secure experience—your keys,
              your funds—catering to all categories of DeFi users, all through
              Telegram's intuitive and user-friendly platform.
            </CallToAction1>
          </Text1>
          <CallToActionButtonContaine>
            <Button>
              <JoinVersabotV
                target="_blank"
                href="https://t.me/OfficialVersaBot"
              >
                JOIN via telegram
              </JoinVersabotV>
            </Button>
            {/* <Button>
              <JoinVersabotV1>Launch the web app</JoinVersabotV1>
            </Button> */}
          </CallToActionButtonContaine>
        </Content>
        <WrapperEllipse>
          <img src="" alt="" />

          <WrapperEllipse9Child loading="lazy" alt="" src="/ellipse-9.svg" />
        </WrapperEllipse>
      </Banner>
      <ImgTelegramIcon
        className="animate-on-scroll"
        alt=""
        src="/img-telegram@2x.png"
      />
    </CallToActionRoot>
  );
};

export default CallToAction;
