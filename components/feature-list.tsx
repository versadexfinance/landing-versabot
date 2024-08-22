import type { NextPage } from "next";
import styled from "styled-components";
import useIntersectionObserver from "../hooks/intersectionObserver";

export type FeatureListType = {
  className?: string;
};

const H = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 32px;
  font-weight: 700;
  font-family: Syne;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

const FeatureDescription = styled.div`
  position: relative;
  font-size: 20px;
  font-family: mabry;
  line-height: 28px;
  font-family: Syne;
  color: #afafaf;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const Feature = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  backdrop-filter: blur(91px);
  border-radius: 32px;
  background-color: #131313;
  border: 2px solid #303030;
  box-sizing: border-box;
  height: 384px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 36px 20px 36px 36px;
  gap: 16px;
  z-index: 1;
`;

const WalletColor1Icon = styled.img`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 55px;
  max-height: 100%;
  width: 213px;
  object-fit: cover;
`;

const Shadow = styled.div`
  position: absolute;
  top: 27px;
  left: 21px;
  filter: blur(50px);
  border-radius: 50%;
  background-color: rgba(3, 68, 5, 0.6);
  width: 92px;
  height: 125px;
  mix-blend-mode: multiply;
  z-index: 1;
`;

const NewWalletCoin1Icon = styled.img`
  position: absolute;
  top: 20px;
  left: 0px;
  width: 126px;
  height: 140px;
  object-fit: contain;
  z-index: 2;
`;

const IconBackground = styled.div`
  height: 202px;
  width: 268px;
  position: relative;
  flex-shrink: 0;
  debug_commit: 69da668;
`;

const DIcon = styled.div`
  position: absolute;
  bottom: -10px;
  right: 0px;
  width: 264px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 42px 0px 20px 7px;
  box-sizing: border-box;
  z-index: 2;
`;

const FeatureContainer = styled.div`
  align-self: stretch;
  height: 430px;
  position: relative;
  margin-bottom: 34px; // Added margin-bottom for spacing
  @media screen and (max-width: 450px) {
    margin-bottom: 17px; // Consistent margin for mobile
  }
`;

const DIcon1 = styled.img`
  width: 264px;
  height: 264px;
  position: absolute;
  margin: 0 !important;
  right: 2px;
  bottom: -46px;
  object-fit: contain;
  z-index: 1;
`;

const Feature1 = styled.div`
  align-self: stretch;
  height: 384px;
  backdrop-filter: blur(91px);
  border-radius: 32px;
  background-color: #131313;
  border: 2px solid #303030;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 36px 20px 36px 36px;
  position: relative;
  gap: 16px;
`;

const FeatureItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 34px;
  min-width: 328px;
  margin-top: 50px;
  @media screen and (max-width: 1200px) {
    gap: 17px;
    &:last-of-type {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .last {
      width: 48%;
      &:first-of-type {
        margin-top: -120px;
      }
    }
    @media screen and (max-width: 750px) {
      &:last-of-type {
        flex-direction: column;
        justify-content: space-between;
      }
      .last {
        width: 100%;
        &:first-of-type {
          margin-top: 0;
        }
      }
    }
  }
`;

const FeatureDescription1 = styled.div`
  height: 84px;
  position: relative;
  font-size: 20px;
  line-height: 28px;
  color: #afafaf;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const VAsset = styled.div`
  width: 78px;
  height: 78px;
  position: relative;
  display: none;
`;

const Feature2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  backdrop-filter: blur(91px);
  border-radius: 32px;
  background-color: #131313;
  border: 2px solid #303030;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 33px 20px 213px 36px;
  gap: 16px;
  z-index: 1;
`;

const Swap1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Shadow1 = styled.div`
  position: absolute;
  top: 136.2px;
  left: 122px;
  filter: blur(51.02px);
  border-radius: 50%;
  background-color: rgba(11, 64, 7, 0.6);
  width: 76px;
  height: 71px;
  mix-blend-mode: multiply;
  z-index: 1;
`;

const NewSwapCoin1Icon = styled.img`
  position: absolute;
  top: 94.2px;
  left: 105px;
  width: 109px;
  height: 120px;
  object-fit: contain;
  z-index: 2;
`;

const IconBackground1 = styled.div`
  margin-top: -27.2px;
  height: 334.5px;
  width: 293.2px;
  position: relative;
  flex-shrink: 0;
  debug_commit: 69da668;
`;

const DIcon2 = styled.div`
  position: absolute;
  top: 166px;
  left: 46px;
  width: 264px;
  height: 264px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 11px;
  box-sizing: border-box;
  z-index: 2;
`;

const Feature3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  backdrop-filter: blur(91px);
  border-radius: 32px;
  background-color: #131313;
  border: 2px solid #303030;
  box-sizing: border-box;
  height: 384px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 36px 20px 36px 36px;
  gap: 16px;
  @media screen and (max-width: 450px) {
  }
`;

const NewPerpCoin2Icon = styled.img`
  position: absolute;
  top: 23.8px;
  left: 0px;
  width: 152.4px;
  height: 163.9px;
  object-fit: contain;
`;

const Shadow2 = styled.div`
  position: absolute;
  top: 53.1px;
  left: 53.5px;
  filter: blur(50.82px);
  border-radius: 50%;
  background-color: rgba(9, 50, 23, 0.8);
  width: 94.5px;
  height: 125px;
  mix-blend-mode: multiply;
  z-index: 1;
`;

const NewPerpCoin1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 70px;
  width: 213.1px;
  height: 229.3px;
  object-fit: contain;
  z-index: 2;
`;

const NewPerpCoin2Parent = styled.div`
  height: 229.3px;
  width: 283.1px;
  position: relative;
  flex-shrink: 0;
  debug_commit: 69da668;
`;

const DIcon3 = styled.div`
  position: absolute;
  top: 166px;
  left: 46px;
  width: 264px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 28.2px 0px 6.5px 16px;
  box-sizing: border-box;
  z-index: 1;
`;

const FeatureContainer1 = styled.div`
  cursor: pointer;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 34px;
  @media screen and (max-width: 450px) {
    gap: 17px;
  }
`;

const FeatureItems1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 160px 0px 0px;
  box-sizing: border-box;
  min-width: 328px;
  @media screen and (max-width: 1125px) {
    padding-top: 104px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    padding-top: 68px;
    box-sizing: border-box;
  }
`;

const BuyCrypto = styled.p`
  margin: 0;
`;

const Feature4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  backdrop-filter: blur(91px);
  border-radius: 32px;
  background-color: #131313;
  border: 2px solid #303030;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 33px 20px 181px 36px;
  gap: 16px;
  z-index: 1;
`;

const Card1Icon = styled.img`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 30px;
  max-height: 100%;
  width: 230.1px;
  object-fit: cover;
`;

const Shadow3 = styled.div`
  position: absolute;
  top: 124.76px;
  left: 14.7px;
  filter: blur(50px);
  border-radius: 50%;
  background-color: rgba(4, 4, 4, 0.6);
  width: 79px;
  height: 70.2px;
  transform: rotate(-31.4deg);
  transform-origin: 0 0;
  mix-blend-mode: multiply;
  z-index: 1;
`;

const NewCardCoin1Icon = styled.img`
  position: absolute;
  top: 72px;
  left: 0px;
  width: 109px;
  height: 92px;
  object-fit: contain;
  z-index: 2;
`;

const IconBackground2 = styled.div`
  height: 229px;
  flex: 1;
  position: relative;
`;

const BridgeColor2Icon = styled.img`
  position: absolute;
  top: 57px;
  left: 0px;
  width: 257px;
  height: 203px;
  object-fit: cover;
`;

const Shadow4 = styled.div`
  position: absolute;
  top: 61px;
  left: 49px;
  filter: blur(50px);
  border-radius: 50%;
  background-color: rgba(4, 4, 4, 0.8);
  width: 121px;
  height: 42px;
  mix-blend-mode: multiply;
  z-index: 1;
`;

const NewHeroCoin21Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 47px;
  width: 123px;
  height: 91px;
  object-fit: contain;
  z-index: 2;
`;

const BridgeColor2Parent = styled.div`
  height: 260px;
  flex: 1;
  position: relative;
`;

const DIcon5 = styled.div`
  position: absolute;
  top: 166px;
  left: 46px;
  width: 264px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 4px 7px;
  box-sizing: border-box;
  z-index: 1;
`;

const FeatureRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 80px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    gap: 40px;
  }
  @media screen and (max-width: 600px) {
    gap: 0px;
  }
`;

const FeatureListRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px 199px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 28px;
  color: #fff;
  @media screen and (max-width: 1300px) {
    padding-bottom: 129px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    padding-bottom: 84px;
    box-sizing: border-box;
  }
`;

const Columna = styled.section``;

const FeatureList: NextPage<FeatureListType> = ({ className = "" }) => {
  useIntersectionObserver(".animate-on-scroll");

  return (
    <FeatureListRoot className={className}>
      <FeatureRow>
        <FeatureItems>
          <FeatureContainer>
            <Feature1>
              <H>Seamless Wallet Integration</H>
              <FeatureDescription>
                Connect a DeFi wallet instantly
              </FeatureDescription>
            </Feature1>
            <DIcon className="animate-on-scroll">
              <IconBackground>
                <WalletColor1Icon
                  loading="lazy"
                  alt=""
                  src="/walletcolor-1@2x.png"
                />
                <Shadow />
                <NewWalletCoin1Icon alt="" src="/newwalletcoin-1@2x.png" />
              </IconBackground>
            </DIcon>
          </FeatureContainer>
          <Feature1>
            <H>Telegram Bot and Web App</H>
            <FeatureDescription>
              Trade on the go with our Telegram bot or use full-featured web
              app.
            </FeatureDescription>
            <DIcon1
              className="animate-on-scroll"
              loading="lazy"
              alt=""
              src="/3d-icon-04@2x.png"
            />
          </Feature1>
        </FeatureItems>
        <FeatureItems1>
          <FeatureContainer1>
            <FeatureContainer>
              <Feature2>
                <H>AI-Powered Asset Swaps</H>
                <FeatureDescription1>
                  Trade and swap assets with AI assistance
                </FeatureDescription1>
                <VAsset />
              </Feature2>
              <DIcon
                className="animate-on-scroll"
                style={{
                  bottom: "-60px",
                }}
              >
                <IconBackground1>
                  <Swap1Icon alt="" src="/swap-1@2x.png" />
                  <Shadow1 />
                  <NewSwapCoin1Icon
                    loading="lazy"
                    alt=""
                    src="/newswapcoin-1@2x.png"
                  />
                </IconBackground1>
              </DIcon>
            </FeatureContainer>
            <FeatureContainer
              style={{
                marginBottom: "0px",
              }}
            >
              <Feature3>
                <H>Advanced DeFi tools</H>
                <FeatureDescription>
                  Explore lending, borrowing, perpetual trading, and more.
                </FeatureDescription>
              </Feature3>
              <DIcon className="animate-on-scroll">
                <NewPerpCoin2Parent>
                  <NewPerpCoin2Icon alt="" src="/newperpcoin-2@2x.png" />
                  <Shadow2 />
                  <NewPerpCoin1Icon
                    loading="lazy"
                    alt=""
                    src="/newperpcoin-1@2x.png"
                  />
                </NewPerpCoin2Parent>
              </DIcon>
            </FeatureContainer>
          </FeatureContainer1>
        </FeatureItems1>
        <FeatureItems>
          <FeatureContainer className="last">
            <Feature1>
              <H>
                <BuyCrypto>{`Buy crypto `}</BuyCrypto>
                <BuyCrypto>FIAT Onboarding</BuyCrypto>
              </H>
              <FeatureDescription1>
                Purchase crypto usign cred cards or bank transfers.
              </FeatureDescription1>
            </Feature1>
            <DIcon className="animate-on-scroll">
              <IconBackground2>
                <Card1Icon loading="lazy" alt="" src="/card-1@2x.png" />
                <Shadow3 />
                <NewCardCoin1Icon alt="" src="/newcardcoin-1@2x.png" />
              </IconBackground2>
            </DIcon>
          </FeatureContainer>
          <FeatureContainer className="last">
            <Feature1>
              <H>Cross-Chain Compatibility</H>
              <FeatureDescription>
                Swap and trade assets seamlessly across multiple blockchains.
              </FeatureDescription>
              <DIcon
                className="animate-on-scroll"
                style={{
                  bottom: "-60px",
                }}
              >
                <BridgeColor2Parent>
                  <BridgeColor2Icon alt="" src="/bridgecolor-2@2x.png" />
                  <Shadow4 />
                  <NewHeroCoin21Icon
                    loading="lazy"
                    alt=""
                    src="/newherocoin2-1@2x.png"
                  />
                </BridgeColor2Parent>
              </DIcon>
            </Feature1>
          </FeatureContainer>
        </FeatureItems>
      </FeatureRow>
    </FeatureListRoot>
  );
};

export default FeatureList;
