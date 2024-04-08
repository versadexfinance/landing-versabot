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
import { useEffect, useRef, useState } from "react";
import { LoadingBar } from "../loading-bar";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import media from "@/styled/media";
import Typography from "../typography";
import Button from "../button";

// Common components


import gsap from 'gsap';


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
      <NextLink href="https://docs.versadex.finance/versabot" target="_blank">
        Docs
      </NextLink>
      <NextLink href="#contact">Contact us</NextLink>
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
  const isGtThanMobile = useMediaQuery(media.mobile);

  const router = useRouter(); // Get the router instance
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);


  // useEffect(() => {
  //   const button = buttonRef.current;
  
  //   gsap.fromTo(button, 
  //     { rotationX: 0, rotationY: 0, boxShadow: '0px 2px 8px 0px rgba(235, 254, 100, 0.4)' },
  //     {
  //       rotationX: 10, // Tilt forward
  //       rotationY: 10, // Tilt to the side
  //       boxShadow: '5px 5px 15px 5px rgba(235, 254, 100, 0.6)', // Enhance shadow
  //       ease: 'power2.out',
  //       paused: true,
  //     }
  //   );
  
  //   button.addEventListener('mouseenter', () => gsap.to(button, { rotationX: 10, rotationY: 10, boxShadow: '5px 5px 15px 5px rgba(235, 254, 100, 0.6)' }));
  //   button.addEventListener('mouseleave', () => gsap.to(button, { rotationX: 0, rotationY: 0, boxShadow: '0px 2px 8px 0px rgba(235, 254, 100, 0.4)' }));
  
  //   return () => {
  //     button.removeEventListener('mouseenter');
  //     button.removeEventListener('mouseleave');
  //   };
  // }, []);

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
            <img src="/img/logo-text.png" height="32px" style={{
                  filter:" invert(100%) brightness(200%) contrast(100%)"

            }} alt="" />
            {/* <Typography
              css={{
                fontWeight: "semibold",
                // fontStyle: "oblique",
                lineHeight: "32px",
              }}
            >
              
            </Typography> */}
          </NextLink>
          <HiddenOnMobile>
            <NavigationLinks pathname={pathname} />
          </HiddenOnMobile>

          <Button
            ref={buttonRef}

            css={{
              // mt: 8,
              background: "linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%)",
              boxShadow: "0px 2px 8px 0px rgba(235, 254, 100, 0.4)",
              // fontWeight: "700 !important",
              fontWeight: "bold !important !important",

              "&:hover": {
                scale: 1.05,
                background: "linear-gradient(180deg, #8CEA69 0%, #EBFE64 100%)",
              },
            }}
            as="a"
            href="https://t.me/versatest_bot"
            target="_blank"
          >
            {isGtThanMobile ? "JOIN VersaBot V1" : "JOIN V1"}
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
