import React from "react";
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import ParaLink from "./ParaLink";

const Footer = () => {
  return (
    <div className=" font-mono">
      <div className="w-10 fixed bottom-0 left-10 right-auto flex flex-col opacity-80">
        <div className={`w-[1px] h-10 self-center bg-textPrimary`}></div>
        <ul className="flex flex-col space-y-4 text-center my-5">
          <li>
            <a
              href="https://www.linkedin.com/in/mk-mukul/"
              target="_blank"
              rel="noreferrer"
              className={`text-textPrimary p-2.5 inline-block transition-all hover:text-textSecondary hover:translate-y-[-5px] `}
            >
              <FiLinkedin size={"20px"} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mk-mukul"
              target="_blank"
              rel="noreferrer"
              className={`text-textPrimary p-2.5 inline-block transition-all hover:text-textSecondary hover:translate-y-[-5px] `}
            >
              <FiGithub size={"20px"} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mk_mucool/"
              target="_blank"
              rel="noreferrer"
              className={`text-textPrimary p-2.5 inline-block transition-all hover:text-textSecondary hover:translate-y-[-5px] `}
            >
              <FiInstagram size={"20px"} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/mk_mucool"
              target="_blank"
              rel="noreferrer"
              className={`text-textPrimary p-2.5 inline-block transition-all hover:text-textSecondary hover:translate-y-[-5px] `}
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
            className={`text-textPrimary font-mono py-[8px] transition-all hover:text-textSecondary hover:translate-y-[-5px] px-2.5`}
            style={{ writingMode: "vertical-lr", letterSpacing: "1px" }}
          >
            mukul.raj@iitgn.ac.in
          </a>
        </div>
        <div className={`w-[1px] h-24 self-center bg-textPrimary`}></div>
      </div>

      <footer
        className={` font-fira text-xs bg-bgPrimary text-textPrimary px-12 w-full shadow-md`}
      >
        <div className="footer py-6 flex flex-col gap-2 justify-center items-center">
          <p className="">
            Developed by Mukul using{" "}
            <ParaLink text="Next.js" href="https://nextjs.org/" />
            {" and "}
            <ParaLink text="TailwindCSS" href="https://tailwindcss.com/" />
          </p>
          <p className="flex">
            <span className="pr-1.5 text-base">&copy;</span> 2022 Mukul Raj
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
