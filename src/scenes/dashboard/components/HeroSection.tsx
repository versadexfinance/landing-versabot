import { Flex, Stack } from "@/components/box";
import Button from "@/components/button";
import Typography from "@/components/typography";
import media from "@/styled/media";
import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

function HeroSection() {
  const isGtThanMobile = useMediaQuery(media.tablet);
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  const pulse = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      scale: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
      },
      opacity: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
      },
    },
  };
  return (
    <Flex
      color="white"
      gap={4}
      alignItems={"center"}
      id="home"
      css={{
        padding: "80px 0",
        flexDirection: isGtThanMobile ? "row" : "column-reverse",

        marginBottom: "80px",
      }}
    >
      <Stack
        css={{
          flex: 6,
          gap: "12px",
        }}
      >
        <Typography
          css={{
            fontSize: isGtThanMobile ? "42px" : "32px",
            fontWeight: "bolder",
          }}
        >
          A full non-custodial Web3 journey!
        </Typography>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <li>
            <Typography
              css={{
                color: "#e1e1e1",
                fontWeight: "lighter",
                fontSize: isGtThanMobile ? "20px" : "18px",
              }}
            >
              Connect a DeFi wallet with a single click
            </Typography>
          </li>
          <li>
            <Typography
              css={{
                color: "#e1e1e1",
                fontWeight: "lighter",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              Buy crypto with FIAT, swap in DeFi with support of AI, and access
              advanced features such as bridge, DeFi strategies, perps,
              lending/borrowing, P2P, on-chain orderbooks, notifications, and
              much more…
            </Typography>
          </li>
        </ul>
        <Button
          css={{
            mt: 8,
            background: "linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%)",
            boxShadow: "0px 2px 8px 0px rgba(235, 254, 100, 0.4)",
            width: isGtThanMobile ? "250px" : "100%",
            "&:hover": {
              scale: 1.05,
              background: "linear-gradient(180deg, #8CEA69 0%, #EBFE64 100%)",
            },
          }}
          as="a"
          href="https://discord.gg/rnnKEn4Tc2"
          target="_blank"
        >
          JOIN VersaBot V1
        </Button>
      </Stack>
      <div
        style={{
          // flex: 4,
          position: "relative",
          // height: "600px",
          height: isGtThanMobile ? "420px" : "50%",

          width: isGtThanMobile ? "420px" : "80%",
          // background: "white",
        }}
      >
        {/* <img
          style={{
            position: "absolute",
            right: "-40px",
            top: "40px",
          }}
          src="img/hero-3.png"
          alt=""
          width={"56%"}
        />
        <img
          style={{
            position: "absolute",
            left: "-50px",
            top: "20px",
            // rotate: "3deg",
          }}
          src="img/hero-2.png"
          alt=""
          width={"100%"}
        /> */}
        <div
          style={{
            width: "100%",
            paddingTop: "150%",
          }}
        >
          <motion.img
            style={{
              position: "absolute",
              right: "-40px",
              top: "40px",
            }}
            src="img/hero-3.png"
            alt=""
            width={"56%"}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.5 }}
          />
          <motion.img
            style={{
              position: "absolute",
              left: "-50px",
              top: "20px",
            }}
            src="img/hero-2.png"
            alt=""
            width={"100%"}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.8 }}
          />
          {/* <motion.div
          style={{
            position: "absolute",
            borderRadius: "658px",
            width: "400px",
            height: "208px",
            top: "180px",
            left: "15%",
            transform: "translateX(-50%)",
            zIndex: -1,
            background: "linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%)",
            filter: "blur(100px)",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "tween", duration: 1.2, delay: 0.5 }}
        ></motion.div> */}
          <motion.div
            style={{
              position: "absolute",
              borderRadius: "658px",
              width: isGtThanMobile ? "100%" : "80%",
              height: "208px",
              top: "180px",
              left: "20%",
              transform: "translateX(-50%)",
              zIndex: -1,
              background: "linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%)",
              filter: "blur(100px)",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 1.2 }}
            whileInView={pulse}
          ></motion.div>
        </div>
        {/* <motion.div
          style={{
            position: "absolute",
            borderRadius: "658px",
            width: "400px",
            height: "208px",
            top: "180px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: -1,
            background: "linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%)",
            filter: "blur(100px)",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        ></motion.div> */}
        {/* <div
          style={{
            position: "absolute",
            borderRadius: "658px",
            width: "400px",
            height: "208px",
            top: "180px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: -1,
            background:
              "var(--Gradient---90deg, linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%))",
            filter: "blur(100px)",
          }}
        ></div> */}
        {/* <img width={"120%"} src="img/hero-image.png" alt="" /> */}
      </div>
    </Flex>
  );
}

export default HeroSection;
