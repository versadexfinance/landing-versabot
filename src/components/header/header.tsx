"use client";
import Image from "next/image";
import { Flex } from "@/components/box";
import { ContainerHeader, ContainerHeaderNavbar } from "./styles";
import NextLink from "../next-link";
import { styled } from "@/styled";
import { usePathname } from "next/navigation";
// import { start } from 'repl';

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingBar } from "../loading-bar";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import media from "@/styled/media";
import Typography from "../typography";
import Button from "../button";

// Common components

const StyledNextLink = styled(Link, {
  fontSize: "16px",
  textDecoration: "none",
  color: "$secondary",
  // borderRadius: '4px',
  padding: "0.185rem 0.375rem",
  "@mobile": {
    padding: "0.25rem .5rem",
    fontSize: "15px",
  },
  "&:hover": {
    borderBottom: "1px solid $primary",
  },
  variants: {
    active: {
      true: {
        // background: 'rgba(235, 254, 100, 0.10)',
        borderBottom: "1px solid $primary",
        color: "$primary",
      },
    },
  },
});

const ResponsiveNavLinksContainer = styled(Flex, {
  gap: 2,
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  color: "white",
  justifyContent: "space-between",
  "@tablet": {
    gap: 4,
    justifyContent: "space-between",
  },
});

const NavigationLinks = ({ pathname }: { pathname: string | null }) => (
  <ResponsiveNavLinksContainer>
    <Flex gap={2}>
      <NextLink href="#home">Home</NextLink>
      <NextLink href="#contact">Contact us</NextLink>
      <NextLink href="https://xdex.gitbook.io/versabot/" target="_blank">
        Docs
      </NextLink>
    </Flex>
  </ResponsiveNavLinksContainer>
);

// Refactored Header component
const HiddenOnMobile = styled(Flex, {
  display: "none",
  "@tablet": {
    display: "block",
  },
});

const HiddenOnDesktop = styled(Flex, {
  display: "block",
  "@tablet": {
    display: "none",
  },
});

const Header = () => {
  const isGtThanMobile = useMediaQuery(media.tablet);

  const router = useRouter(); // Get the router instance
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (!router.isReady || typeof window === 'undefined') {
  //     return
  //   }
  //   const handleStart = url => url !== router.asPath && setLoading(true)
  //   const handleComplete = url => url === router.asPath && setLoading(false)

  //   Router.events.on('routeChangeStart', handleStart)
  //   Router.events.on('routeChangeComplete', handleComplete)
  //   Router.events.on('routeChangeError', handleComplete)

  //   return () => {
  //     Router.events.off('routeChangeStart', handleStart)
  //     Router.events.off('routeChangeComplete', handleComplete)
  //     Router.events.off('routeChangeError', handleComplete)
  //   }
  // }, [router.isReady, router.events])

  return (
    <ContainerHeader>
      <ContainerHeaderNavbar alignItems="center" justifyContent="spaceBetween">
        <Flex
          css={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            "@tablet": {
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            },
          }}
        >
          <NextLink
            href="dashboard"
            css={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: "30px",
              cursor: "pointer",
            }}
          >
            <img src="/img/logo.svg" alt="logo" height={32} />
            <Typography
              css={{
                fontWeight: "bold",
              }}
            >
              VersaBotAI
            </Typography>
          </NextLink>
          <HiddenOnMobile>
            <NavigationLinks pathname={pathname} />
          </HiddenOnMobile>

          <Button
            css={{
              // mt: 8,
              background: "linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%)",
              boxShadow: "0px 2px 8px 0px rgba(235, 254, 100, 0.4)",
              fontWeight: "700 !important",
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
        </Flex>
        <HiddenOnDesktop>
          <NavigationLinks pathname={pathname} />
        </HiddenOnDesktop>
        <HiddenOnMobile>
          <Flex></Flex>
        </HiddenOnMobile>
      </ContainerHeaderNavbar>
      <LoadingBar loading={loading} />
    </ContainerHeader>
  );
};

export default Header;
