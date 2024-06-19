"use client";
import type { NextPage } from "next";
import styled from "styled-components";

export type ContentType = {
  className?: string;
};
import { motion } from "framer-motion";

const popAnimation = `
  @keyframes pop {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
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
  color: #020202;
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
const GradientText = styled.span`
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
  font-weight: 700;
  font-family: inherit;
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
  line-height: 28px;
  @media screen and (max-width: 800px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media screen and (max-width: 450px) {
    font-size: 15px;
    line-height: 21px;
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
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #020202;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 56px;
  min-width: 494px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 800px) {
    gap: 28px;
    min-width: 100%;
  }
`;
const MainPicture = styled.div`
  flex: 1;
  position: relative;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  // border: 10px solid green;
  flex: 1;
  // border: 1px solid blue;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  z-index: 1;
  img {
    max-width: 100%;
    height: auto;
    max-height: 100%;
  }

  ${popAnimation}
  ${bounceAnimation}

  .phone {
    animation: pop 1s ease-out forwards;
    // position: "absolute",
    top: "0";
    // transform: "translateX(-10%)",
  }

  .coin {
    animation: bounce 2s ease-in-out infinite;
  }

  @media screen and (min-width: 800px) {
    // border: 10px solid blue;
    width: 100%;
    img {
      max-width: none;
      height: auto;
      max-height: 100%;
    }
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  max-width: 100%;
  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media screen and (min-width: 1300px) {
    flex-direction: row-reverse;
    // flex-wrap: nowrap;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 60px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: 64px;
  color: #f7ffbb;
  font-family: Syne;
  @media screen and (max-width: 800px) {
    padding: 0px 30px;
  }
`;

const HeroContent: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <ContentWrapper className={className}>
      <HeroSection>
        <MainPicture>
          <img
            id="home"
            src="./main-phone 1.png"
            className="phone"
            style={{
              position: "absolute",
              top: "0",
              // left: "50%",
              transform: "translateX(-50%)",
            }}
            alt=""
          />
          <img
            src="./v-asset 1.png"
            style={{
              margin: "auto",
              // width: "100%",
              // maxWidth: "600px",
            }}
            alt=""
          />
          <img
            className="coin"
            src="./new-hero-coin-1 2.png"
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "20%",
              maxWidth: "100px",
            }}
            alt=""
          />
          <img
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "20%",
              maxWidth: "100px",
            }}
            className="coin"
            src="./new-hero-coin-2 1.png"
            alt=""
          />
        </MainPicture>
        <TextBlock>
          <div>
            <Heading>
              <GradientText>Introducing a </GradientText>
              <span>Fully Non-custodial</span>
              <GradientText> Web3 trading experience</GradientText>
            </Heading>
            <div>
              <Paragraph>
                VersaBot is the world’s first non-custodial, cross-chain EVM
                Telegram Bot enhanced by VersaAI. Experience seamless
                onboarding, advanced DeFi features, and top-notch security.
              </Paragraph>
              <Paragraph>
                Connect your DeFi wallet in one click, effortlessly buy crypto
                with fiat, swap assets with AI, and unlock advanced features.
                Bridge assets, trade perpetuals, lend, borrow, engage in P2P,
                use on-chain orderbooks, get real-time notifications, and
                more—all with VersaBot.
              </Paragraph>
            </div>
          </div>
          <JoinVersabotV href="https://t.me/versadex" target="_blank">
            <Button>JOIN VERSABOT V1</Button>
          </JoinVersabotV>
        </TextBlock>
      </HeroSection>
    </ContentWrapper>
  );
};

export default HeroContent;
