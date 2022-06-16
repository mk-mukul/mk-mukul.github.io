import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Headtag from "../components/Headtag";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const themes = {
    firefly: {
      name: "Firefly",
      bgColor: "#0E2A30",
      bgColor2: "#193D45",
      textColor: "#DAE7EA",
    },
    blue_night: {
      name: "Blue Night",
      bgColor: "#333745",
      bgColor2: "#474b58",
      textColor: "#ebebec",
    },
    red_pear: {
      name: "Red Pear",
      bgColor: "#7b3638",
      bgColor2: "#884a4c",
      textColor: "#f2ebeb",
    },
    lynx_white: {
      name: "Lynx White",
      bgColor: "#f4ecf5",
      bgColor2: "#e9d9eb",
      textColor: "#923f9d",
    },
    milky_way: {
      name: "Milky Way",
      bgColor: "#e9f4f8",
      bgColor2: "#d2e8f1",
      textColor: "#208cb7",
    },
  }
  const [theme, setTheme] = useState(themes.firefly);

  return (
    <>

      <div className="hidden text-[#e9f4f8] bg-[#e9f4f8]"></div>
      <div className="hidden text-[#d2e8f1] bg-[#d2e8f1]"></div>
      <div className="hidden text-[#208cb7] bg-[#208cb7]"></div>

      <div className="hidden text-[#f4ecf5] bg-[#f4ecf5]"></div>
      <div className="hidden text-[#e9d9eb] bg-[#e9d9eb]"></div>
      <div className="hidden text-[#923f9d] bg-[#923f9d]"></div>

      <div className="hidden text-[#0e2a55] bg-[#0e2a55]"></div>
      <div className="hidden text-[#263f66] bg-[#263f66]"></div>
      <div className="hidden text-[#e7eaee] bg-[#e7eaee]"></div>

      <div className="hidden text-[#7b3638] bg-[#7b3638]"></div>
      <div className="hidden text-[#884a4c] bg-[#884a4c]"></div>
      <div className="hidden text-[#f2ebeb] bg-[#f2ebeb]"></div>

      <div className="hidden text-[#333745] bg-[#333745]"></div>
      <div className="hidden text-[#474b58] bg-[#474b58]"></div>
      <div className="hidden text-[#ebebec] bg-[#ebebec]"></div>

      <div className="hidden text-[#3E3A44] bg-[#3E3A44]"></div>
      <div className="hidden text-[#504C57] bg-[#504C57]"></div>
      <div className="hidden text-[#EAE9EC] bg-[#EAE9EC]"></div>


      <div className="hidden text-[#0E2A30] bg-[#0E2A30]"></div>
      <div className="hidden text-[#193D45] bg-[#193D45]"></div>
      <div className="hidden text-[#DAE7EA] bg-[#DAE7EA]"></div>

      <Headtag />
      <Navbar
        bgColor={theme.bgColor}
        textColor={theme.textColor}
      />
      <Component
        bgColor={theme.bgColor}
        textColor={theme.textColor}
        bgColor2={theme.bgColor2}
        {...pageProps}
      />
      <Footer
        bgColor={theme.bgColor}
        textColor={theme.textColor}
      />
    </>
  );
}

export default MyApp;
