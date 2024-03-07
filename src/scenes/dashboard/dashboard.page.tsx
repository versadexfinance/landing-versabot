"use client";

import React from "react";

import "./fonts.css";

import { Flex, Stack } from "@/components/box";
import AnimatedPage from "@/components/animated-page";
import Typography from "@/components/typography";
import media from "@/styled/media";
import { useMediaQuery } from "usehooks-ts";
import HeroSection from "./components/HeroSection";
import OrbitingFeatures from "./components/Featuresorbit";
import VideoComponent from "./components/VideoComponent";
import CryptoInfoSection from "./components/CryptoInfoSection";
import ReferralProgram from "./components/ReferralProgram";
import ContactForm from "./components/ContactForm";

function Dashboard() {
  const isGtThanMobile = useMediaQuery(media.tablet);

  return (
    <AnimatedPage>
      <Stack
        gap={4}
        css={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "1168px",
          padding: "24px",
        }}
      >
        <HeroSection />
        <Stack
          alignItems={"center"}
          css={{
            // height: "500px",
            width: "100%",
            padding: "120px 0",
            backgroundSize: "cover",
            margin: "0 auto",
            backgroundImage: "url(img/heado.png)",
            backgroundPosition: "center",
          }}
        >
          <Stack
            css={{
              maxWidth: "580px",
            }}
          >
            <Typography
              css={{
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#f5ffab",
              }}
            >
              Versabot - DeFi in your own way through Telegram
            </Typography>
            <Typography
              css={{
                mt: 2,
              }}
              textAlign={"center"}
            >
              Introducing VersaBot, the game-changing Telegram bot designed to
              redefine your DeFi experience.
            </Typography>
            <Typography
              textAlign={"center"}
              css={{
                mt: 4,
              }}
            >
              VersaBot offers a non-custodial solution and advanced Web3
              functionalities, serving as the perfect tool for both newcomers,
              experienced users, and crypto communities.
            </Typography>
          </Stack>
        </Stack>
        <Flex
          css={{
            width: "100%",
            alignItems: "center",
            gap: 1,
            mt: 8,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#333",
            }}
          ></div>
          <div
            style={{
              width: "200px",
              background: "blue",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <video
              autoPlay={true}
              width={130}
              loop={true}
              muted
              src="img/animated-logo.mp4"
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#333",
            }}
          ></div>
        </Flex>
        <Stack
          css={{
            paddingTop: "80px",
          }}
        >
          <Typography
            css={{
              fontSize: "32px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#f5ffab",
            }}
            textAlign={"center"}
          >
            Elevate your DeFi Experience through Telegram
          </Typography>
          <Typography textAlign={"center"}>
            Introducign our game chaning feature
          </Typography>
        </Stack>
        <OrbitingFeatures />
        <Stack
          gap={4}
          css={{
            alignItems: "center",
          }}
        >
          {/* <video
            width={200}
            autoPlay={true}
            loop={true}
            src="img/logo-animated.mp4"
          ></video> */}
        </Stack>
        <Stack
          alignItems={"center"}
          css={{
            mb: 80,
          }}
        >
          <Typography
            css={{
              fontSize: "32px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#f5ffab",
            }}
          >
            Coming Soon
          </Typography>

          {/* <VideoComponent src="img/video-swap.mp4" /> */}
        </Stack>
        <Stack gap={4}>
          <CryptoInfoSection
            title={"Connect wallet"}
            direction="rowReverse"
            description={
              "Through VersaBot, users  effortlessly purchase cryptocurrencies with just a few clicks, using their credit card or bank transfer."
            }
          />
          <CryptoInfoSection
            reversed={true}
            title={"Buy Crypto with FIAT"}
            description={
              "VersaBot enables users to seamlessly connect a DeFi wallet with a single click. The bot supports multiple wallets, including Trust Wallet, MetaMask, and more."
            }
            direction="rowReverse"
          />
          <CryptoInfoSection
            title={"Swap tokens"}
            description={
              "VersaBot empowers users to buy crypto, swap in DeFi with support of AI. "
            }
            direction="rowReverse"
          />
        </Stack>
        <Flex
          css={{
            width: "100%",
            alignItems: "center",
            gap: 1,
            // mt: 8,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#333",
            }}
          ></div>
          <div
            style={{
              width: "200px",
              background: "blue",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <video
              autoPlay={true}
              width={130}
              loop={true}
              muted
              src="img/animated-logo.mp4"
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#333",
            }}
          ></div>
        </Flex>
        <ReferralProgram />
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#333",
            marginTop: "60px",
          }}
        ></div>
        {/* <img src="img/BUY.png" alt="" /> */}
        <ContactForm />
      </Stack>
    </AnimatedPage>
  );
}

export default Dashboard;
