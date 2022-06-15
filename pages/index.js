import Image from "next/image";
import Link from "next/link";
import mukul from "../assets/images/mukul.jpeg"

export default function Home() {
  return (
    <>
      <div id="content" className="">
        <main className="px-[150px] mx-auto max-w-[1600px] w-full min-h-screen">

          <section className="min-h-screen flex flex-col justify-center items-start max-w-[1100px] mx-auto">
            <div>
              <h1>Hi, My name is</h1>
            </div>
            <div>
              <h2 className="font text-7xl font-bold">Mukul</h2>
            </div>
            <div>
              <h3 className="font text-7xl font-bold opacity-[60%]">I am full stack web developer</h3>
            </div>
            <div className="max-w-lg pt-4">
              <p>I'm Mukul Raj, a third-year undergraduate at IIT Gandhinagar. I have an interest in the fields of Software Development, Web Development, and Cyber Security.</p>
            </div>
          </section>

          <section id="about" className="mx-auto py-[100px] flex flex-col justify-center items-start max-w-[900px]">
            <div className="flex w-full">
              <h1></h1>
              <h1 className="text-xl font-bold">1. About Me</h1>
              <div className="ml-6 w-[200px] h-[1px] self-center bg-white"></div>
            </div>
            <div className="grid grid-cols-2 gap-[50px] w-full" style={{ gridTemplateColumns: "3fr 2fr" }}>
              <div>
                <p>
                  I’m an Indian
                  <br />
                  Most used line of code <i>git commit -m "Initial Commit"</i>
                  <br />
                  Fun fact: I love pizza
                </p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet, similique labore quidem corrupti quos error vel ullam eos ipsa provident nisi aut maiores cumque neque. Aspernatur non quod asperiores eum necessitatibus et qui fugit vel quidem provident illum repudiandae sed iste quas odio odit alias, natus, illo rem veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque consequuntur fuga inventore vero expedita quisquam, explicabo maiores dolor dolorum mollitia similique nostrum quasi. Magni veniam repellat similique labore nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae perspiciatis nobis aliquam voluptate nemo inventore, labore unde, distinctio repellendus at sapiente nulla voluptatem provident sequi quod voluptatum iusto, amet exercitationem!
              </div>

              <div className="flex justify-center">
                <div className="relative flex flex-col h-min rounded-md">
                  <Image className="z-[10] rounded-md opacity-[60%] hover:opacity-[100%]" width={296} height={296} src={mukul} />
                </div>
                {/* <div className="absolute border-2"></div> */}
              </div>
            </div>

          </section>


          <section className="mx-auto py-[100px] flex flex-col justify-center items-start max-w-[1000px]">
            <div className="flex w-full">
              <h1></h1>
              <h1 className="text-xl font-bold">2. Some Things I've Built</h1>
              <div className="ml-6 w-[200px] h-[1px] self-center bg-white"></div>
            </div>

            <div>

            </div>

          </section>


        </main>
      </div>
    </>
  );
}
