import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyles from "./styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>VDX</title>
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />

        <title>VersaBot | The First Non-Custodial Telegram Trading Bot</title>
        <meta
          name="description"
          content="VersaBot, the world's first non-custodial, cross-chain EVM TG Bot enhanced by VersaAI, offers smooth onboarding, advanced DeFi features, and top-tier security."
        />

        <meta property="og:url" content="https://versadex.finance" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="VersaBot | The First Non-Custodial Telegram Trading Bot"
        />
        <meta
          property="og:description"
          content="VersaBot, the world's first non-custodial, cross-chain EVM TG Bot enhanced by VersaAI, offers smooth onboarding, advanced DeFi features, and top-tier security."
        />
        <meta
          property="og:image"
          content="https://versadex.finance/img/og-banner.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="versadex.finance" />
        <meta property="twitter:url" content="https://versadex.finance" />
        <meta
          name="twitter:title"
          content="VersaBot | The First Non-Custodial Telegram Trading Bot"
        />
        <meta
          name="twitter:description"
          content="VersaBot, the world's first non-custodial, cross-chain EVM TG Bot enhanced by VersaAI, offers smooth onboarding, advanced DeFi features, and top-tier security."
        />
        <meta
          name="twitter:image"
          content="https://versadex.finance/img/og-banner.jpg"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Mabry+Pro:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;700&display=swap');`,
          }}
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
