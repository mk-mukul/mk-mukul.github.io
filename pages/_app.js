import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import projects from "../data/projects";
import skills from "../data/skills";
import * as gtag from "../lib/gtag";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const themes = [
    {
      name: "Firefly",
      code: "firefly",
    },
    {
      name: "Blue Night",
      code: "blueNight",
    },
    // {
    //   name: "Red Pear",
    //   code: "redPear",
    // },
    {
      name: "Lynx White",
      code: "lynxWhite",
    },
    {
      name: "Milky Way",
      code: "milkyWay",
    },
  ];
  const [theme, setTheme] = useState(themes[1].code);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Mukul</title>
        <meta name="description" content="Mukul Raj is a third-year undergraduate at IIT Gandhinagar." />
      </Head>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <div className={`${theme} bg-bgPrimary text-textPrimary min-h-screen min-w-screen`}>
        <Navbar themes={themes} theme={theme} setTheme={setTheme} />
        <main id="content" className={` px-[16px] md:px-[100px] lg:px-[150px] mx-auto max-w-[1600px] w-full`}>
          <Component
            skills={skills}
            themes={themes}
            theme={theme}
            projects={projects}
            setTheme={setTheme}
            {...pageProps}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
