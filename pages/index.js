import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="content">
        <main className="p px-36">
          <section className="min-h-screen flex flex-col justify-center items-start max-w-xl mx-auto">
            <div>
              <h1>Hi, My name is</h1>
            </div>
            <div>
              <h2 className="font text-7xl font-bold">Mukul</h2>
            </div>
            <div>
              <h3 className="font text-7xl font-bold">I loves coading</h3>
            </div>
            <div className="max max-w-lg mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum pariatur temporibus. Mollitia exercitationem voluptatum ducimus ut non, excepturi, quaerat dicta consequatur </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
