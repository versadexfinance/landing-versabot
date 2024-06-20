import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type FrameComponent2Type = {
  className?: string;
};

const TimelineIcon = styled.img`
  height: 126px;
  width: 4px;
  position: relative;
  object-fit: contain;
`;
const Subtext = styled.h2`
  margin: 0;
  text-align: left;
  position: relative;
  font-size: inherit;
  line-height: 44px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 800px) {
    font-size: 24px;
    line-height: 35px;
  }
  @media screen and (max-width: 450px) {
    font-size: 20px;
    line-height: 26px;
  }
`;
const Subtext1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 28px;
  color: #afafaf;
  white-space: pre-wrap;
  text-align: left;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  min-width: 200px;
  max-width: 100%;
`;
const Feature = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;
  max-width: 100%;
  font-size: 36px;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FirstFeatureDescription = styled.b`
  position: relative;
  line-height: 40px;
  @media screen and (max-width: 450px) {
    font-size: 19px;
    line-height: 32px;
  }
`;
const SecondFeatureDescription = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 28px;
  color: #afafaf;
  text-align: left;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
const Content1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2px 0px 32px;
  gap: 12px;
  opacity: 0.4;
`;

const Content2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2px 0px 28px;
  box-sizing: border-box;
  gap: 12px;
  opacity: 0.4;
  max-width: 100%;
`;
const FeaturesList = styled.div`
  width: 950px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
  min-width: 498px;
  max-width: 100%;
  @media screen and (max-width: 1300px) {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
`;
const VideoFeatureIcon = styled.video`
  width: 676px;
  position: relative;
  margin-top: 40px;
  border-radius: 32px;
  max-height: 100%
  object-fit: cover;
  max-width: 100%;
  margin-right: 25px;
  @media screen and (max-width: 1300px) {
    flex: 1;
  }
`;
const BackgroundPatternIcon = styled.img`
  height: 636px;
  width: 1044px;
  position: absolute;
  margin: 0 !important;
  top: 168px;
  left: 396px;
  border-radius: 24px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  z-index: 1;
`;
const Section06Features = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stace-between;
  padding: 0px 0px 0px 60px;
  box-sizing: border-box;
  position: relative;
  
  max-width: 100%;
  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
    gap: 73px;
    justify-content: center;
    padding-left: 30px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    gap: 36px;
  }
  @media screen and (max-width: 450px) {
    gap: 18px;
  }
`;
const Section06FeaturesWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 169px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: 24px;
  color: #f7ffbb;
  font-family: Syne;
  @media screen and (max-width: 800px) {
    padding-bottom: 110px;
    box-sizing: border-box;
  }
`;

// const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
//   const selected = useState(0);

//   return (
//     <Section06FeaturesWrapperRoot className={className}>
//       <Section06Features>
//         <FeaturesList>
//           <Feature>
//             <TimelineIcon loading="lazy" alt="" src="/timeline@2x.png" />
//             <Content>
//               <Subtext>Connect wallet</Subtext>
//               <Subtext1>
//                 Connect your DeFi wallet with just a single click. VersaBot
//                 seamlessly supports Trust Wallet, MetaMask, and more.
//               </Subtext1>
//             </Content>
//           </Feature>
//           <Content1>
//             <FirstFeatureDescription>
//               Buy Crypto with FIAT
//             </FirstFeatureDescription>
//             <SecondFeatureDescription>
//               Easily purchase cryptocurrencies within VersaBot using your credit
//               card or bank transfer.
//             </SecondFeatureDescription>
//           </Content1>
//           <Content2>
//             <FirstFeatureDescription>
//               Swap tokens with VersaAi
//             </FirstFeatureDescription>
//             <Subtext1>
//               Swap with AI support effortlessly by typing or voicing a
//               straightforward instructions in your preferred language.
//             </Subtext1>
//           </Content2>
//         </FeaturesList>
//         <VideoFeatureIcon loading="lazy" alt="" src="/video-feature@2x.png" />
//         <BackgroundPatternIcon alt="" src="/background-pattern@2x.png" />
//       </Section06Features>
//     </Section06FeaturesWrapperRoot>
//   );
// };

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const videoRef = useRef(null);
  // const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          videoRef.current.play();
        } else {
          setIsInView(false);
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  const features = [
    {
      iconSrc: "/timeline@2x.png",
      title: "Connect wallet",
      description:
        "Connect your DeFi wallet with just a single click. VersaBot seamlessly supports Trust Wallet, MetaMask, and more.",
    },
    {
      iconSrc: "/timeline@2x.png",
      title: "Buy Crypto with FIAT",
      description:
        "Easily purchase cryptocurrencies within VersaBot using your credit card or bank transfer.",
    },
    {
      iconSrc: "/timeline@2x.png",
      title: "Swap tokens with VersaAi",
      description:
        "Swap with AI support effortlessly by typing or voicing a straightforward instructions in your preferred language.",
    },
  ];
  const [selected, setSelected] = useState<number>(0);

  const handleFeatureClick = (index: number) => {
    setSelected(index);
  };

  return (
    <Section06FeaturesWrapperRoot className={className}>
      <Section06Features>
        <FeaturesList>
          {features.map((feature, index) => (
            <Feature key={index} onClick={() => handleFeatureClick(index)}>
              {selected == index ? (
                <TimelineIcon loading="lazy" alt="" src={feature.iconSrc} />
              ) : (
                <div
                  style={{
                    width: "2px",
                  }}
                ></div>
              )}
              <Content
                style={{
                  paddingRight: "28px",
                }}
              >
                <Subtext>{feature.title}</Subtext>
                <SecondFeatureDescription>
                  {feature.description}
                </SecondFeatureDescription>
              </Content>
            </Feature>
          ))}
        </FeaturesList>

        <VideoFeatureIcon
          loop
          style={{}}
          ref={videoRef}
          playsInline={true}
          src="./vdx-video.mp4"
          muted
        />
        {/* <BackgroundPatternIcon alt="" src="/background-pattern@2x.png" /> */}
      </Section06Features>
    </Section06FeaturesWrapperRoot>
  );
};

export default FrameComponent2;
