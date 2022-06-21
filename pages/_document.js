import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Mukul Raj" />
        <meta name="title" content="Mukul Raj" />
        <meta name="keywords" content="mukul raj, portfolio website, web developer, iit gandhinagar" />
        <meta name="robots" content="index, follow" />
        <meta name="image" content="/img/og.png" />
        <meta property="og:title" content="Mukul Raj" />
        <meta name="og:description" content="Mukul Raj is a third-year undergraduate at IIT Gandhinagar." />
        <meta name="og:image" content="/img/og.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:creator" content="@mk_mucool" />
        <meta name="twitter:title" content="Mukul Raj" />
        <meta name="twitter:description" content="Mukul Raj is a third-year undergraduate at IIT Gandhinagar." />
        <meta name="twitter:image" content="/img/og.png" />


        <link rel="icon" href="/favicon.png" />

        {/* Google Fonts */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter&display=swap" rel="stylesheet" /> */}

        {/* google adsense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5158932177576529"
          crossOrigin="anonymous"></script>

      </Head>

      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
