import type { NextPage } from "next";
import styled from "styled-components";

export type FrameComponent1Type = {
  className?: string;
};

const EmpowerYour = styled.span`
  background: linear-gradient(180deg, #fff, #cecece);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: pre-wrap;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
const VersabotsWhiteLabel = styled.span`
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
const H = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 44px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 800px) {
    font-size: 22px;
    line-height: 35px;
  }
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 26px;
  }
`;
const CommunityBannerSubtitles = styled.div`
  align-self: stretch;
  // text-align: justify;
  position: relative;
  line-height: 28px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    // text-align: justify;
    line-height: 18px;
  }
`;
const Text1 = styled.div`
  font-family: mabry;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  font-size: 20px;
  color: #e1e1e1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 18px;
  }
`;
const Text2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`;
const JoinVersabotV = styled.a`
  width: 99px;
  position: relative;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  color: #020202 !important;
  text-align: center;
  min-width: 99px;

  @media screen and (max-width: 450px) {
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
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    padding: 12px 32px;
  }
`;
const Content = styled.div`
  z-index: 12;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 56px 88px 64px;
  box-sizing: border-box;
  gap: 32px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    padding-left: 44px;
    padding-right: 44px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 28px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
const Banner = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  backdrop-filter: blur(43px);
  border-radius: 32px;
  background-color: #131313;
  border: 2px solid #303030;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    gap: 18px;
  }

  @media screen and (max-width: 1300px) {
    padding-top: 220px;
  }

  @media screen and (max-width: 1200px) {
    padding-top: 20px;
  }

  @media screen and (max-width: 800px) {
    padding-top: 120px;
  }
`;
const Test1Icon = styled.img`
  height: 723px;
  // border: 1px solid blue;
  width: 446px;
  position: relative;
  object-fit: cover;
  display: none;
  max-width: 100%;
`;
const WrapperEllipse9Child = styled.img`
  width: 100%;
  height: 100%;
  z-index: 3;
  object-fit: contain;
  position: absolute;
  left: 0px;
  top: 0px;
  transform: scale(4.483);
`;
const WrapperEllipse = styled.div`
  position: absolute;
  top: 47px;
  left: 0px;
  width: 178px;
  height: 244px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 0px;
  left: 40px;
  width: 2px;
  height: 58px;
  z-index: 4;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 193.6px;
  left: 175.4px;
  width: 51.2px;
  height: 30.7px;
  object-fit: contain;
  z-index: 4;
`;
const FrameInner = styled.img`
  position: absolute;
  top: 250.3px;
  left: 145px;
  width: 51.2px;
  height: 30.7px;
  object-fit: contain;
  z-index: 4;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 99px;
  width: 2px;
  height: 58px;
  z-index: 4;
`;
const WrapperEllipse9Parent = styled.div`
  height: 291px;
  width: 226.6px;
  position: relative;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
const Test1Parent = styled.div`
  z-index: 2;
  position: absolute;
  top: -25px;
  left: 2px;
  width: 446px;
  height: 733px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 212px 45px;
  box-sizing: border-box;
  background-image: url("/test-1@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  max-width: 100%;
  z-index: 2;

  // border: 1px solid red;

  @media screen and (max-width: 1300px) {
    width: 260px;
    position: absolute;
    height: 600px;
    top: -25px;
    z-index: 1;
    background-size: contain;
  }

  @media screen and (max-width: 1200px) {
    width: 200px;
    height: 400px;
    top: -25px;
    z-index: 1;
    background-size: contain;
  }

  @media screen and (max-width: 800px) {
    width: 140px;
    height: 200px;
    top: -25px;
    z-index: 1;
    background-size: contain;
  }
`;

const CommunityBannerContainer = styled.div`
  height: 733px;
  flex: 1;
  position: relative;
  max-width: 100%;
`;
const CommunityBannerContainerWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 60px 88px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 36px;
  color: #f7ffbb;
  font-family: Syne;
  @media screen and (max-width: 1125px) {
    padding-bottom: 96px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 62px;
    box-sizing: border-box;
  }
`;

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <CommunityBannerContainerWrapperRoot className={className}>
      <CommunityBannerContainer>
        <div id="white-label"></div>
        <Banner>
          <Content>
            <Text2>
              <H>
                <EmpowerYour>{`Empower Your Community  `}</EmpowerYour>
                <VersabotsWhiteLabel>VersaX on Telegram</VersabotsWhiteLabel>
              </H>
              <Text1>
                <CommunityBannerSubtitles>
                  VersaX offers a white-label solution to integrate a fully
                  customized version of our platform directly into your Telegram
                  channels. Enhance community engagement, provide real-time
                  trading signals, and create new revenue streams by offering
                  VersaX’s advanced features to your members—all within the
                  Telegram ecosystem.
                </CommunityBannerSubtitles>
                {/* <CommunityBannerSubtitles>
                  Provide members instant access to signals, strategies, and
                  more, all executable with a few clicks in your Telegram
                  channels, and create a new revenue stream by collecting
                  trading fees.
                </CommunityBannerSubtitles> */}
              </Text1>
            </Text2>
            <h4
              style={{
                color: "#e1e1e1",
                fontSize: "24px",
              }}
            >
              BENEFITS FOR YOUR COMMUNITY
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
                gap: "40px",
              }}
            >
              <H
                style={{
                  lineHeight: "32px",
                }}
              >
                <VersabotsWhiteLabel>
                  Branded Telegram Bot:{" "}
                </VersabotsWhiteLabel>
                <EmpowerYour>{`Tailor the bot’s interface and features to match your brand.`}</EmpowerYour>
              </H>
              <H
                style={{
                  lineHeight: "32px",
                }}
              >
                <VersabotsWhiteLabel>
                  Increased Engagement:{" "}
                </VersabotsWhiteLabel>
                <EmpowerYour>{`Keep members active with real-time trading and insights.`}</EmpowerYour>
              </H>
              <H
                style={{
                  lineHeight: "32px",
                }}
              >
                <VersabotsWhiteLabel>Revenue Generation: </VersabotsWhiteLabel>
                <EmpowerYour>{`Earn from trading fees collected within your community.`}</EmpowerYour>
              </H>
            </div>
            <Button>
              <JoinVersabotV href="#contact-us">Apply now</JoinVersabotV>
            </Button>
          </Content>
        </Banner>
        <Test1Parent>
          {/* <Test1Icon alt="" src="/test-1@2x.png" /> */}
          <WrapperEllipse9Parent>
            <WrapperEllipse>
              <WrapperEllipse9Child alt="" src="/ellipse-9-1.svg" />
            </WrapperEllipse>
            <FrameChild loading="lazy" alt="" src="/group-1000002433.svg" />
            <FrameItem loading="lazy" alt="" src="/group-1000002435@2x.png" />
            <FrameInner loading="lazy" alt="" src="/group-1000002436@2x.png" />
            <GroupIcon loading="lazy" alt="" src="/group-1000002433.svg" />
          </WrapperEllipse9Parent>
        </Test1Parent>
      </CommunityBannerContainer>
    </CommunityBannerContainerWrapperRoot>
  );
};

export default FrameComponent1;
