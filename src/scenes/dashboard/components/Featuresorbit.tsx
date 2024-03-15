// Import the necessary libraries
import { Flex, Stack } from "@/components/box";
import Typography from "@/components/typography";
import media from "@/styled/media";
import { keyframes, styled } from "@stitches/react";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

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
  zIndex: "1 !important",
  // Add additional styling for your logo
});

const borderAnimation = keyframes({
  "0%": { borderColor: "#333" },
  // "25%": { borderColor: "#8CEA69" },
  "75%": { borderColor: "gray" },
  "50%": { borderColor: "rgba(255, 255, 255, 0.2)" },
  "100%": { borderColor: "#333" },
});

const FeatureItem = styled(motion.div, {
  position: "absolute",
  maxWidth: "300px",
  padding: "10px",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(7.6px)",
  "-webkit-backdrop-filter": "blur(7.6px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  zIndex: 10,
  animation: `${borderAnimation} 4s linear infinite`,
  variants: {
    isMobile: {
      true: {
        width: "100%",
        position: "relative",
        maxWidth: "100%",
        padding: "15px",
      },
    },
  },
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

export const FeatureItemComponent = ({
  imgSrc,
  title,
  description,
  style,
  isComingSoon,
}) => {
  const isGtThanMobile = useMediaQuery(media.tablet);

  const randomScale = 1 + Math.random() * 0.05; // Scales between 1 and 1.05
  const randomRotation = Math.random() * 10 - 5; // Rotates between -5 and 5 degrees

  const animation = {
    scale: [1, randomScale, 1],
    // rotate: [0, randomRotation, 0],
    transition: {
      duration: 4, // Duration of one cycle of animation
      repeat: Infinity,
      repeatType: "reverse", // Reverse the animation instead of restarting
      ease: "easeInOut",
    },
  };

  return (
    <FeatureItem
      style={isGtThanMobile && style}
      isMobile={!isGtThanMobile}
      animate={isGtThanMobile ? (animation as any) : {}}
    >
      <Flex alignItems={"center"} gap={1}>
        <div
          style={{
            // borderBottom: "1px solid gray",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            // padding: "20px",
            zIndex: "1 !important",
            flex: "1",
          }}
        >
          <img src={imgSrc} width="50" alt="" />
        </div>
        <Stack
          css={{
            flex: "3",
            // padding: "20px",
            paddingTop: "10px",
            // alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            css={{
              fontSize: "18px",
              color: "#8CEA69",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>

          <Typography textAlign={"left"}>{description}</Typography>
        </Stack>
      </Flex>
    </FeatureItem>
  );
};

// Define your React component
const OrbitingFeatures = () => {
  const isGtThanMobile = useMediaQuery(media.tablet);

  const featureItems = [
    {
      imgSrc: "/img/1.png",
      title: "DeFi wallet connection",
      description: "Connect a DeFi wallet with a single click",
      style: { top: "10%", left: "10%" },
      isComingSoon: false,
    },
    {
      imgSrc: "/img/2.png",
      title: "AI Swap",
      description: "Swap tokens with support of AI",
      style: { top: "10%", right: "10%" },
      isComingSoon: false,
    },
    {
      imgSrc: "/img/6.png",
      title: "Buy crypto with FIAT",
      description: "Buy crypto with FIAT with credit card, or bank transfer",
      style: { bottom: "-0", left: "60%", transform: "translate(50%,50%)" },
      isComingSoon: false,
    },

    {
      imgSrc: "/img/3.png",
      title: "DeFi Bridge",
      // description
      description: "Coming Soon",
      isComingSoon: true,
      style: { top: "50%", left: "12%", transform: "translate(50%,50%)" },
    },
    {
      imgSrc: "/img/4.png",
      title: "DeFi Strategies",
      description: "Coming Soon",
      isComingSoon: true,
      style: { top: "40%", right: "10%", transform: "translate(50%,50%)" },
    },
    {
      imgSrc: "/img/5.png",
      title: "Perps",
      description: "Coming Soon",
      isComingSoon: true,
      style: { bottom: "0%", left: "25%", transform: "translate(50%,50%)" },
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
    <Container
      css={{
        height: isGtThanMobile ? "500px" : "auto",
      }}
    >
      {isGtThanMobile && (
        <CentralLogo>
          <img src="/img/glow-logo.svg" style={{}} alt="" />
        </CentralLogo>
      )}
      {isGtThanMobile ? (
        featureItems.map((item, index) => (
          <FeatureItemComponent key={index} {...item} />
        ))
      ) : (
        <Stack
          css={{
            gap: 2,
            width: "100%",
            backgroundImage: "url(/img/glow-logo.svg)",
            backgroundSize: "fit",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // back,
          }}
        >
          {featureItems.map((item, index) => (
            <FeatureItemComponent key={index} {...item} />
          ))}
        </Stack>
      )}

      {/* Repeat for other feature items */}
    </Container>
  );
};

export default OrbitingFeatures;
