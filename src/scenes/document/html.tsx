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
