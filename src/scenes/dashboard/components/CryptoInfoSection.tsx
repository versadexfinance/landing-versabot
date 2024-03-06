import { Stack, Flex } from "@/components/box";
import Typography from "@/components/typography";
import VideoComponent from "./VideoComponent";

function CryptoInfoSection({ direction = "row" as any }) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Stack
        css={{
          position: "relative",
          height: "400px",
          padding: "24px",
          borderRadius: "32px",
          mb: "220px",

          background: "black",
          nackDropFilter: "blur(10px)",
          zIndex: 9999,
          // boxShadow: "0px 10px 120px 0px #chbcea69 ",
        }}
      >
        <Flex direction={direction} css={{}}>
          <Stack
            css={{
              flex: "1",
              mt: 12,
              gap: 4,
              width: "50%",
              background: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              style={{
                width: "50%",
              }}
            >
              <Typography
                css={{
                  fontSize: "30px",
                  fontWeight: "bolder",
                  color: "#f5ffab",
                  mb: 4,
                }}
              >
                Buy Crypto with FIAT
              </Typography>
              <Typography
                css={{
                  fontSize: "28px",
                }}
              >
                Through VersaBot, users effortlessly purchase cryptocurrencies
                with just a few clicks, using their credit card or bank transfer
              </Typography>
            </div>
          </Stack>
          <Flex
            style={{
              flex: "1",
            }}
            css={{
              position: "absolute",
              bottom: 0,
              justifyContent: "center",
            }}
          >
            <VideoComponent src="img/trust-wallet-canva.mp4" />
          </Flex>
        </Flex>
      </Stack>
      <div
        style={{
          position: "absolute",
          borderRadius: "658px",
          width: "658px",
          height: "208px",
          top: "99px",
          left: "50%",
          zIndex: -10,
          transform: "translateX(-50%)",
          background:
            "var(--Gradient---90deg, linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%))",
          filter: "blur(100px)",
        }}
      ></div>
    </div>
  );
}

export default CryptoInfoSection;
