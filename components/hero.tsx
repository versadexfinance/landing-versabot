"use client";
import type { NextPage } from "next";
import styled from "styled-components";

export type ContentType = {
  className?: string;
};

const popAnimation = `
  @keyframes pop {
    0% {
      transform: scale(0.8);
      opacity: 0; 
    }
    50% {
      transform: scale(1.01);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const JoinVersabotV = styled.a`
  width: 174px;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  display: inline-block;
  color: #020202;

  white-space: pre-wrap;
  text-align: center;
  // background-color: #ebfe64;
  // padding: 12px;
  border-radius: 4px;
  margin-top: 22px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 450px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const bounceAnimation = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const phoneVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const coinVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { yoyo: Infinity, duration: 0.5, ease: "easeInOut" },
  },
};

export const GradientText = styled.span`
  background: linear-gradient(180deg, #fff, #cecece);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Heading = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 72px;
  font-size: 55px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 1300px) {
    font-size: 50px;
    line-height: 60px;
  }
  @media screen and (max-width: 1300px) {
    font-size: 45px;
    line-height: 55px;
  }
  @media screen and (max-width: 800px) {
    font-size: 40px;
    line-height: 50px;
  }
  @media screen and (max-width: 450px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  text-align: justify;
  margin-top: 20px;
  font-size: 20px;
  color: #e1e1e1;
  font-family: mabry;
  line-height: 28px;
  max-width: 600px;
  @media screen and (max-width: 800px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media screen and (max-width: 450px) {
    font-size: 15px;
    line-height: 21px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  font-weight: 600;
  border-radius: 4px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  background-color: transparent;
  box-shadow: 0px 2px 8px rgba(235, 254, 100, 0.4) !important;,
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

const TextBlock = styled.div`
  // border: 1px solid red;

  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  haeight: 100%;
  justify-content: space-between;
  gap: 20px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 800px) {
    gap: 28px;
    min-width: 100%;
  }
`;

export const MainPicture = styled.div`
  flex: 4;
  margin-top: 30px;
  max-width: 80%;
  // padding:  20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  ${popAnimation}
  ${bounceAnimation}
  // border: 1px solid red;

  .phone {
    animation: pop 1s ease-out forwards;
    position: absolute;
    height: 80%;
    top: 0;
    transform: translateX(-50%);
  }

  .coin {
    animation: bounce 2s ease-in-out infinite;
    position: absolute;
    width: 20%;
    max-width: 35%;
  }

  // .coin:first-of-type {
  //   border: 1px solid red;
  //   top: 20px;
  //   left: 0;
  // }

  // .coin:last-of-type {
  //   bottom: 0;
  //   right: 0;
  // }
  @media screen and (max-width: 680px) {
    max-width: 100%;
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  max-width: 100%;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-image: url("./bg-hero.png");
  padding: 0px 60px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: 64px;
  color: #f7ffbb;
  font-family: Syne;
  @media screen and (max-width: 1300px) {
    padding: 0px 44px;
  }
  @media screen and (max-width: 800px) {
    padding: 0px 30px;
    flex-direction: column;
    align-items: center;
  }
`;

const Arrow = styled.div`
  display: flex;
  // align-items: center;
  // justify-content: center;
  margin-top: 30px;
  cursor: pointer;
  img {
    animation: bounce 5s ease-in-out infinite;
  }
  padding: 0px 60px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: 64px;
  color: #f7ffbb;
  font-family: Syne;
  padding: 0px 60px;
  @media screen and (max-width: 1300px) {
    // display: none;
    margin-top: 20px;
    padding: 0px 44px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    padding: 0px 30px;
  }
`;

const HeroContent: NextPage<ContentType> = ({ className = "" }) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ContentWrapper className={className}>
        <HeroSection>
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
            {/* <img
              id="home"
              loading="lazy"
              style={{
                zIndex: "11",
              }}
              src="https://res.cloudinary.com/versadex/image/upload/v1718976331/i0m6flhscjoiop8nbify.png"
              className="phone"
              alt="Phone"
            /> */}
            <img
              loading="lazy"
              src="https://res.cloudinary.com/versadex/image/upload/v1718976331/i0m6flhscjoiop8nbify.png"
              style={{ zIndex: "10", margin: "auto", width: "110%" }}
              alt="V Asset"
            />
          </MainPicture>
          <TextBlock>
            <div>
              <Heading>
                <span>VersaX: </span>
                <GradientText>The AI-Powered,</GradientText>
                <GradientText> Non-Custodial Trading Experience</GradientText>
              </Heading>
              <div>
                <Paragraph>
                  {/* VersaBot is the world’s first non-custodial, cross-chain EVM
                  Telegram Bot enhanced by VersaAI. Experience seamless
                  onboarding, advanced DeFi features, and top-notch security. */}
                  Experience seamless, non-custodial DeFi trading with VersaX—an
                  AI-enhanced platform integrated into Telegram and supported by
                  a powerful web app. Leverage AI to manage your assets, execute
                  intelligent trades, and explore advanced DeFi features with
                  ease and security.
                </Paragraph>
                {/* <Paragraph>
                Connect your DeFi wallet in one click, effortlessly buy crypto
                with fiat, swap assets with AI, and unlock advanced features.
                Bridge assets, trade perpetuals, lend, borrow, engage in P2P,
                use on-chain orderbooks, get real-time notifications, and
                more—all with VersaBot.
              </Paragraph> */}
              </div>
            </div>
            <div>
              <JoinVersabotV
                href="https://t.me/OfficialVersaBot"
                target="_blank"
              >
                <Button>START TRADING WITH VERSAX</Button>
              </JoinVersabotV>
            </div>
          </TextBlock>
        </HeroSection>
      </ContentWrapper>
      <Arrow onClick={() => scrollToBottom()}>
        <img width={32} src="/down-arrow.svg" alt="" />
      </Arrow>
    </div>
  );
};

export default HeroContent;
