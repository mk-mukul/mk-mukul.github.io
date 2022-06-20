import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import projects from "../data/projects";
import skills from "../data/skills";

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
  const [theme, setTheme] = useState(themes[0].code);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Mukul</title>
        <meta name="description" content="Mukul Raj is a third-year undergraduate at IIT Gandhinagar." />
      </Head>

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
