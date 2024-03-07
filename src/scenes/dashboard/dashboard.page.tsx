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
import Button from "@/components/button";
import { motion } from "framer-motion";

function Dashboard() {
  const isGtThanMobile = useMediaQuery(media.tablet);
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
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
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <HeroSection />
        </motion.div>
        <motion.div>
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
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
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
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
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
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <OrbitingFeatures />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
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

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#333",
            }}
          ></div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <Stack
            alignItems={"center"}
            css={{
              mb: 40,
            }}
          >
            <Flex
              css={{
                gap: 8,
                mt: 18,
                flexDirection: isGtThanMobile ? "row" : "column",
                padding: "10px",
              }}
            >
              <img src="img/glassy-tg.svg" alt="" />

              <Stack>
                <Typography
                  css={{
                    fontSize: isGtThanMobile ? "32px" : "20px",
                    fontWeight: "bold",

                    color: "#f5ffab",
                  }}
                >
                  Tailored to your DeFi needs
                </Typography>
                <Typography
                  css={{
                    maxWidth: "500px",
                    fontSize: "18px",
                    color: "$primary",
                  }}
                >
                  VersaBot is designed to cater to all your DeFi needs,
                  providing seamless access to a wide range of features
                </Typography>
                <Typography
                  textAlign={"center"}
                  css={{
                    marginTop: "50px",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  All through the convenience of{" "}
                  <span
                    style={{
                      color: "#8CEA69",
                    }}
                  >
                    Telegram
                  </span>
                  !!
                </Typography>
              </Stack>
            </Flex>
            {/* <VideoComponent src="img/video-swap.mp4" /> */}
          </Stack>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
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
              video="img/top-up-demo.mp4"
              title={"Buy Crypto with FIAT"}
              description={
                "VersaBot enables users to seamlessly connect a DeFi wallet with a single click. The bot supports multiple wallets, including Trust Wallet, MetaMask, and more."
              }
              direction="rowReverse"
            />
            <CryptoInfoSection
              title={"Swap tokens"}
              video="img/ai-swap-demo.mp4"
              description={
                "VersaBot empowers users to buy crypto, swap in DeFi with support of AI. "
              }
              direction="rowReverse"
            />
          </Stack>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
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
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <ReferralProgram />
        </motion.div>
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
      <div
        style={{
          margin: "auto",
          backgroundImage: "url(img/testnet_section.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          css={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Start your Non-custiodial journey Now!!
        </Typography>
        <Stack>
          <Button
            css={{
              mt: 8,
              background: "linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%)",
              boxShadow: "0px 2px 8px 0px rgba(235, 254, 100, 0.4)",
              "&:hover": {
                scale: 1.05,
                background: "linear-gradient(180deg, #8CEA69 0%, #EBFE64 100%)",
              },
            }}
            as="a"
            href="https://discord.gg/rnnKEn4Tc2"
            target="_blank"
          >
            JOIN VERSABOT V1
          </Button>
        </Stack>
      </div>
    </AnimatedPage>
  );
}

export default Dashboard;
