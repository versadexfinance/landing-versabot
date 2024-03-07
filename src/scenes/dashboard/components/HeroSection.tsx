import { Flex, Stack } from "@/components/box";
import Button from "@/components/button";
import Typography from "@/components/typography";
import media from "@/styled/media";
import React from "react";
import { useMediaQuery } from "usehooks-ts";

function HeroSection() {
  const isGtThanMobile = useMediaQuery(media.tablet);

  return (
    <Flex
      color="white"
      gap={4}
      alignItems={"center"}
      id="home"
      css={{
        padding: "80px 0",
        flexDirection: isGtThanMobile ? "row" : "column-reverse",

        // marginBottom: "80px",
      }}
    >
      <Stack
        css={{
          flex: 6,
          gap: "12px",
        }}
      >
        <Typography
          css={{
            fontSize: isGtThanMobile ? "42px" : "32px",
            fontWeight: "bolder",
          }}
        >
          A full non-custodial Web3 journey!
        </Typography>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <li>
            <Typography
              css={{
                color: "#e1e1e1",
                fontWeight: "lighter",
                fontSize: isGtThanMobile ? "20px" : "18px",
              }}
            >
              Connect a DeFi wallet with a single click
            </Typography>
          </li>
          <li>
            <Typography
              css={{
                color: "#e1e1e1",
                fontWeight: "lighter",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              Buy crypto with FIAT, swap in DeFi with support of AI, and access
              advanced features such as bridge, DeFi strategies, perps,
              lending/borrowing, P2P, on-chain orderbooks, notifications, and
              much more…
            </Typography>
          </li>
        </ul>
        <Button
          css={{
            mt: 8,
            background: "linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%)",
            boxShadow: "0px 2px 8px 0px rgba(235, 254, 100, 0.4)",
            width: isGtThanMobile ? "250px" : "100%",
            "&:hover": {
              scale: 1.05,
              background: "linear-gradient(180deg, #8CEA69 0%, #EBFE64 100%)",
            },
          }}
          as="a"
          href="https://discord.gg/rnnKEn4Tc2"
          target="_blank"
        >
          JOIN VERSABOT V1
        </Button>
      </Stack>
      <div
        style={{
          flex: 4,
        }}
      >
        <img width={"120%"} src="img/hero-image.png" alt="" />
      </div>
    </Flex>
  );
}

export default HeroSection;
