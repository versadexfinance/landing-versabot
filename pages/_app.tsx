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

        <title>VersaX | The AI-Powered, Non-Custodial Trading Experience</title>
        <meta
          name="description"
          content="VersaX, the first AI-powered, non-custodial, cross-chain platform on TG and Web, leverages advanced features to offer a secure and smart trading experience."
        />

        <meta property="og:url" content="https://versax.io" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="VersaX | The AI-Powered, Non-Custodial Trading Experience"
        />
        <meta
          property="og:description"
          content="VersaX, the first AI-powered, non-custodial, cross-chain platform on TG and Web, leverages advanced features to offer a secure and smart trading experience."
        />
        <meta property="og:image" content="https://versax.io/og-banner.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="versax.io" />
        <meta property="twitter:url" content="https://versax.io" />
        <meta
          name="twitter:title"
          content="VersaX | The First Non-Custodial Telegram Trading Bot"
        />
        <meta
          name="twitter:description"
          content="VersaX, the first AI-powered, non-custodial, cross-chain platform on TG and Web, leverages advanced features to offer a secure and smart trading experience."
        />
        <meta name="twitter:image" content="https://versax.io/og-banner.jpg" />

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
