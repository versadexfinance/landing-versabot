"use client";
import React from "react";
import { Flex } from "../box";
import Typography from "../typography";
import { useBlockNumber } from "wagmi";
import { motion } from "framer-motion";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import NextLink from "../next-link";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { SiDiscord } from "react-icons/si";

function Footer() {
  // const {
  //   data: blockNumberData,
  //   isError: blockNumberIsError,
  //   isLoading: blockNumberIsLoading,
  // } = useBlockNumber()

  return (
    <Flex
      as={"footer"}
      fullWidth
      css={{
        maxWidth: 380,
        margin: "auto",
        padding: 20,
        // py: 10,
      }}
      justifyContent={"spaceBetween"}
      alignItems={"center"}
    >
      <Typography
        css={{
          fontSize: "14px",
          color: "#BFBFBF",
        }}
      >
        {" "}
        VersaBot - All rights reserved - 2024
      </Typography>

      <Flex gap={1} alignItems={"center"}>
        <Typography
          css={{
            fontSize: "12px",
            color: "white",
          }}
        >
          {/* {String(blockNumberIsLoading ? "Loading..." : blockNumberData)} */}
        </Typography>
        <Flex gap={4}>
          <motion.div
            whileHover={{
              scale: 1.1,
              // boxShadow: "0px 0px 30px #21ead6",
              transition: { duration: 0.3 },
            }}
          >
            <NextLink
              target="_blank"
              href="https://discord.gg/rnnKEn4Tc2"
              css={{
                scale: 1.4,
              }}
            >
              <SiDiscord style={{ scale: 1.4 }} color="white" size={25} />
            </NextLink>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              // boxShadow: "0px 0px 30px #21ead6",
              transition: { duration: 0.3 },
            }}
          >
            <NextLink target="_blank" href="">
              <BsTwitterX color="white" size="30" />
            </NextLink>
          </motion.div>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
