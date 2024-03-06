import { Flex, Stack } from "@/components/box";
import Button from "@/components/button";
import Typography from "@/components/typography";
import React from "react";

function HeroSection() {
  return (
    <Flex
      color="white"
      gap={4}
      alignItems={"center"}
      css={{
        padding: "80px 0",
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
            fontSize: "42px",
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
                fontSize: "20px",
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
            "&:hover": {
              scale: 1.05,
              background: "linear-gradient(180deg, #8CEA69 0%, #EBFE64 100%)",
            },
          }}
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
