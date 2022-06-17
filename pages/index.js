import Image from "next/image";
import Link from "next/link";
import mukul from "../assets/images/mukul.jpeg";
import website_alpha from "../assets/images/website_alpha.png";
import { FiGithub, FiExternalLink, FiChevronRight } from "react-icons/fi";

export default function Home({ skills, theme, themes, setTheme }) {
  const changeTheme = () => {
    for (let i = 0; i < themes.length; i++) {
      const code = themes[i].code;
      if (code == theme) {
        (i >= themes.length - 1) ? setTheme(themes[0].code) : setTheme(themes[i + 1].code);
      }
    }
  }
  return (
    <>
      <div id="content" className={`bg-bgPrimary text-textPrimary`}>
        <main className="px-[150px] mx-auto max-w-[1600px] w-full min-h-screen">
          <section className="min-h-screen flex flex-col justify-center items-start max-w-[1060px] mx-auto">
            <div>
              <h1 className=" font-fira text-textSecondary">Hi, My name is</h1>
            </div>
            <div className=" pt-5">
              <h2 className="font text-7xl font-bold">Mukul Raj.</h2>
            </div>
            <div className=" pt-5">
              <h3 className="font text-7xl font-bold opacity-[60%]">
                I am full stack web developer.
              </h3>
            </div>
            <div className="max-w-lg pt-6">
              <p>
                I&apos;m Mukul Raj, a third-year undergraduate at IIT
                Gandhinagar. I have an interest in the fields of Web
                Development, App Development, and Cyber Security.
              </p>
            </div>
            <a
              className=" mt-14 bg-textSecondary"
              onClick={() => changeTheme()}
            >
              <button className=" border-[1px] bg-bgPrimary hover:opacity-95 py-3 px-5 border-textSecondary text-textSecondary font-fira rounded text-lg">
                Change Theme
              </button>
            </a>
          </section>

          <section
            id="about"
            className="mx-auto py-[100px] flex flex-col justify-center items-start max-w-[900px]"
          >
            <div className="flex w-full pb-10">
              <h1></h1>
              <h1 className="text-3xl font-bold">
                <span className=" text-textSecondary font-fira text-2xl">
                  01.
                </span>{" "}
                About Me
              </h1>
              <div
                className={`ml-6 w-[200px] h-[1px] self-center bg-textPrimary`}
              ></div>
            </div>
            <div
              className="grid grid-cols-2 gap-[50px] w-full"
              style={{ gridTemplateColumns: "3fr 2fr" }}
            >
              <div>
                Hello&#33; My name is Mukul, and I enjoy working with technologies. My interest in tech started back in 2009 when I had my first computer. I installed and played many computer games and learned a lot about computers.
                <br />
                <br />
                Fast-forward to today. Currently, I&apos;m doing B Tech in <b>Civil Engineering</b> with minor in <b>Computer Science</b> from <a className=" text-textSecondary" href="https://iitgn.ac.in/" target="_blank" rel="noopener noreferrer">IIT Gandhinagar</a>. My main focus these days is learning new skills and making something out of them.
                <br />
                {/* <br /> */}
                {/* <ul>
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
                </ul> */}
                <div>
                  <h3 className=" mt-5">Here are few technologies I&apos;ve worked with - </h3>
                  <ul className="grid grid-cols-3 font-fira gap-2 pt-3 text-sm">
                    {
                      skills.map((val) => {
                        return (
                          <li key={val} className="flex"><span className=" pt-[3px] pr-1 text-textSecondary"><FiChevronRight /></span><p className="">{val}</p></li>
                        )
                      })
                    }

                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative flex flex-col h-min rounded-md bg-textSecondary">
                  <Image
                    className="z-[10] rounded-md opacity-[80%] hover:opacity-[100%]"
                    width={296}
                    height={296}
                    src={mukul}
                    alt="mukul"
                  />
                </div>
                {/* <div className="absolute border-2"></div> */}
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="mx-auto py-[100px] flex flex-col justify-center items-start max-w-[1000px]"
          >
            <div className="flex w-full pb-10">
              <h2></h2>
              <h1 className="text-3xl font-bold">
                <span className=" text-textSecondary font-fira text-2xl">
                  02.
                </span>{" "}
                Some Projects I&apos;ve Built
              </h1>
              <div
                className={`ml-6 w-[200px] h-[1px] self-center bg-textPrimary`}
              ></div>
            </div>
            <div className="flex gap-[50px] w-full">
              <div className=" flex-1 z-10">
                <div className=" flex flex-col w-[141%] top">
                  <h2 className=" text-2xl font-bold">ALPHA Chat</h2>
                  <div className={`bg-bgSecondary rounded-sm px-6 py-4 my-5`}>
                    <p>
                      A web app for real time texting. Make an account, add
                      friends in your friend list, and start chatting with your
                      friends on this platform.
                      <br />
                      <br />
                      PS - <b>Live Typing...</b> &#40; you can also
                      see what your friend is typing &#41;
                    </p>
                  </div>
                  <ul className="flex gap-5">
                    <li>React</li>
                    <li>Mongo DB</li>
                    <li>Express JS</li>
                    <li>Tailwind CSS</li>
                    <li>Socket.io</li>
                  </ul>
                  <div className="flex gap-1 text-xl py-3">
                    <a
                      className=" hover:text-textSecondary p-2"
                      href="https://github.com/mk-mukul/website_alpha"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub />
                    </a>
                    <a
                      className=" hover:text-textSecondary p-2"
                      href="https://mk-mukul.github.io/website_alpha/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-left">
                <a className="flex flex-col h-min self-center rounded-md cursor-pointer bg-textSecondary" href="https://mk-mukul.github.io/website_alpha/" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="rounded-sm opacity-[80%] hover:opacity-[100%]"
                    width={600}
                    height={293}
                    src={website_alpha}
                    alt="mukul"
                  />
                </a>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="mx-auto py-[100px] flex flex-col justify-center items-start max-w-[600px]"
          >
            <h3 className=" w-full flex justify-center"><span className=" text-textSecondary font-fira mr-1.5">03.</span>What&apos;s Next?</h3>
            <div className="flex justify-center w-full mt-4 mb-6">
              <div
                className={`mx-6 w-[100px] h-[1px] self-center bg-textPrimary`}
              ></div>
              <h1 className="text-4xl font-bold">Get In Touch</h1>
              <div
                className={`mx-6 w-[100px] h-[1px] self-center bg-textPrimary`}
              ></div>
            </div>
            <div className="flex w-full justify-center text-center">
              Have any projects in mind or want to discuss any things? My inbox is always open whether you have a question or just want to say hi. I&apos;ll try my best to get back to you&#33;
            </div>
            <div className="flex justify-center w-full py-14">
              <a
                className=" bg-textSecondary"
                href="mailto:mukul.raj@iitgn.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" border-[1px] bg-bgPrimary hover:opacity-95 py-3 px-5 border-textSecondary text-textSecondary font-fira rounded text-lg">
                  Say Hello
                </button>
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
