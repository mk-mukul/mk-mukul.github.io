import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

const Navbar = ({ themes, theme, setTheme }) => {
  const changeTheme = () => {
    for (let i = 0; i < themes.length; i++) {
      const code = themes[i].code;
      if (code == theme) {
        i >= themes.length - 1
          ? setTheme(themes[0].code)
          : setTheme(themes[i + 1].code);
      }
    }
  };

  const [toggleOnScroll, setToggleOnScroll] = useState(
    "opacity-95 md:opacity-80"
  );
  const [toggleMenu, setToggleMenu] = useState("md:translate-x-0");
  const [toggleMenuIcon, setToggleMenuIcon] = useState("");
  const [toggleLogo, setToggleLogo] = useState("");
  const [navShadow, setNavShadow] = useState("");
  useEffect(() => {
    let lastScroll = window.scrollY;
    window.addEventListener("scroll", () => {
      if (window.scrollY == 0) {
        setNavShadow("");
      } else {
        setNavShadow("shadow-md");
      }
      if (lastScroll < window.scrollY) {
        setToggleOnScroll("opacity-0 md:opacity-0");
        setToggleMenu("translate-x-[650px]");
        setToggleMenuIcon("translate-x-[60px]");
        setToggleLogo(" absolute translate-x-[-120px]");
      } else {
        setToggleOnScroll("opacity-95 md:opacity-80");
        setToggleMenu("md:translate-x-0");
        setToggleMenuIcon("");
        setToggleLogo("");
      }
      lastScroll = window.scrollY;
    });
  }, []);

  const toggleNav = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <>
      <header
        className={` bg-bgPrimary font-mono top-0 left-0 z-50 px-4 md:px-8 lg:px-12 fixed w-full transition-all ${toggleOnScroll} ${navShadow}`}
      >
        <nav className="nav py-[5px] min-h-[60px] md:py-[8px] flex justify-between items-center">
          <div className={` transition-all ${toggleLogo}`}>
            <Link href={"/"}>
              <a className="">
                <Logo className=" w-[60px]" color={"fill-textSecondary"} />
              </a>
            </Link>
          </div>

          <div></div>

          <div
            onClick={() => toggleNav()}
            className={` md:hidden text-4xl text-textSecondary cursor-pointer transition-all ${toggleMenuIcon}`}
          >
            <FiMenu />
          </div>

          <div
            ref={ref}
            onClick={() => toggleNav()}
            className={` z-30 absolute md:relative bg-bgSecondary md:bg-transparent h-screen md:h-auto top-0 right-0 w-3/4 md:w-auto translate-x-full transition-all shadow-md sm:shadow-none ${toggleMenu}`}
          >
            <FiX className=" absolute md:hidden text-textSecondary top-3 right-3 text-5xl" />
            <ul className="flex gap-4 p-5 md:p-0 md:gap-0 justify-center h-full text-base md:text-sm items-center md:space-x-3 flex-col md:flex-row">
              <li className=" w-full">
                <Link href={"/blogs"}>
                  <a className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-3 md:py-1 justify-center w-full md:w-max">
                    <span className=" font-fira text-textSecondary">01.</span>
                    Blogs
                  </a>
                </Link>
              </li>
              <li className=" w-full">
                <Link href={"/#projects"}>
                  <a className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-3 md:py-1 justify-center w-full md:w-max">
                    <span className=" font-fira text-textSecondary">02.</span>
                    Projects
                  </a>
                </Link>
              </li>
              <li className=" w-full">
                <Link href={"/#contact"}>
                  <a className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-3 md:py-1 justify-center w-full md:w-max">
                    <span className=" font-fira text-textSecondary">03.</span>
                    Contact
                  </a>
                </Link>
              </li>
              <li className=" w-full">
                <a
                  className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-3 md:py-1 justify-center w-full md:w-max"
                  onClick={() => {
                    changeTheme();
                    toggleNav();
                  }}
                >
                  <span className=" font-fira text-textSecondary">04.</span>
                  <ThemeName theme={theme} themes={themes} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

const ThemeName = ({ theme, themes }) => {
  for (let i = 0; i < themes.length; i++) {
    const code = themes[i].code;
    if (code == theme) {
      return themes[i].name;
    }
  }
};

export default Navbar;
