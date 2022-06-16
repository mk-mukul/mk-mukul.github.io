import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Headtag from "../components/Headtag";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const themes = [
    {
      name: "Firefly",
      code: "firefly"
    },
    {
      name: "Blue Night",
      code: "blueNight"
    },
    {
      name: "Red Pear",
      code: "redPear"
    },
    {
      name: "Lynx White",
      code: "lynxWhite"
    },
    {
      name: "Milky Way",
      code: "milkyWay"
    },
  ]
  const [theme, setTheme] = useState(themes[4].code);

  return (
    <>
      <div className={`${theme}`}>
        <Headtag />
        <Navbar
          themes={themes}
          theme={theme}
          setTheme={setTheme}
        />
        <Component
          {...pageProps}
        />
        <Footer
        />
      </div>
    </>
  );
}

export default MyApp;
