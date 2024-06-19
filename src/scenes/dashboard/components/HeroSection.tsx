import { Flex, Stack } from "@/components/box";
import Typography from "@/components/typography";
import { styled } from "@/styled";
import media from "@/styled/media";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import gsap from "gsap";

const GradientText = styled("span", {
  background: "$gradientText",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const Heading = styled("h1", {
  margin: "0",
  alignSelf: "stretch",
  position: "relative",
  fontSize: "$headingLarge",
  lineHeight: "$headingLarge",
  fontWeight: 700,
  fontFamily: "$main",
  "@bp2": {
    fontSize: "$headingMedium",
    lineHeight: "$headingMedium",
  },
  "@bp3": {
    fontSize: "$headingSmall",
    lineHeight: "$headingSmall",
  },
});

const Paragraph = styled("p", {
  margin: "0",
  fontSize: "$paragraphLarge",
  color: "$textColor",
  lineHeight: "$paragraphLarge",
  "@bp3": {
    fontSize: "$paragraphSmall",
    lineHeight: "$paragraphSmall",
  },
});

export const Button = styled("button", {
  cursor: "pointer",
  border: "none",
  padding: "16px 40px",
  backgroundColor: "transparent",
  boxShadow: "0px 2px 8px rgba(235, 254, 100, 0.4)",
  borderRadius: "4px",
  background:
    "linear-gradient(180deg, $buttonGradientStart, $buttonGradientEnd)",
  fontSize: "$buttonLarge",
  lineHeight: "$buttonLarge",
  textTransform: "uppercase",
  color: "$buttonTextColor",
  textAlign: "center",
  whiteSpace: "nowrap",
  display: "inline-block",
  "@bp2": {
    padding: "14px 35px",
    fontSize: "$buttonMedium",
    lineHeight: "$buttonMedium",
  },
  "@bp3": {
    padding: "12px 30px",
    fontSize: "$buttonSmall",
    lineHeight: "$buttonSmall",
  },
});

const TextBlock = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "56px",
  minWidth: "494px",
  maxWidth: "100%",
  zIndex: 1,
  "@bp2": {
    gap: "28px",
    minWidth: "100%",
  },
});

const MainPicture = styled("img", {
  flex: 1,
  position: "relative",
  maxWidth: "100%",
  maxHeight: "100%",
  zIndex: 1,
  "@bp1": {
    width: "auto",
  },
});

const HeroSection1 = styled("div", {
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "24px",
  maxWidth: "100%",
  "@bp1": {
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "0px 60px",
  boxSizing: "border-box",
  maxWidth: "100%",
  flexShrink: 0,
  textAlign: "left",
  fontSize: "64px",
  color: "$mainTextColor",
  fontFamily: "$main",
  "@bp2": {
    padding: "0px 30px",
  },
});

function HeroSection() {
  const isGtThanMobile = useMediaQuery(media.tablet);
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };
  useEffect(() => {
    // Using GSAP for scroll-based animations
    gsap.utils.toArray(".hero-img").forEach((img: any) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: "top bottom", // Start the animation when the top of the img hits the bottom of the viewport
          end: "bottom top", // End when the bottom of the img hits the top of the viewport
          scrub: true,
        },
        y: 20, // Adjust as needed for subtle vertical movement
        rotation: 2, // Slight rotation for a dynamic effect
        ease: "none",
      });
    });
  }, []);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 1,
      x: -100,
      opacity: 0,
      color: "#8CEA69",
      ease: "power3.out",
    });

    gsap.from(descriptionRef.current, {
      duration: 1.2,
      x: -100,
      opacity: 0,
      color: "#EBFE64",
      ease: "power3.out",
      delay: 0.2, // Adding a slight delay for a staggering effect
    });
  }, []);

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
                fontSize: isGtThanMobile ? "24px" : "20px",
              }}
            >
              Connect a DeFi wallet with a single click.
            </Typography>
          </li>
          <li>
            <Typography
              css={{
                color: "#e1e1e1",
                fontWeight: "lighter",
                fontSize: isGtThanMobile ? "24px" : "20px",
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
          href="https://t.me/versatest_bot"
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
          width={"100%"}p
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
            className="hero-img"
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
            className="hero-img"
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
      c
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
