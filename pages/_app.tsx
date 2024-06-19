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

        <title>
          VersaBot: The World’s First Non-Custodial, Cross-chain EVM Telegram
          Bot, Enhanced by VersaAI
        </title>
        <meta
          name="title"
          content="VersaBot: The World’s First Non-Custodial, Cross-chain EVM Telegram Bot, Enhanced by VersaAI "
        />
        <meta
          name="description"
          content="VersaBot stands as a revolutionary tool within the DeFi space as it’s the first Telegram bot to offer a complete non-custodial, cross-chain experience with advanced Web3 and features, while also providing a smooth onboarding process for all."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bot.versadex.finance/" />
        <meta
          property="og:title"
          content="VersaBot: The World’s First Non-Custodial, Cross-chain EVM Telegram Bot, Enhanced by VersaAI "
        />
        <meta
          property="og:description"
          content="Versabot stands as a revolutionary tool within the DeFi space as it’s the first Telegram bot to offer a complete non-custodial, cross-chain experience with advanced Web3 and features, while also providing a smooth onboarding process for all."
        />
        <meta
          property="og:image"
          content="https://bot.versadex.finance/img/og-banner.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bot.versadex.finance/" />
        <meta
          property="twitter:title"
          content="VersaBot: The World’s First Non-Custodial, Cross-chain EVM Telegram Bot, Enhanced by VersaAI "
        />
        <meta
          property="twitter:description"
          content="VersaBot stands as a revolutionary tool within the DeFi space as it’s the first Telegram bot to offer a complete non-custodial, cross-chain experience with advanced Web3 and features, while also providing a smooth onboarding process for all."
        />
        <meta
          property="twitter:image"
          content="https://bot.versadex.finance/img/og-banner.jpg"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
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
