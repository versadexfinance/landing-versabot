import type { FC } from "react";
import styled, { keyframes, css } from "styled-components";

export type PartnersCarouselProps = {
  className?: string;
};

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
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

const ScrollingLogos = styled.div<{
  direction: "left" | "right";
  duration: number;
}>`
  display: flex;
  animation: ${({ direction, duration }) =>
    direction === "left"
      ? css`
          ${scrollLeft} ${duration}s linear infinite
        `
      : css`
          ${scrollRight} ${duration}s linear infinite
        `};
  gap: 32px;
  &:hover {
    animation-play-state: paused;
  }

  width: fit-content;
  @media (max-width: 600px) {
    gap: 16px;
  }
  will-change: transform;
  transform: translateZ(0);
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
  @media (max-width: 1300px) {
    width: 204px;
    height: 72px;
  }
  @media (max-width: 600px) {
    width: 154px;
    height: 54px;
  }
`;

const PartnersIcon = styled.img`
  max-width: 80%;
  overflow: auto;
  height: auto;
  object-fit: contain;
  backface-visibility: hidden;
  transform: translateZ(0);
`;

const PartnersCarousel: FC<PartnersCarouselProps> = ({ className = "" }) => {
  const partnerImages1 = [
    "/bybit-new.svg",
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
    "/mantle.svg",
    "/paraswap.svg",
    "/avalanche.svg",
    "/aspis.svg",
    "/kvants.svg",
    "/polygon.svg",
    "/onramp.svg",
    "/dyor.svg",
    "/hacken.svg"
  ];

  const partnerImages2 = [
    "/decubate.svg",
    "/castrum.svg",
    "/lavender.svg",
    "/chaitech.svg",
    "/novaclub.svg"
  ];

  // Adjusted speed and duration calculation
  const baseSpeed = 70; // Increased for smoother animation
  const duration1 = Math.max(baseSpeed, baseSpeed * (partnerImages1.length / 10));
  const duration2 = Math.max(baseSpeed, baseSpeed * (partnerImages2.length / 10));

  const createDisplayArray = (images: string[], minRepetitions: number = 4) => {
    // Calculate number of logos needed to fill viewport plus buffer
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const logoWidth = screenWidth > 1300 ? 308 : screenWidth > 600 ? 204 : 154;
    const gapWidth = 32;
    const viewportLogos = Math.ceil(screenWidth / (logoWidth + gapWidth));
    // Ensure we have enough logos to create a smooth infinite scroll
    const repetitionsNeeded = Math.max(minRepetitions, Math.ceil((viewportLogos * 2) / images.length));
    
    // Create array with exact number of repetitions needed
    return Array(repetitionsNeeded).fill(images).flat();
  };
  
  return (
    <PartnersColumn className={className}>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
        <ScrollingLogos direction="left" duration={duration1}>
          {createDisplayArray(partnerImages1).map((src, index) => (
            <LogoWrapper key={`row1-${src}-${index}`}>
              <Logo>
                <PartnersIcon
                  loading="lazy"
                  alt={`Partner logo ${index + 1}`}
                  src={src}
                  onError={(e) => {
                    console.error(`Failed to load image: ${src}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </Logo>
            </LogoWrapper>
          ))}
        </ScrollingLogos>
      </div>
      
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
        <ScrollingLogos direction="right" duration={duration2}>
          {createDisplayArray(partnerImages2).map((src, index) => (
            <LogoWrapper key={`row2-${src}-${index}`}>
              <Logo>
                <PartnersIcon
                  loading="lazy"
                  alt={`Partner logo ${index + 1}`}
                  src={src}
                  onError={(e) => {
                    console.error(`Failed to load image: ${src}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </Logo>
            </LogoWrapper>
          ))}
        </ScrollingLogos>
      </div>
    </PartnersColumn>
  );
};

export default PartnersCarousel;
