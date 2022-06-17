import Image from "next/image";
import { FiGithub, FiExternalLink, FiChevronRight } from "react-icons/fi";
import Button from "../components/Button";
import ParaLink from "../components/ParaLink";

export default function Home({ skills, theme, themes, setTheme }) {
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
      <div id="content" className={`bg-bgPrimary text-textPrimary`}>
        <main className=" px-[16px] md:px-[100px] lg:px-[150px] mx-auto max-w-[1600px] w-full min-h-screen">
          <section className="min-h-screen flex flex-col gap-3 lg:gap-4 justify-center items-start max-w-[1060px] mx-auto">
            <div>
              <h1 className=" font-fira text-textSecondary">Hi, My name is</h1>
            </div>
            <div className="">
              <h2 className=" text-4xl md:text-6xl lg:text-7xl font-bold">
                Mukul Raj.
              </h2>
            </div>
            <div className="">
              <h3 className=" text-4xl md:text-5xl lg:text-7xl font-bold opacity-[60%]">
                I am full stack web developer.
              </h3>
            </div>
            <div className=" max-w-lg opacity-90">
              <p>
                I&apos;m Mukul Raj, a third-year undergraduate at IIT
                Gandhinagar. I have an interest in the fields of{" "}
                <ParaLink
                  text="Web Development"
                  href="https://mk-mukul.github.io/website_alpha/"
                />
                {", "}
                <ParaLink
                  text="App Development"
                  href="https://github.com/mk-mukul/shoppily"
                />
                , and Cyber Security.
              </p>
            </div>
            <a className=" mt-10" onClick={() => changeTheme()}>
              <Button name="Change Theme" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[10px] lg:gap-[50px] w-full" >
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
                    {skills.map((val) => {
                      return (
                        <li key={val} className="flex">
                          <span className=" pt-[3px] pr-1 text-textSecondary">
                            <FiChevronRight />
                          </span>
                          <p className="">{val}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative flex flex-col h-min rounded-md bg-textSecondary">
                  <Image
                    className="z-[10] rounded-md opacity-[80%] hover:opacity-[100%]"
                    width={296}
                    height={296}
                    src={"/img/mukul.jpeg"}
                    alt="mukul"
                  />
                </div>
                {/* <div className="absolute border-2"></div> */}
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
            <div className="grid md:grid-cols-3 bg-[url('/img/websiteAlpha.png')] rounded-md bg-center md:bg-none" >
              <div className=" z-10 flex flex-col float-right md:w-[160%] rounded-md shadow-md md:shadow-none hover:shadow p-2 md:hover:shadow-none bg-bgPrimary md:bg-transparent opacity-90 md:opacity-100">
                <h2 className=" text-xl md:text-2xl font-bold">ALPHA Chat</h2>
                <div className={`bg-bgSecondary rounded-sm px-3 md:px-6 py-2 md:py-4 my-5`}>
                  <p>
                    A web app for real time texting. Make an account, add
                    friends in your friend list, and start chatting with your
                    friends on this platform.
                  </p>
                  <br />
                  <p>
                    PS - <b>Live Typing...</b> &#40; you can also see what
                    your friend is typing &#41;
                  </p>
                </div>
                <ul className="flex flex-wrap font-fira font-bold text-xs gap-y-1 gap-x-4">
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                  <li>Socket.io</li>
                </ul>
                <div className="flex gap-1 text-xl py-3 ">
                  <a
                    className=" text-textSecondary p-2 hover:translate-y-[-4px] transition-all"
                    href="https://github.com/mk-mukul/website_alpha"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a
                    className=" text-textSecondary p-2 hover:translate-y-[-4px] transition-all"
                    href="https://mk-mukul.github.io/website_alpha/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className=" hidden md:flex md:justify-end md:col-span-2 ">
                <a
                  className="flex flex-col h-min self-center rounded-md cursor-pointer bg-textSecondary"
                  href="https://mk-mukul.github.io/website_alpha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="rounded-sm opacity-[80%] hover:opacity-[100%]"
                    width={600}
                    height={293}
                    src={"/img/websiteAlpha.png"}
                    alt="mukul"
                  />
                </a>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="mx-auto py-[75px] md:py-[100px] flex flex-col justify-center items-start max-w-[600px]"
          >
            <h1 className=" w-full flex text-textSecondary font-fira justify-center">
              <span className=" mr-1.5">03.</span>
              What&apos;s Next?
            </h1>
            <div className="flex justify-center w-full mt-4 mb-6">
              <div
                className={` hidden md:block mx-6 w-[100px] h-[1px] self-center bg-textPrimary`}
              ></div>
              <h2 className=" text-3xl md:text-4xl font-bold">Get In Touch</h2>
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
        </main>
      </div>
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
