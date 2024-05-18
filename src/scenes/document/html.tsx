"use client";

// import { dir } from 'i18next';
import { Poppins } from "next/font/google";
// eslint-disable-next-line import/order
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

import Head from "next/head";
import { RecoilRoot } from "recoil";
import { Analytics } from "@vercel/analytics/react";

// import useCurrentLocale from '@/pods/i18n/hooks/use-current-locale';
// import { Locale } from '@/pods/i18n/interfaces';

import { getCssText } from "@/styled/styled";
import globalStyles from "@/styled/global-styles";
import "@rainbow-me/rainbowkit/styles.css";

import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";

import { AnimatePresence } from "framer-motion";
import CanvasAnimation from "@/components/CanvasAnimation";
import Footer from "@/components/footer/footer";
interface HtmlProps {
  children: ReactNode;
  // lng: Locale;
}

const Html = ({ children }: HtmlProps) => {
  // const locale = useCurrentLocale(lng);
  globalStyles();
  return (
    <html className={poppins.className}>
      <title>VersaBot</title>
      <Head key={"123"}>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />


<title>VersaBot: The World’s First Non-Custodial, Cross-chain EVM Telegram Bot, Enhanced by VersaAI </title>
<meta name="title" content="VersaBot: The World’s First Non-Custodial, Cross-chain EVM Telegram Bot, Enhanced by VersaAI " />
<meta name="description" content="VersaBot stands as a revolutionary tool within the DeFi space as it’s the first Telegram bot to offer a complete non-custodial, cross-chain experience with advanced Web3 and features, while also providing a smooth onboarding process for all." />


<meta property="og:type" content="website" />
<meta property="og:url" content="https://bot.versadex.finance/" />
<meta property="og:title" content="VersaBot: The World’s First Non-Custodial, Cross-chain EVM Telegram Bot, Enhanced by VersaAI " />
<meta property="og:description" content="Versabot stands as a revolutionary tool within the DeFi space as it’s the first Telegram bot to offer a complete non-custodial, cross-chain experience with advanced Web3 and features, while also providing a smooth onboarding process for all." />
<meta property="og:image" content="https://bot.versadex.finance/img/og-banner.jpg" />


<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://bot.versadex.finance/" />
<meta property="twitter:title" content="VersaBot: The World’s First Non-Custodial, Cross-chain EVM Telegram Bot, Enhanced by VersaAI " />
<meta property="twitter:description" content="VersaBot stands as a revolutionary tool within the DeFi space as it’s the first Telegram bot to offer a complete non-custodial, cross-chain experience with advanced Web3 and features, while also providing a smooth onboarding process for all." />
<meta property="twitter:image" content="https://bot.versadex.finance/img/og-banner.jpg" />


      </Head>
      <body>
        <AnimatePresence mode="wait">
          <RecoilRoot>{children}</RecoilRoot>
        </AnimatePresence>
        <Analytics />
        {/* <CanvasAnimation /> */}
      </body>
    </html>
  );
};

export default Html;
