import type { NextPage } from "next";
import styled from "styled-components";

export type FrameComponent3Type = {
  className?: string;
};

const Making = styled.span`
  background: linear-gradient(180deg, #fff, #cecece);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  media (max-width: 800px) {
    text-align: center;
  }
`;
const DefiTrulyAccessible = styled.span``;
const H = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 52px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 800px) {
    font-size: 28px;
    line-height: 42px;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    font-size: 29px;
    line-height: 31px;
  }
`;
const BannerSubtitleItems = styled.div`
  align-self: stretch;
  font-family: mabry;
  @media (max-width: 800px) {
    text-align: center;
  }
  position: relative;
  line-height: 28px;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-align: justify;
  }

`;
const BannerSubtitleItems1 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 28px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
const BannerSubtitles = styled.div`
  // border: 1px solid green;
  width: 559px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 800px) {
    align-items: center;
  }
  gap: 16px;
  max-width: 100%;
  font-size: 20px;
  color: #e1e1e1;
`;
const BannerContent = styled.div`
  media (max-width: 800px) {
    align-items: center;
  }
  width: 672px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  min-width: 672px;
  max-width: 100%;
  @media screen and (max-width: 1300px) {
    flex: 1;
  }
  @media screen and (max-width: 1125px) {
    min-width: 100%;
  }
`;

const Banner = styled.div`
  backdrop-filter: blur(43px);
  border-radius: 32px;
  background-color: #131313;
  border: 2px solid #303030;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
  padding: 53px 88px 61px;
  position: relative;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
    padding-left: 44px;
    padding-right: 44px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    gap: 42px;
    padding: 34px 22px 40px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 21px;
  }
`;
const BannerWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 60px 199px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 48px;
  color: #f7ffbb;
  font-family: Syne;
  @media screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 129px;
    box-sizing: border-box;
    margin-top: 100px;
  }
  margin-top: 200px;
`;

const RobotContainer = styled.section`
  max-width: 600px;
  max-height: 600px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;
const RobotIcon = styled.img`
  width: 100%;
  //position: absolute;
  height: 100%;
  // width: 648px;
  scale: 1.4;
  // height: 540px;
  // border: 1px solid red;
  @media screen and (max-width: 800) {
    // border: 1px solid blue;
    margin-top: 20px;
  }
  @media screen and (max-width: 1200px) {
    // border: 1px solid green;
    display: none;
    margin-top: 20px;
  }
`;

const RobotIconMobile = styled.img`
  width: 100%;
  height: 100%;
  // border: 1px solid blue;
  display: none;
  margin: auto;
  @media screen and (max-width: 1200px) {
    // border: 1px solid green;
    display: block;
    margin-top: 20px;
  }
`;

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <BannerWrapperRoot
      style={
        {
          // border: "1px solid red",
        }
      }
      className={className}
    >
      <Banner>
        <BannerContent>
          <H>
            <Making>{`Making `}</Making>
            <DefiTrulyAccessible>DeFi truly accessible</DefiTrulyAccessible>
            <Making>{` to everyone with `}</Making>
            <DefiTrulyAccessible>VersaAI</DefiTrulyAccessible>
          </H>
          <BannerSubtitles>
            <BannerSubtitleItems >
              VersaAI empowers users to perform transactions with VersaBot in
              their preferred language. By simply typing  straightforward
              instructions, you can effortlessly initiate trades in just a few
              clicks.
            </BannerSubtitleItems>

            <RobotIconMobile alt="" src="/img@2x.png" />

            <BannerSubtitleItems>
              VersaAI will soon support voice commands, manage advanced DeFi
              strategies, and offer more innovative features, providing seamless
              interactions and advanced investment tools.
            </BannerSubtitleItems>
          </BannerSubtitles>
        </BannerContent>

        <RobotContainer>
          <RobotIcon alt="" src="/img@2x.png" />
        </RobotContainer>
      </Banner>
    </BannerWrapperRoot>
  );
};

export default FrameComponent3;
