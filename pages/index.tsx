import type { NextPage } from "next";
import Header from "../components/header";
import Content, { Button, JoinVersabotV } from "../components/hero";
import styled from "styled-components";
import FrameComponent3 from "../components/frame-component3";
import FeatureList from "../components/feature-list";
import CallToAction from "../components/call-to-action";
import VideoShowCaseComponent from "../components/video-showcase-component";
import FrameComponent1 from "../components/frame-component1";
import Footer from "../components/footer";
import PartnersCarousel from "../components/partners-carousel";
import HeroContent from "../components/hero";
import useIntersectionObserver from "../hooks/intersectionObserver";
import FormComponent from "../components/form";

const HeroParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 109px;
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
const H = styled.h2`
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
  width: 620px;
  position: relative;
  line-height: 28px;
  display: inline-block;
  font-family: Mabry;
  text-align: left;
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
  margin-top: 120px;

  @media screen and (max-width: 450px) {
    margin-top: 100px;
    padding-bottom: 10px;
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
  margin: auto;
  z-index: 2;
  object-fit: contain;
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
  z-index: 1;
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
  max-width: 1380px;
  scare: 0.6;
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

import ScrollToTop from "../components/ScrollToTop";
import { ToastContainer } from "react-toastify";

const VersaBotDesktopOPT7: NextPage = () => {
  useIntersectionObserver(".animate-on-scroll");

  return (
    <>
      <BackgroundPatternIcon
        style={{
          zIndex: 1,
        }}
        alt=""
        src="/background-pattern-2@2x.png"
        className="animate-on-scroll"
      />
      <Header />
      <VersabotDesktopOptRoot>
        <div
          style={{
            zIndex: 2000,
          }}
        >
          <HeroParent className="animate-on-scroll">
            <HeroContent />
          </HeroParent>
        </div>
      </VersabotDesktopOptRoot>
      <PartnersCarousel className="animate-on-scroll" />
      <VersabotDesktopOptRoot
        style={
          {
            // border: "1px solid green",
          }
        }
      >
        <ImgCoin />
        <FrameComponent3 className="animate-on-scroll" />
        <VideoShowCaseComponent className="animate-on-scroll" />
        <CallToAction />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: "url(/bg-grid.svg)",
            gap: "32px",
            maxWidth: "110%",
          }}
        >
          <Info
            className="animate-on-scroll"
            style={{
              // border: "1px solid purple",
              zIndex: 2,
            }}
          >
            <InfoContent
              style={
                {
                  // border: "1px solid red",
                }
              }
            >
              <H
                style={{
                  maxWidth: "650px",
                  margin: "auto",
                }}
              >
                <ElevateYour>{`Your `}</ElevateYour>
                <DefiExperience>DeFi</DefiExperience>
                <ElevateYour>{` hub on `}</ElevateYour>
                <DefiExperience>Telegram and Web</DefiExperience>
              </H>

              <InfoDescription style={{}}>
                <Subtext
                  style={{
                    textAlign: "center",
                    // border: "1px solid red",
                  }}
                >
                  KEY FUNCTIONALITIES
                </Subtext>
              </InfoDescription>
            </InfoContent>
          </Info>
          <div
            style={
              {
                // border: "1px solid red",
              }
            }
          >
            <IconFramedGlow
              style={{
                // border: "1px solid blue",
                zIndex: 1000,
              }}
              loading="lazy"
              alt=""
              src="/icon-framed-glow@2x.png"
            />
          </div>
        </div>

        <FeatureList />

        <ShadowIcon1 alt="" src="/shadow1.svg" />

        <FrameComponent1 className="animate-on-scroll" />
        <FormComponent className="animate-on-scroll" />
        <Info
          className="animate-on-scroll"
          style={{
            // border: "1px solid purple",
            marginBottom: "200px",
            zIndex: 2,
          }}
        >
          <InfoContent
            style={{
              height: "500px",
              // border: "1px solid red",
            }}
          >
            <H
              style={{
                maxWidth: "750px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <DefiExperience>Take control </DefiExperience>
              <ElevateYour>{`of Your DeFi Journey with `}</ElevateYour>
              <DefiExperience>VersaX</DefiExperience>
            </H>

            <InfoDescription style={{}}>
              <Subtext
                style={{
                  textAlign: "center",
                  // border: "1px solid red",
                  maxWidth: "740px",
                  width: "100%",
                }}
              >
                Whether you're looking to optimize your trading strategies with
                AI or simply seeking a secure, user-friendly platform, VersaX is
                here to support your DeFi ambitions. Join our growing community
                of traders and experience the future of decentralized finance
                today, with the convenience of Telegram and the power of a
                dedicated web app.
              </Subtext>
            </InfoDescription>
            <JoinVersabotV
              style={{
                margin: "auto !important",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
              href="https://t.me/Versaxofficial_bot"
              target="_blank"
            >
              <Button
                style={{
                  margin: "auto",
                }}
              >
                START TRADING WITH VERSAX
              </Button>
            </JoinVersabotV>
          </InfoContent>
        </Info>

        <Footer />
        <ScrollToTop />
        <ToastContainer
          style={{
            zIndex: "9999999999",
          }}
          position="top-center"
          theme="dark"
        />
      </VersabotDesktopOptRoot>
    </>
  );
};
export default VersaBotDesktopOPT7;
