// import Head from "next/head";
import Link from "next/link";
import React from "react";

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
  return (
    <>
      {/* <Head>
        <title>Mukul</title>
    </Head> */}
      <header
        className={`font-mono bg-bgPrimary text-textPrimary z-50 opacity-95 px-12 fixed w-full top-0 shadow-md`}
      >
        <nav className="nav py-4 flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <a className=" text-textSecondary font-inter font-bold text-3xl">
                MK
              </a>
            </Link>
          </div>

          {/* <div className="flex space-x-3 cursor-pointer">
            {themes.map((val) => {
              var current = "";
              if (theme == val.code) {
                current = "font-bold"
              }
              return (
                <div key={val.code} onClick={() => setTheme(val.code)} className={current}>
                  {val.name}
                </div>
              );
            })}
          </div> */}

          <div className="">
            <ul className="flex text-sm items-center space-x-3">
              <Link href={"/#about"}>
                <a className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-1">
                  <span className=" font-fira text-textSecondary">01.</span>
                  <li>About</li>
                </a>
              </Link>
              <Link href={"/#projects"}>
                <a className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-1">
                  <span className=" font-fira text-textSecondary">02.</span>
                  <li>Projects</li>
                </a>
              </Link>
              <Link href={"/#contact"}>
                <a className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-1">
                  <span className=" font-fira text-textSecondary">03.</span>
                  <li>Contact</li>
                </a>
              </Link>
              <a
                className=" flex gap-1 cursor-pointer hover:text-textSecondary px-2 py-1 font-bold"
                onClick={() => changeTheme()}
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
