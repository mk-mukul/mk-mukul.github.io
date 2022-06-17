import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

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
    {
      name: "Red Pear",
      code: "redPear",
    },
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

  const skills = [
    "Javascript",
    "MongoDB",
    "Expressjs",
    "React",
    "Next.js",
    "React Native",
    "TailwindCSS",
    "Arduino",
    "IOT",
  ];
  return (
    <>
      <Head>
        <title>Mukul</title>
      </Head>
      <div className={`${theme}`}>
        <Navbar themes={themes} theme={theme} setTheme={setTheme} />
        <Component
          skills={skills}
          themes={themes}
          theme={theme}
          setTheme={setTheme}
          {...pageProps}
        />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
