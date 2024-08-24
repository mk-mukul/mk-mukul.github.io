import Image from "next/image";
import { useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import Button from "../components/Button";
import ParaLink from "../components/ParaLink";
import Project from "../components/Project";

export default function Home({ skills, theme, themes, projects, setTheme }) {
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

  const ref = useRef();
  const animation = () => {
    if (ref.current.classList.contains("translate-x-5")) {
      ref.current.classList.remove("translate-x-5", "translate-y-5");
      ref.current.classList.add("translate-x-3", "translate-y-3");
    } else if (ref.current.classList.contains("translate-x-3")) {
      ref.current.classList.remove("translate-x-3", "translate-y-3");
      ref.current.classList.add("translate-x-5", "translate-y-5");
    }
  };

  return (
    <>
      <section className="min-h-screen flex flex-col gap-3 lg:gap-4 justify-center items-start max-w-[1060px] mx-auto">
        <div>
          <h3 className=" font-fira text-textSecondary">Hi, My name is</h3>
        </div>
        <div className="">
          <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold">
            Mukul Raj.
          </h1>
        </div>
        <div className="">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold opacity-[60%]">
            {/* I am Finance and Cybersecurity enthusiast. */}
            I am a Software Developer.
          </h2>
        </div>
        <div className=" max-w-lg opacity-90">
          <p>
            I&apos;m Mukul Raj, Senior undergraduate at 
            {" "}
            <ParaLink
              text="IIT Gandhinagar"
              href="https://iitgn.ac.in/"
            />
            . I have an interest in the fields of
            {" "}
            <ParaLink
              text="Cyber Security"
              href="#projects"
              notTarget={true}
            />
            {/* {", "} */}
            {" and "}
            <ParaLink
              text="Finance"
              href="#projects"
              notTarget={true}
            />
            {/* <ParaLink
              text="Finance"
              href="#projects"
              notTarget={true}
            /> */}
          </p>
        </div>
        <a className=" mt-10" href="https://drive.google.com/file/d/1ezIipDHfo_CgLPODUqdeubWFl3hnH3K0/view?usp=sharing" target="blank">
          <Button name="Resume" />
        </a>
      </section>

      <section
        id="about"
        className="mx-auto py-[75px] md:py-[100px] flex flex-col justify-center items-start max-w-[900px]"
      >
        <div className="flex w-full pb-10">
          <h1 className=" text-2xl md:text-3xl font-bold">
            <span className=" text-textSecondary font-fira text-xl md:text-2xl">
              01.
            </span>{" "}
            About Me
          </h1>
          <div
            className={` ml-6 w-[200px] h-[1px] self-center bg-textPrimary flex-1 md:flex-none`}
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[10px] lg:gap-[50px] w-full">
          <div className=" opacity-90">
            <p>
              Hello&#33; My name is Mukul, and I enjoy working with
              technologies. My interest in tech started back in 2009 when I
              had my first computer. I installed and played many computer
              games and learned a lot about computers.
            </p>
            <br />
            <p>
              Fast-forward to today. Currently, I&apos;m doing B Tech in{" "}
              <b>Civil Engineering</b> with minor in <b>Computer Science</b>{" "}
              from{" "}
              <ParaLink
                text="IIT Gandhinagar"
                href="https://iitgn.ac.in/"
              />
              . My main focus these days is learning new skills and making
              something out of them.
            </p>
            <br />
            <div>
              <p className=" mt-2">
                Here are few technologies I&apos;ve worked with -{" "}
              </p>
              <ul className="grid grid-cols-3 font-fira font-bold gap-2 pt-3 text-xs">
                {skills.map((val, ind) => {
                  return (
                    <li key={ind} className="flex">
                      <span className=" pt-[3px] pr-1 text-textSecondary">
                        <FiChevronRight />
                      </span>
                      {val}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative flex flex-col h-min">
              <div className=" flex bg-textSecondary h-min rounded-md">
                <Image
                  onMouseEnter={() => animation()}
                  onMouseLeave={() => animation()}
                  className="z-[10] rounded-md opacity-[80%] hover:opacity-[100%]"
                  width={296}
                  height={296}
                  src={"/img/mukul.jpeg"}
                  alt="mukul raj"
                />
              </div>
              <div
                ref={ref}
                className=" translate-x-5 translate-y-5 rounded-md absolute w-full h-full border-2 border-textSecondary transition-all"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto py-[75px] md:py-[100px] flex flex-col justify-center items-start max-w-[1000px]"
      >
        <div className="flex w-full pb-10">
          <h1 className=" text-2xl md:text-3xl font-bold">
            <span className=" text-textSecondary font-fira text-xl">
              02.
            </span>{" "}
            Some Projects I&apos;ve Built
          </h1>
          <div
            className={` ml-6 w-[200px] h-[1px] self-center bg-textPrimary flex-1 md:flex-none`}
          ></div>
        </div>
        {projects.map((val, ind) => {
          return <Project key={ind} project={val} isRight={ind % 2 == 0} />;
        })}
      </section>

      <section
        id="contact"
        className="mx-auto py-[75px] md:py-[100px] flex flex-col justify-center items-start max-w-[600px]"
      >
        <h3 className=" w-full flex text-textSecondary font-fira justify-center">
          <span className=" mr-1.5">03.</span>
          What&apos;s Next?
        </h3>
        <div className="flex justify-center w-full mt-4 mb-6">
          <div
            className={` hidden md:block mx-6 w-[100px] h-[1px] self-center bg-textPrimary`}
          ></div>
          <h1 className=" text-3xl md:text-4xl font-bold">Get In Touch</h1>
          <div
            className={` hidden md:block mx-6 w-[100px] h-[1px] self-center bg-textPrimary`}
          ></div>
        </div>
        <p className=" opacity-90 w-full text-center">
          Have any projects in mind or want to discuss any things? My inbox
          is always open whether you have a question or just want to say hi.
          I&apos;ll try my best to get back to you&#33;
        </p>
        <div className="flex justify-center w-full py-14">
          <a
            href="mailto:mukul.raj@iitgn.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button name="Say Hello" />
          </a>
        </div>
      </section>
    </>
  );
}

const Dot = () => {
  return (
    <div className={`absolute top-2 bg-textPrimary w-2 h-2 rounded-full`}></div>
  );
};

{
  /* <ul>
      <li className="relative">
        <Dot />
        <p className=" pl-4">I&apos;m an Indian</p>
      </li>
      <li className="relative">
        <Dot />
        <p className=" pl-4">
          Most used line of code{" "}
          <i className="rounded-sm px-1 py-0.5 opacity-75">
            git commit -m &quot;Initial Commit&quot;
          </i>
        </p>
      </li>
      <li className="relative">
        <Dot />
        <p className=" pl-4">Fun fact: I love pizza</p>
      </li>
    </ul> */
}
