import Image from "next/image";
import Link from "next/link";
import mukul from "../assets/images/mukul.jpeg"
import website_alpha from "../assets/images/website_alpha.png"
import { FiGithub, FiExternalLink } from "react-icons/fi";


export default function Home({ bgColor, bgColor2, textColor }) {
  return (
    <>
      <div id="content" className={`bg-[${bgColor}] text-[${textColor}]`}>
        <main className="px-[150px] mx-auto max-w-[1600px] w-full min-h-screen">

          <section className="min-h-screen flex flex-col justify-center items-start max-w-[1100px] mx-auto">
            <div>
              <h1>Hi, My name is</h1>
            </div>
            <div className=" pt-5">
              <h2 className="font text-7xl font-bold">Mukul Raj.</h2>
            </div>
            <div className=" pt-5">
              <h3 className="font text-7xl font-bold opacity-[60%]">I am full stack web developer.</h3>
            </div>
            <div className="max-w-lg pt-5">
              <p>I&apos;m Mukul Raj, a third-year undergraduate at IIT Gandhinagar. I have an interest in the fields of Web Development, App Development, and Cyber Security.</p>
            </div>
            {/* <div className="p-20"></div> */}
          </section>


          <section id="about" className="mx-auto py-[100px] flex flex-col justify-center items-start max-w-[900px]">
            <div className="flex w-full pb-10">
              <h1></h1>
              <h1 className="text-3xl font-bold">01. About Me</h1>
              <div className={`ml-6 w-[200px] h-[1px] self-center bg-[${textColor}]`}></div>
            </div>
            <div className="grid grid-cols-2 gap-[50px] w-full" style={{ gridTemplateColumns: "3fr 2fr" }}>
              <div>
                <ul>
                  <li className="relative">
                    <Dot textColor={textColor} />
                    <p className=" pl-4">
                      I&apos;m an Indian
                    </p>
                  </li>
                  <li className="relative">
                    <Dot textColor={textColor} />
                    <p className=" pl-4">
                      Most used line of code <i className="rounded-sm px-1 py-0.5 opacity-75">git commit -m &quot;Initial Commit&quot;</i>
                    </p>
                  </li>
                  <li className="relative">
                    <Dot textColor={textColor} />
                    <p className=" pl-4">
                      Fun fact: I love pizza
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative flex flex-col h-min rounded-md">
                  <Image className="z-[10] rounded-md opacity-[60%] hover:opacity-[100%]" width={296} height={296} src={mukul} alt="mukul" />
                </div>
                {/* <div className="absolute border-2"></div> */}
              </div>
            </div>
          </section>


          <section id="projects" className="mx-auto py-[100px] flex flex-col justify-center items-start max-w-[1000px]">
            <div className="flex w-full pb-10">
              <h2></h2>
              <h1 className="text-3xl font-bold">02. Some Projects I&apos;ve Built</h1>
              <div className={`ml-6 w-[200px] h-[1px] self-center bg-[${textColor}]`}></div>
            </div>
            <div className="flex gap-[50px] w-full">
              <div className=" flex-1 z-10">
                <div className=" flex flex-col w-[141%] top">
                  <h2 className=" text-2xl font-bold">ALPHA Chat</h2>
                  <div className={`bg-[${bgColor2}] rounded-sm px-6 py-4 my-5`}>
                    <p>
                      A web app for real time texting. Make an account, add friends in your friend list, and start chatting with your friends on this platform.
                      <br />
                      <br />
                      Spectal Feature - <b>Live Typing...</b> &#40; you can also see what your friend is typing &#41;
                    </p>
                  </div>
                  <ul className="flex gap-5">
                    <li>React</li>
                    <li>Mongo DB</li>
                    <li>Express JS</li>
                    <li>Tailwind CSS</li>
                    <li>Socket.io</li>
                  </ul>
                  <div className="flex gap-4 text-xl py-5">
                    <a href="https://github.com/mk-mukul/website_alpha" target="_blank" rel="noreferrer"><FiGithub /></a>
                    <a href="https://mk-mukul.github.io/website_alpha/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
                  </div>
                </div>
              </div>
              <div className="flex justify-left">
                <div className="flex flex-col h-min self-center rounded-md">
                  <Image className="rounded-sm opacity-[60%] hover:opacity-[100%]" width={600} height={293
                  } src={website_alpha} alt="mukul" />
                </div>
              </div>
            </div>
          </section>


          <section id="contact" className="mx-auto py-[100px] flex flex-col justify-center items-start max-w-[1000px]">
            <div className="flex justify-center w-full pb-10">
              <div className={`mx-6 w-[100px] h-[1px] self-center bg-[${textColor}]`}></div>
              <h1 className="text-5xl font-bold">03. Get In Touch</h1>
              <div className={`mx-6 w-[100px] h-[1px] self-center bg-[${textColor}]`}></div>
            </div>
            <div className="flex justify-center w-full">
              <a href="mailto:mukul.raj@iitgn.ac.in" target="_blank" rel="noopener noreferrer">
                <button className=" border-2 py-2 px-8 rounded text-lg">Say Hello</button>
              </a>
            </div>
          </section>


        </main>
      </div>
    </>
  );
}

const Dot = ({ textColor }) => {
  return (
    <div className={`absolute top-2 bg-[${textColor}] w-2 h-2 rounded-full`}></div>
  )
}