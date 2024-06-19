import type { NextPage } from "next";
import styled from "styled-components";

export type FrameComponentType = {
  className?: string;
};

const ShadowIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  left: 0px;
  top: 0px;
  transform: scale(2.698);
`;
const WrapperShadow = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  margin: 0 !important;
  top: -51px;
  left: 224px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;
const LogoFrameIcon = styled.img`
  width: 96px;
  height: 96px;
  position: relative;
  border-radius: 19.3px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 52px;
  font-weight: 700;
  font-family: inherit;
  background: linear-gradient(180deg, #f9f9f9, #d6d6d6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    font-size: 38px;
    line-height: 42px;
  }
  @media screen and (max-width: 450px) {
    font-size: 29px;
    line-height: 31px;
  }
`;
const FormSubtitle = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 28px;

  text-align: left;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
const Title = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 45px;
  box-sizing: border-box;
  gap: 32px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 800px) {
    gap: 16px;
    padding-left: 22px;
    padding-right: 22px;
    box-sizing: border-box;
  }
`;
const NamePlaceholder = styled.input`
  width: 100%;
  border: none;
  outline: none;

  font-size: 16px;
  background-color: transparent;
  height: 28px;
  flex: 1;
  position: relative;
  line-height: 28px;
  color: #bfbfbf;
  text-align: left;
  display: inline-block;
  min-width: 160px;
  padding: 0;
`;
const Input = styled.div`
  flex: 1;
  border-radius: 4px;
  border: 1px solid #535353;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 19px;
  min-width: 200px;
`;
const Row = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 7px;
  gap: 32px;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`;
const Row1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`;
const MessagePlaceholder = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  height: 84px;
  flex: 1;
  position: relative;
  line-height: 28px;
  color: #bfbfbf;
  text-align: left;
  display: inline-block;
  min-width: 250px;
  max-width: 100%;
  padding: 0;
`;
const Input1 = styled.div`
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid #535353;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 19px;
  max-width: 100%;
`;
const Inputs = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 32px;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`;
const JoinVersabotV = styled.b`
  width: 168px;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  display: inline-block;

  color: #020202;
  text-align: center;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 16px 40px;
  background-color: transparent;
  box-shadow: 0px 2px 8px rgba(235, 254, 100, 0.4);
  border-radius: 4px;
  background: linear-gradient(180deg, #ebfe64, #8cea69);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
`;
const FormBody = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 56px;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: 28px;
  }
`;
const Form = styled.div`
  width: 666px;
  // background-color: #ffffff;
  margin: auto;
  backdrop-filter: blur(43px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 20px 0px 0px;
  box-sizing: border-box;
  position: relative;
  gap: 48px;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    padding: 20px;
    gap: 24px;
  }
`;
const BackgroundPatternIcon = styled.img`
  width: 1440px;
  height: 452px;
  position: absolute;
  margin: 0 !important;
  top: 444px;
  left: calc(50% - 720px);
  border-radius: 24px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  z-index: 2;
`;
const SectionContactUs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  position: relative;
  gap: 4px;
  min-height: 895px;
  max-width: 100%;
`;
const SectionContactUsWrapperRoot = styled.section`
  align-self: stretch;
  // background-color: blue;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 2px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: 48px;
  color: #e1e1e1;
  font-family: Syne;
  media screen and (max-width: 800px) {
    border: 1px solid red;
  }
`;

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <SectionContactUsWrapperRoot className={className} id="contact-us">
      <SectionContactUs>
        <Form>
          <WrapperShadow>
            <ShadowIcon alt="" src="/shadow2.svg" />
          </WrapperShadow>
          <Title>
            <LogoFrameIcon loading="lazy" alt="" src="/logo-frame@2x.png" />
            <H>Contact us now</H>
            <FormSubtitle>
              If you have any questions, please don't hesitate to get in touch
            </FormSubtitle>
          </Title>
          <FormBody>
            <Inputs>
              <Row>
                <Input>
                  <NamePlaceholder placeholder="Name" type="text" />
                </Input>
                <Input>
                  <NamePlaceholder placeholder="E-mail" type="text" />
                </Input>
              </Row>
              <Row1>
                <Input>
                  <NamePlaceholder placeholder="Company" type="text" />
                </Input>
                <Input>
                  <NamePlaceholder placeholder="Subject" type="text" />
                </Input>
              </Row1>
              <Input1>
                <MessagePlaceholder placeholder="Message" type="text" />
              </Input1>
            </Inputs>
            <Button>
              <JoinVersabotV>Send the message</JoinVersabotV>
            </Button>
          </FormBody>
        </Form>
        <BackgroundPatternIcon alt="" src="/background-pattern-1@2x.png" />
      </SectionContactUs>
    </SectionContactUsWrapperRoot>
  );
};

export default FrameComponent;