// import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";

const Navbar = ({ themes, theme, setTheme }) => {
  return (
    <>
      {/* <Head>
        <title>Mukul</title>
    </Head> */}
      <header
        className={`bg-bgPrimary text-textPrimary z-50 opacity-90 px-12 fixed w-full shadow-md top-0`}
      >
        <nav className="nav py-4 flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <a className=" font-bold text-3xl">MK</a>
            </Link>
          </div>

          <div className="flex space-x-3 cursor-pointer">
            {themes.map((val) => {
              var current = "";
              if (theme == val.code) {
                current = "font-bold"
              }
              return (
                <>
                  <div key={val.code} onClick={() => setTheme(val.code)} className={current}>
                    {val.name}
                  </div>
                </>
              );
            })}
          </div>

          <div className="">
            <ul className="flex items-center space-x-6">
              <Link href={"/#about"}>
                <a>
                  <li>About</li>
                </a>
              </Link>
              <Link href={"/#projects"}>
                <a>
                  <li>Projects</li>
                </a>
              </Link>
              <Link href={"/#contact"}>
                <a>
                  <li>Contact</li>
                </a>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
      <div className="w-10 fixed bottom-0 left-10 right-auto flex flex-col opacity-80">
        <div className={`w-[1px] h-10 self-center bg-textPrimary`}></div>
        <ul className="flex flex-col text-center my-5">
          <li>
            <a
              href="https://www.linkedin.com/in/mk-mukul/"
              target="_blank"
              rel="noreferrer"
              className={`text-textPrimary p-2.5 inline-block`}
            >
              <FiLinkedin size={"20px"} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mk-mukul"
              target="_blank"
              rel="noreferrer"
              className={`text-textPrimary p-2.5 inline-block`}
            >
              <FiGithub size={"20px"} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mk_mucool/"
              target="_blank"
              rel="noreferrer"
              className={`text-textPrimary p-2.5 inline-block`}
            >
              <FiInstagram size={"20px"} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/mk_mucool"
              target="_blank"
              rel="noreferrer"
              className={`text-textPrimary p-2.5 inline-block`}
            >
              <FiTwitter size={"20px"} />
            </a>
          </li>
        </ul>
        <div className={`w-[1px] h-24 self-center bg-textPrimary`}></div>
      </div>
      <div className="w-10 fixed bottom-0 right-10 left-auto flex flex-col opacity-80">
        <div className={`w-[1px] h-10 self-center bg-textPrimary`}></div>
        <div className="flex flex-col relative items-center my-5">
          <a
            href="mailto:mukul.raj@iitgn.ac.in"
            target="_blank"
            rel="noreferrer"
            className={`text-textPrimary py-[5px] px-2.5`}
            style={{ writingMode: "vertical-lr", letterSpacing: "1px" }}
          >
            mukul.raj@iitgn.ac.in
          </a>
        </div>
        <div className={`w-[1px] h-24 self-center bg-textPrimary`}></div>
      </div>
    </>
  );
};

export default Navbar;
