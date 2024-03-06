// Import the necessary libraries
import { Flex, Stack } from "@/components/box";
import Typography from "@/components/typography";
import { styled } from "@stitches/react";
import { motion } from "framer-motion";

const Container = styled("div", {
  position: "relative",
  width: "100%",
  height: "500px", // Adjust as needed
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  marginBottom: "50px",
});

// Define your styled components using Stitches
const OrbitingFeaturesContainer = styled("div", {
  position: "relative",
  width: "100%",
  height: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CentralLogo = styled("div", {
  position: "relative",
  // Add additional styling for your logo
});

const FeatureItem = styled(motion.div, {
  position: "absolute",
  width: "230px",
  //   border: "1px solid gray",
  //   padding: "20px",
  borderRadius: "20px",
  // Add additional styling for your feature items
});

const FeatureText = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // Counter-rotate the text
});

// Define the animation for the orbiting feature items using Framer Motion's animate prop
const orbitAnimation = (radius, duration) => ({
  rotate: [0, 360],
  x: [
    0,
    radius * Math.cos(0),
    radius * Math.cos(Math.PI),
    radius * Math.cos(2 * Math.PI),
    0,
  ],
  y: [
    0,
    radius * Math.sin(0),
    radius * Math.sin(Math.PI),
    radius * Math.sin(2 * Math.PI),
    0,
  ],
  transition: {
    rotate: { repeat: Infinity, duration, ease: "linear" },
    x: { repeat: Infinity, duration, ease: "linear" },
    y: { repeat: Infinity, duration, ease: "linear" },
  },
});

export const FeatureItemComponent = ({ imgSrc, title, description, style }) => {
  const randomScale = 1 + Math.random() * 0.05; // Scales between 1 and 1.05
  const randomRotation = Math.random() * 10 - 5; // Rotates between -5 and 5 degrees

  const animation = {
    scale: [1, randomScale, 1],
    // rotate: [0, randomRotation, 0],
    transition: {
      duration: 2, // Duration of one cycle of animation
      repeat: Infinity,
      repeatType: "reverse", // Reverse the animation instead of restarting
      ease: "easeInOut",
    },
  };

  return (
    <FeatureItem style={style} animate={animation as any}>
      <Stack alignItems={"center"} gap={1}>
        <div
          style={{
            // borderBottom: "1px solid gray",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            // padding: "20px",
          }}
        >
          <img src={imgSrc} width="50" alt="" />
        </div>
        <Stack
          css={{
            padding: "20px",
            paddingTop: "10px",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            css={{
              fontSize: "18px",
              color: "#8CEA69",
            }}
          >
            {title}
          </Typography>
          <Typography textAlign={"center"}>{description}</Typography>
        </Stack>
      </Stack>
    </FeatureItem>
  );
};

// Define your React component
const OrbitingFeatures = () => {
  const featureItems = [
    {
      imgSrc: "/img/1.png",
      title: "DeFi wallet connection",
      description: "Connect a DeFi wallet with a single click",
      style: { top: "10%", left: "10%" },
    },
    {
      imgSrc: "/img/1.png",
      title: "AI Swap",
      description: "Swap tokens with support of AI",
      style: { top: "10%", right: "10%" },
    },
    {
      imgSrc: "/img/1.png",
      title: "Buy crypto with FIAT",
      description: "Buy crypto with FIAT with credit card, or bank transfer",
      style: { bottom: "-15%", left: "42%", transform: "translate(50%,50%)" },
    },
    // ... Add more items as needed
  ];
  const orbitPath = (radius, startAngle = 0) => {
    return {
      rotate: [0, 360],
      x: radius * Math.cos(startAngle),
      y: radius * Math.sin(startAngle),
      transition: {
        loop: Infinity,
        ease: "linear",
        duration: 10,
      },
    };
  };
  return (
    <Container>
      <CentralLogo>
        <img src="/img/glow-logo.svg" alt="" />
      </CentralLogo>
      {featureItems.map((item, index) => (
        <FeatureItemComponent key={index} {...item} />
      ))}

      {/* Repeat for other feature items */}
    </Container>
  );
};

export default OrbitingFeatures;
