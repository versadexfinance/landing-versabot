import type { NextPage } from "next";
import styled from "styled-components";
import { GradientText, MainPicture } from "./hero";

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
const H = styled.h2`
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
    // text-align: center;
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
    // text-align: center;
    font-size: 16px;
  }
  position: relative;
  line-height: 28px;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    // text-align: justify;
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
  // width: 559px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 1200px) {
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
  flex-direction: row;
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
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  // gap: 40px;
  padding: 53px 88px 61px;
  position: relative;
  max-width: 100%;
  z-index: 1;
  box-shadow: 0px 2px 20px rgba(235, 254, 100, 0.01) !important;
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
  flex: 1;
  width: 100%;
  position: relative;
  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 1200px) {
    // border: 1px solid green;
    display: none !important;
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

const RobotIconMobile = styled.div`
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
      style={{
        padding: "12px",
        paddingBottom: "100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",

        // border: "1px solid red",
      }}
      className={className}
    >
      <Banner>
        <BannerContent
          style={{
            width: "100%",
            // border: "1px solid green",
          }}
        >
          <div
            style={{
              flex: 1,
              // border: "1px solid blue",
            }}
          >
            <H
              style={{
                marginBottom: "40px",
              }}
            >
              <Making>{`Revolutionizing `}</Making>
              <DefiTrulyAccessible>DeFi</DefiTrulyAccessible>
              <Making>{`  with `}</Making>
              <DefiTrulyAccessible>AI and Telegram</DefiTrulyAccessible>
            </H>
            <BannerSubtitles>
              <BannerSubtitleItems>
                VersaX combines the power of Artificial Intelligence with the
                security convenience of a non-custodial Telegram bot and a web
                app. Our platform offers traders a simple, intuitive interface
                to manage digital assets, execute trades, and access advanced
                DeFi tools—all within the familiar environment of Telegram or
                through our web app.
              </BannerSubtitleItems>

              {/* <RobotIconMobile
              alt=""
              src="https://res.cloudinary.com/versadex/image/upload/v1718976331/i0m6flhscjoiop8nbify.png"
            /> */}
              <RobotIconMobile>
                <MainPicture>
                  <img
                    loading="lazy"
                    className="coin"
                    style={{
                      bottom: "7%",
                      zIndex: "21",
                      right: "8%",
                      width: "130px !important",
                    }}
                    src="./new-hero-coin-1 2.png"
                    alt="Coin 1"
                  />
                  <img
                    loading="lazy"
                    className="coin"
                    style={{
                      top: "5%",
                      zIndex: "-1",

                      width: "85px",
                      left: "1%",
                    }}
                    src="./new-hero-coin-2 1.png"
                    alt="Coin 2"
                  />
                  <img
                    id="home"
                    loading="lazy"
                    style={{
                      zIndex: "11",
                    }}
                    src="/main-phone 1.png"
                    className="phone"
                    alt="Phone"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/versadex/image/upload/v1718976348/v-asset%201.png.png"
                    style={{ zIndex: "10", margin: "auto", width: "100%" }}
                    alt="V Asset"
                  />
                </MainPicture>
              </RobotIconMobile>
            </BannerSubtitles>
          </div>

          <RobotContainer
            style={{
              // border: "1px solid red",
              minWidth: "50%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MainPicture>
              <img
                loading="lazy"
                className="coin"
                style={{
                  bottom: "7%",
                  zIndex: "21",
                  right: "8%",
                  width: "130px !important",
                }}
                src="./new-hero-coin-1 2.png"
                alt="Coin 1"
              />
              <img
                loading="lazy"
                className="coin"
                style={{
                  top: "5%",
                  zIndex: "-1",

                  width: "85px",
                  left: "1%",
                }}
                src="./new-hero-coin-2 1.png"
                alt="Coin 2"
              />
              <img
                id="home"
                loading="lazy"
                style={{
                  zIndex: "11",
                }}
                src="/main-phone 1.png"
                className="phone"
                alt="Phone"
              />
              <img
                loading="lazy"
                src="https://res.cloudinary.com/versadex/image/upload/v1718976348/v-asset%201.png.png"
                style={{ zIndex: "10", margin: "auto", width: "100%" }}
                alt="V Asset"
              />
            </MainPicture>
          </RobotContainer>
        </BannerContent>

        <div
          style={{
            // border: "1px solid yellow",
            width: "100%",
            marginTop: "-100px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              textTransform: "uppercase",
              color: "#e1e1e1",
            }}
          >
            Key Features
          </h2>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                maxWidth: "500px",
                gap: "40px",
              }}
            >
              <img
                src="/1.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                }}
              />
              <span
                style={{
                  margin: "0",
                  lineHeight: "40px",
                  fontSize: "28px",
                }}
              >
                <GradientText>Trade on</GradientText>
                Your Mobile
                <GradientText> or Browser with </GradientText>
                VersaX
              </span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "40px",
              }}
            >
              <img
                src="/2.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                }}
              />
              <span
                style={{
                  margin: "0",
                  lineHeight: "40px",
                  fontSize: "28px",
                  maxWidth: "650px",
                }}
              >
                <GradientText>Complete </GradientText> Non-Custodial Wallet
                <GradientText> Access for</GradientText> Full Security
              </span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "40px",
              }}
            >
              <img
                src="/3.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                }}
              />
              <span
                style={{
                  margin: "0",
                  lineHeight: "40px",
                  fontSize: "28px",
                  maxWidth: "700px",
                }}
              >
                <GradientText>Experience the </GradientText>
                New DeFi
                <GradientText> with </GradientText>AI-Powered Interactions
              </span>
            </div>
          </div>
        </div>
      </Banner>
    </BannerWrapperRoot>

    // <BannerWrapperRoot>
    //   <div className="grid-container">
    //     <div className="grid-TEXT">
    //       <H>
    //         <Making>{`Making `}</Making>
    //         <DefiTrulyAccessible>DeFi truly accessible</DefiTrulyAccessible>
    //         <Making>{` to everyone with `}</Making>
    //         <DefiTrulyAccessible>VersaAI</DefiTrulyAccessible>
    //       </H>
    //       <BannerSubtitles>
    //         <BannerSubtitleItems>
    //           VersaX combines the power of Artificial Intelligence with the
    //           security convenience of a non-custodial Telegram bot and a web
    //           app. Our platform offers traders a simple, intuitive interface to
    //           manage digital assets, execute trades, and access advanced DeFi
    //           tools—all within the familiar environment of Telegram or through
    //           our web app.
    //         </BannerSubtitleItems>
    //       </BannerSubtitles>
    //     </div>
    //     <div className="grid-FUNCTIONALITIES">
    //       <div>
    //         <h2>Key Features</h2>
    //         <div
    //           style={{
    //             display: "flex",
    //             flexDirection: "column",
    //           }}
    //         >
    //           <div
    //             style={{
    //               display: "flex",
    //             }}
    //           >
    //             <img
    //               src="/1.svg"
    //               alt=""
    //               style={{
    //                 width: "80px",
    //                 height: "80px",
    //               }}
    //             />
    //             <span
    //               style={{
    //                 margin: "0",
    //                 lineHeight: "40px",
    //                 fontSize: "28px",
    //               }}
    //             >
    //               Trade on Your Mobile or browser with VersaX
    //             </span>
    //           </div>
    //           <div
    //             style={{
    //               display: "flex",
    //             }}
    //           >
    //             <img
    //               src="/2.svg"
    //               alt=""
    //               style={{
    //                 width: "80px",
    //                 height: "80px",
    //               }}
    //             />
    //             <span
    //               style={{
    //                 margin: "0",
    //                 lineHeight: "40px",
    //                 fontSize: "28px",
    //               }}
    //             >
    //               Complete Non-Custodial Wallet Access for Full Security
    //             </span>
    //           </div>
    //           <div
    //             style={{
    //               display: "flex",
    //             }}
    //           >
    //             <img
    //               src="/3.svg"
    //               alt=""
    //               style={{
    //                 width: "80px",
    //                 height: "80px",
    //               }}
    //             />
    //             <span
    //               style={{
    //                 margin: "0",
    //                 lineHeight: "40px",
    //                 fontSize: "28px",
    //               }}
    //             >
    //               Experience the New DeFi with AI-Powered Interactions
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="grid-PICTURE">
    //       <RobotContainer>
    //         <MainPicture>
    //           <img
    //             loading="lazy"
    //             className="coin"
    //             style={{
    //               bottom: "7%",
    //               zIndex: "21",
    //               right: "8%",
    //               width: "130px !important",
    //             }}
    //             src="./new-hero-coin-1 2.png"
    //             alt="Coin 1"
    //           />
    //           <img
    //             loading="lazy"
    //             className="coin"
    //             style={{
    //               top: "5%",
    //               zIndex: "-1",

    //               width: "85px",
    //               left: "1%",
    //             }}
    //             src="./new-hero-coin-2 1.png"
    //             alt="Coin 2"
    //           />
    //           <img
    //             id="home"
    //             loading="lazy"
    //             style={{
    //               zIndex: "11",
    //             }}
    //             src="https://res.cloudinary.com/versadex/image/upload/v1718976335/ip5gkqiii64ku39zyrhy.png"
    //             className="phone"
    //             alt="Phone"
    //           />
    //           <img
    //             loading="lazy"
    //             src="https://res.cloudinary.com/versadex/image/upload/v1718976348/v-asset%201.png.png"
    //             style={{ zIndex: "10", margin: "auto", width: "100%" }}
    //             alt="V Asset"
    //           />
    //         </MainPicture>
    //       </RobotContainer>
    //     </div>
    //   </div>
    // </BannerWrapperRoot>
  );
};

export default FrameComponent3;
