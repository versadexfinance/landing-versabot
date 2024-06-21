import type { FC } from "react";
import styled, { keyframes, css } from "styled-components";

export type PartnersCarouselProps = {
  className?: string;
};

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
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
  @media (max-width: 600px) {
    gap: 16px;
  }
`;

const ScrollingLogos = styled.div<{ direction: "left" | "right"; duration: number }>`
  display: flex;
  animation: ${({ direction, duration }) =>
    direction === "left"
      ? css`${scrollLeft} ${duration}s linear infinite`
      : css`${scrollRight} ${duration}s linear infinite`};
  gap: 32px;
  &:hover {
    animation-play-state: paused;
  }

  width: fit-content;
  @media (max-width: 600px) {
    gap: 16px;
  }
`;

const PartnersIcon = styled.img`
  max-width: 80%;
  overflow: auto;
`;

const LogoWrapper = styled.div`
  padding: 2px;
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5),
    rgba(0, 0, 0, 0.5)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 2px;
  }
`;

const Logo = styled.div`
  width: 308px;
  height: 108px;
  backdrop-filter: blur(43px);
  background-color: #131313;
  border-radius: 16px;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 600px) {
    width: 154px;
    height: 54px;
  }
`;

const PartnersCarousel: FC<PartnersCarouselProps> = ({ className = "" }) => {
  const partnerImages1 = [
    "/parners-3.svg",
    "/parners-4.svg",
    "/aerodrome.svg",
    "/optimism.svg",
    "/velodrome.svg",
    "/parners-5.svg",
    "/lynex.svg",
    "/core.svg",
    "/corex.svg",
    "/arbitrum.svg",
    "/bnbchain.svg",
    "/paraswap.svg",
    "/parners-3.svg",
    "/parners-4.svg",
    "/aerodrome.svg",
    "/optimism.svg",
    "/velodrome.svg",
    "/parners-5.svg",
    "/lynex.svg",
    "/core.svg",
    "/corex.svg",
    "/arbitrum.svg",
    "/bnbchain.svg",
    "/paraswap.svg",
    "/parners-3.svg",
    "/parners-4.svg",
    "/aerodrome.svg",
    "/optimism.svg",
    "/velodrome.svg",
    "/parners-5.svg",
    "/lynex.svg",
    "/core.svg",
    "/corex.svg",
    "/arbitrum.svg",
    "/bnbchain.svg",
    "/paraswap.svg",
    "/parners-3.svg",
    "/parners-4.svg",
    "/aerodrome.svg",
    "/optimism.svg",
    "/velodrome.svg",
    "/parners-5.svg",
    "/lynex.svg",
    "/core.svg",
    "/corex.svg",
    "/arbitrum.svg",
    "/bnbchain.svg",
    "/paraswap.svg",
    "/parners-3.svg",
    "/parners-4.svg",
    "/aerodrome.svg",
    "/optimism.svg",
    "/velodrome.svg",
    "/parners-5.svg",
    "/lynex.svg",
    "/core.svg",
    "/corex.svg",
    "/arbitrum.svg",
    "/bnbchain.svg",
    "/paraswap.svg",
    "/parners-3.svg",
    "/parners-4.svg",
    "/aerodrome.svg",
    "/optimism.svg",
    "/velodrome.svg",
    "/parners-5.svg",
    "/lynex.svg",
    "/core.svg",
    "/corex.svg",
    "/arbitrum.svg",
    "/bnbchain.svg",
    "/paraswap.svg",
    "/parners-3.svg",
    "/parners-4.svg",
    "/aerodrome.svg",
    "/optimism.svg",
    "/velodrome.svg",
    "/parners-5.svg",
    "/lynex.svg",
    "/core.svg",
    "/corex.svg",
    "/arbitrum.svg",
    "/bnbchain.svg",
    "/paraswap.svg",
    "/parners-3.svg",
    "/parners-4.svg",
    "/aerodrome.svg",
    "/optimism.svg",
    "/velodrome.svg",
    "/parners-5.svg",
    "/lynex.svg",
    "/core.svg",
    "/corex.svg",
    "/arbitrum.svg",
    "/bnbchain.svg",
    "/paraswap.svg",
    "/parners-3.svg",
    "/parners-4.svg",
    "/aerodrome.svg",
    "/optimism.svg",
    "/velodrome.svg",
    "/parners-5.svg",
    "/lynex.svg",
    "/core.svg",
    "/corex.svg",
    "/arbitrum.svg",
    "/bnbchain.svg",
    "/paraswap.svg",
    "/parners-3.svg",
    "/parners-4.svg",
    "/aerodrome.svg",
    "/optimism.svg",
    "/velodrome.svg",
    "/parners-5.svg",
    "/lynex.svg",
    "/core.svg",
    "/corex.svg",
    "/arbitrum.svg",
    "/bnbchain.svg",
    "/paraswap.svg",
  ];

  const partnerImages2 = [
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
    "./decubate.svg",
    "./castrum.svg",
    "./lavender.svg",
    "./chaitech.svg",
  ];

  const duration1 = partnerImages1.length * 8; // Adjust multiplier for speed
  const duration2 = partnerImages2.length * 8;

  return (
    <PartnersColumn className={className}>
      <ScrollingLogos direction="left" duration={duration1}>
        {partnerImages1.concat(partnerImages1).map((src, index) => (
          <LogoWrapper key={index}>
            <Logo>
              <PartnersIcon
                loading="lazy"
                alt={`Partner logo ${index + 1}`}
                src={src}
              />
            </Logo>
          </LogoWrapper>
        ))}
      </ScrollingLogos>
      <ScrollingLogos direction="right" duration={duration2}>
        {partnerImages2.concat(partnerImages2).map((src, index) => (
          <LogoWrapper key={index}>
            <Logo>
              <PartnersIcon
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
