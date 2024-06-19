import type { FC } from "react";
import styled, { keyframes } from "styled-components";

export type PartnersCarouselProps = {
  className?: string;
};

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(50%); }
`;

const BannerWrapperRoot = styled.section`
  display: flex;
  flex-direction: column;
  background: red;
  overflow: hidden;
  align-items: center;
  width: 100%;
`;

const PartnersColumn = styled.section`
  width: 100%;
  display: flex;
  gap: 32px;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ScrollingLogos = styled.div<{ direction: "left" | "right" }>`
  display: flex;
  animation: ${({ direction }) =>
      direction === "left" ? scrollLeft : scrollRight}
    60s linear infinite;
  gap: 32px;
  &:hover {
    animation-play-state: paused;
  }

  width: max-content; /* Ensure the container is as wide as its content */
`;

const ParnersIcon = styled.img`
  // height: 108px;
  overflow: auto;
  // width: 108px; /* Ensure all images have the same size */
  // object-fit: cover; /* Ensure the image fits within the container and is cropped consistently */
  padding: 8px;
  filter: grayscale(1) brightness(0.5) sepia(1) hue-rotate(200deg)
    saturate(1000%);
  filter: grayscale(1);

  // filter: sepia(1) saturate(100200%) hue-rotate(30deg);
  // filter: sepia(1) saturate(10000%) hue-rotate(90deg);
  // @media (max-width: 600px) {
  //   height: 80px;
  //   width: 80px;
  // }
`;

const LogoWrapper = styled.div`
  padding: 4px; /* Adjust based on the desired border width */
  border-radius: 18px; /* Adjust to be slightly larger than the Logo border radius */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5),
    rgba(0, 0, 0, 0.5)
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 308px; /* Ensure all logos have the same size */
  height: 108px; /* Ensure all logos have the same size */
  backdrop-filter: blur(43px);
  background-color: #131313;
  border-radius: 16px;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  // filter: grayscale(100%);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  // @media (max-width: 600px) {
  //   width: 80px;
  //   height: 80px;
  // }
`;

const PartnersCarousel: FC<PartnersCarouselProps> = ({ className = "" }) => {
  // const partnerImages1 = [
  //   // "/parners@2x.png",
  //   // "/parners-1.svg",
  //   // "/parners-2@2x.png",
  //   "/parners-3.svg",
  //   "/parners-4.svg",
  //   "/parners-5.svg",
  //   "velodrome-l.svg"
    
  // ];

  // const partnerImages2 = [
  //   "/decubate.svg",
  //   "/LOGO_HORIZONTAL_WHITE.svg",
  //   "/castrum.png",
  //   "/chaitech(3).jpg",
  //   "aerodrome-1.svg",
  //   "/decubate.svg",
  //   "/castrum.png",
  //   "/chaitech(3).jpg",
  //   "aerodrome-1.svg",
  //   "/decubate.svg",
  //   "/castrum.png",
  //   "/chaitech(3).jpg",
  //   "aerodrome-1.svg",
  //   "/decubate.svg",
  //   "/LOGO_HORIZONTAL_WHITE.svg",
  //   "/castrum.png",
  //   "/chaitech(3).png",
  //   "aerodrome-1.svg",
  //   "/lavender.png",
  //   // "/lynex.png",
  //   "/core.png",
  // ];

  const partnerImages1 =[
    "/parners-3.svg",
    "/parners-4.svg",
    "/parners-5.svg",
    "velodrome-l.svg",
    "/decubate.svg",
    "/LOGO_HORIZONTAL_WHITE.svg",
    "/castrum.png",
    "aerodrome-1.svg",
    "/chaitech(3).png",
    "/lavender.png",
    "/core.png","/parners-3.svg",
    "/parners-4.svg",
    "/parners-5.svg",
    "velodrome-l.svg",
    "/decubate.svg",
    "/LOGO_HORIZONTAL_WHITE.svg",
    "/castrum.png",    "aerodrome-1.svg",
    "/chaitech(3).png",
    "/lavender.png",
    "/core.png"
  ]

  const partnerImages2 =[
    "/parners-3.svg",
    "/parners-4.svg",
    "/parners-5.svg",
    "velodrome-l.svg",
    "/decubate.svg",
    "/LOGO_HORIZONTAL_WHITE.svg",
    "/castrum.png",
    "aerodrome-1.svg",
    "/chaitech(3).png",
    "/lavender.png",
    "/core.png","/parners-3.svg",
    "/parners-4.svg",
    "/parners-5.svg",
    "velodrome-l.svg",
    "/decubate.svg",
    "/LOGO_HORIZONTAL_WHITE.svg",
    "/castrum.png",
    "aerodrome-1.svg",
    "/chaitech(3).png",
    "/lavender.png",
    "/core.png"
  ]
  return (
    <PartnersColumn className={className}>
      <ScrollingLogos direction="left">
        {partnerImages1.map((src, index) => (
          <LogoWrapper key={index}>
            <Logo>
              <ParnersIcon
                loading="lazy"
                alt={`Partner logo ${index + 1}`}
                src={src}
              />
            </Logo>
          </LogoWrapper>
        ))}
        {partnerImages1.map((src, index) => (
          <LogoWrapper key={partnerImages1.length + index}>
            <Logo>
              <ParnersIcon
                loading="lazy"
                alt={`Partner logo ${src}`}
                src={src}
              />
            </Logo>
          </LogoWrapper>
        ))}
      </ScrollingLogos>
      <ScrollingLogos direction="right">
        {partnerImages2.map((src, index) => (
          <LogoWrapper key={index}>
            <Logo>
              <ParnersIcon
                loading="lazy"
                alt={`Partner logo ${index + 1}`}
                src={src}
              />
            </Logo>
          </LogoWrapper>
        ))}
        {partnerImages2.map((src, index) => (
          <LogoWrapper key={partnerImages2.length + index}>
            <Logo>
              <ParnersIcon
                loading="lazy"
                alt={`Partner logo ${index + 1}`}
                src={src}
              />
            </Logo>
          </LogoWrapper>
        ))}
      </ScrollingLogos>
    </PartnersColumn>
  );
};

export default PartnersCarousel;
