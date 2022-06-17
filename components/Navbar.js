import Link from "next/link";
import React, { useRef } from "react";
import { FiAlignJustify } from "react-icons/fi";

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
  const toggleNav = () => {
    console.log("Clicked");
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
        className={`font-mono bg-bgPrimary text-textPrimary z-50 opacity-100 md:opacity-95 px-4 md:px-8 lg:px-12 fixed w-full top-0 shadow-md`}
      >
        <nav className="nav py-[10px] md:py-4 flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <a className=" text-textSecondary font-inter font-bold text-3xl">
                MK
              </a>
            </Link>
          </div>

          <div
            onClick={() => toggleNav()}
            className=" md:hidden text-4xl text-textSecondary cursor-pointer"
          >
            <FiAlignJustify />
          </div>

          <div
            ref={ref}
            onClick={() => toggleNav()}
            className=" z-30 absolute md:relative bg-bgSecondary md:bg-transparent h-screen md:h-auto top-0 right-0 w-3/4 md:w-auto translate-x-full md:translate-x-0 transition-all shadow-md sm:shadow-none"
          >
            <ul className="flex gap-4 p-5 md:p-0 md:gap-0 justify-center h-full text-base md:text-sm items-center md:space-x-3 flex-col md:flex-row">
              <Link href={"/#about"}>
                <a className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-3 md:py-1 justify-center w-full md:w-auto">
                  <span className=" font-fira text-textSecondary">01.</span>
                  <li>About</li>
                </a>
              </Link>
              <Link href={"/#projects"}>
                <a className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-3 md:py-1 justify-center w-full md:w-auto">
                  <span className=" font-fira text-textSecondary">02.</span>
                  <li>Projects</li>
                </a>
              </Link>
              <Link href={"/#contact"}>
                <a className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-3 md:py-1 justify-center w-full md:w-auto">
                  <span className=" font-fira text-textSecondary">03.</span>
                  <li>Contact</li>
                </a>
              </Link>
              <a
                className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-3 md:py-1 justify-center w-full md:w-auto"
                onClick={() => {
                  changeTheme();
                  toggleNav();
                }}
              >
                <span className=" font-fira text-textSecondary">04.</span>
                <li>
                  <ThemeName theme={theme} themes={themes} />
                </li>
              </a>
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
