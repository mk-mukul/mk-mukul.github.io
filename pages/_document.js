import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="Mukul" />
        <meta name="description" content="Presonal Website of Mukul" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className=" font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
