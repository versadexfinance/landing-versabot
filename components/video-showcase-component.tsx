import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type VideoShowCaseComponentType = {
  className?: string;
};

const TimelineIcon = styled.img`
  height: 1256px;
  width: 4px;
  position: relative;
  object-fit: contain;
`;
const Subtext = styled.h3`
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
  // gap: 20px;
  max-width: 100%;
  font-size: 36px;
  opacity: 0.5;
  transition: opacity 0.3s;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
  :hover {
    cursor: pointer;
    opacity: 1 !important;
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
  font-family: mabry;
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
  max-height: 100%;
  object-fit: cover;
  max-width: 100%;
  margin-right: 25px;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;

  @media screen and (max-width: 1300px) {
    flex: 1;
    margin: 0;
  }
`;

const VideoContainer = styled.div`
  // width: 676px;
  // height: 380px;
  // @media screen and (max-width: 1300px) {
  //   width: 100%;
  //   flex: 1;

  // }
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
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
    gap: 73px;
    justify-content: center;
    padding-left: 30px;
    box-sizing: border-box;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 800px) {
    gap: 36px;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 450px) {
    gap: 18px;
    flex-direction: column-reverse;
  }
`;
const Section06FeaturesWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 0px 0px 169px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: 24px;
  color: #f7ffbb;
  transition: * 0.5s;
  font-family: Syne;
  @media screen and (max-width: 800px) {
    padding-bottom: 110px;
    box-sizing: border-box;
  }
`;

const VideoShowCaseComponent: NextPage<VideoShowCaseComponentType> = ({
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          videoRef.current?.play();
        } else {
          setIsInView(false);
          videoRef.current?.pause();
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = features[selected].video;
      videoRef.current.load(); // This ensures the video is properly loaded
      if (isInView) {
        videoRef.current.play(); // Play the video if it's in view
      }
    }
  }, [selected, isInView]);

  const features = [
    {
      iconSrc: "/timeline@2x.png",
      title: "AI-Powered Telegram Bot",
      description:
        "Execute trades, manage your portfolio, and receive real-time insights—all through simple commands in Telegram.",
      video: "/versax_demo.mp4",
    },
    {
      iconSrc: "/timeline@2x.png",
      title: "Swaps and Token Discovery",
      video:
        "https://res.cloudinary.com/versadex/video/upload/v1718891417/buy-fiat.mov",
      description:
        "Explore new tokens and execute swaps with AI-driven recommendations and insights. VersaX could potentially integrate data from sources like Token Sniffer, Dextools, Dexscreener, and major blockchain explorers, offering users relevant and timely information about tokens.",
    },
    {
      iconSrc: "/timeline@2x.png",
      title: "Natural Language Processing",
      video:
        "https://res.cloudinary.com/versadex/video/upload/v1718891567/swap.mov",
      description:
        "Get sentiment analysis from news and social media directly in your Telegram chat, helping you gauge market moods and make informed decisions.",
    },

    {
      iconSrc: "/timeline@2x.png",
      title: "Deep Learning Networks",
      video:
        "https://res.cloudinary.com/versadex/video/upload/v1718891567/swap.mov",
      description: `Advanced pattern recognition for smarter trading decisions.*`,
    },
  ];

  const handleFeatureClick = (index: number) => {
    setSelected(index);
  };

  return (
    <Section06FeaturesWrapperRoot className={className}>
      <Section06Features>
        <FeaturesList>
          {features.map((feature, index) => (
            <Feature
              key={index}
              style={{
                opacity: selected === index ? 1 : 1,
              }}
              // onClick={() => handleFeatureClick(index)}
            >
              {/* {selected === index ? (
                <TimelineIcon loading="lazy" alt="" src={feature.iconSrc} />
              ) : (
                <div
                  style={{
                    width: "4px",
                  }}
                ></div>
              )} */}
              <Content
                style={{
                  // borderLeft: `4px solid ${
                  //   // selected === index ? "#c1ec6dd9" : "transparent"
                  // }`,
                  paddingLeft: "10px",

                  paddingRight: "28px",
                }}
              >
                <Subtext>{feature.title}</Subtext>
                <SecondFeatureDescription>
                  {feature.description}
                  {feature.title == "Deep Learning Networks" && (
                    <>
                      <br />
                      <br />
                      <span
                        style={{
                          fontStyle: "italic",
                          fontSize: ".9em",
                        }}
                      >
                        Note: Deep learning features are under development and
                        will be available soon
                      </span>
                    </>
                  )}
                </SecondFeatureDescription>
              </Content>
            </Feature>
          ))}
        </FeaturesList>

        <VideoFeatureIcon loop ref={videoRef} playsInline={true} muted />
      </Section06Features>
      <h2
        style={{
          color: "#e1e1e1",
        }}
      >
        WHAT VERSAX AI OFFERS
      </h2>
    </Section06FeaturesWrapperRoot>
  );
};

export default VideoShowCaseComponent;
