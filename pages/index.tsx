import type { NextPage } from "next";
import Header from "../components/header";
import Content from "../components/content";
import styled from "styled-components";
import FrameComponent3 from "../components/frame-component3";
import FeatureList from "../components/feature-list";
import CallToAction from "../components/call-to-action";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import PartnersCarousel from "../components/partners-carousel";
import HeroContent from "../components/content";
import useIntersectionObserver from "../hooks/intersectionObserver";

const HeroParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 199px;
  box-sizing: border-box;
  gap: 68px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    padding-bottom: 129px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    gap: 34px;
  }
  @media screen and (max-width: 450px) {
    gap: 17px;
    padding-bottom: 84px;
    box-sizing: border-box;
  }
`;

const ParnersIcon1 = styled.img`
  height: 108px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
`;

const ImgCoin = styled.div`
  width: 104px;
  height: 86px;
  position: relative;
  display: none;

  z-index: 2;
`;
const ShadowIcon = styled.img`
  width: 1096px;
  position: relative;
  max-height: 100%;

  max-width: 100%;
  z-index: 3;
`;
const Logosection1 = styled.section`
  margin-right: 0px;
  margin-bottom: 256px;
  width: 1440px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`;
const ElevateYour = styled.span`
  background: linear-gradient(180deg, #fff, #cecece);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const DefiExperience = styled.span``;
const H = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 52px;
  font-weight: 700;
  font-family: inherit;
  z-index: 1;
  @media screen and (max-width: 800px) {
    font-size: 38px;
    line-height: 42px;
  }
  @media screen and (max-width: 450px) {
    font-size: 29px;
    line-height: 31px;
  }
`;
const Subtext = styled.div`
  width: 662px;
  position: relative;
  line-height: 28px;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
const InfoDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: 20px;
  color: #e1e1e1;
`;
const InfoContent = styled.div`
  width: 873px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 16px;
  }
`;
const Info = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: 48px;
  color: #f7ffbb;
  font-family: Syne;
  @media screen and (max-width: 450px) {
    padding-bottom: 125px;
    box-sizing: border-box;
  }
`;
const ImgTelegramIcon = styled.img`
  width: 406px;
  height: 350px;
  position: absolute;
  margin: 0 !important;
  right: 60px;
  bottom: 3056px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  z-index: 2;
`;
const BgGridIcon = styled.img`
  height: 713px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
`;
const IconFramedGlow = styled.img`
  height: 200px;
  width:200px
  z-index: 2;
  object-fit: contain;

  t
`;
const WrapperIconFramedGlow = styled.div`
  height: 152px;
  // background-color: red;
  width: 575px;
  position: absolute;
  margin: 0 !important;
  top: 41px;
  left: 50%;
  transform: translateX(-49%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FeaturesPreview = styled.section``;
const ShadowIcon1 = styled.img`
  width: 1095px;
  position: relative;
  max-height: 100%;
  display: none;
  max-width: 100%;
  z-index: 11;
`;
const BackgroundPatternIcon = styled.img`
  width: 100%;
  height: 720px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  left: 0px;
  border-radius: 24px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const VersabotDesktopOptRoot = styled.div`
  max-width: 1480px;
  scare: .6;
  margin: auto;
  padding-top: 50px;
  background-color: #0a0a0a;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1px;
  line-height: normal;
  letter-spacing: normal;
`;

const VersaBotDesktopOPT7: NextPage = () => {
  useIntersectionObserver(".animate-on-scroll");

  return (
    <>
      <Header />
      <VersabotDesktopOptRoot>
        <HeroParent className="animate-on-scroll">
          <HeroContent />
        </HeroParent>
        <PartnersCarousel className="animate-on-scroll" />
        <ImgCoin />
        <FrameComponent3 className="animate-on-scroll" />
        <Info className="animate-on-scroll">
          <InfoContent>
            <H>
              <ElevateYour>{`Elevate your `}</ElevateYour>
              <DefiExperience>DeFi experience</DefiExperience>
              <ElevateYour>{`  through `}</ElevateYour>
              <DefiExperience>Telegram</DefiExperience>
            </H>
            <InfoDescription>
              <Subtext>Introducing our game-changing features</Subtext>
            </InfoDescription>
          </InfoContent>
        </Info>
        <IconFramedGlow loading="lazy" alt="" src="/icon-framed-glow@2x.png" />
        <FeatureList />
        <CallToAction />
        <ShadowIcon1 alt="" src="/shadow1.svg" />
        <FrameComponent2 className="animate-on-scroll" />
        <FrameComponent1 className="animate-on-scroll" />
        <FrameComponent className="animate-on-scroll" />
        <BackgroundPatternIcon
          alt=""
          src="/background-pattern-2@2x.png"
          className="animate-on-scroll"
        />
        <Footer />
      </VersabotDesktopOptRoot>
    </>
  );
};

export default VersaBotDesktopOPT7;
