import Headtag from "../components/Headtag";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  let bgColor = "bg-slate-700";
  return (
    <>
      <Headtag />
      <div className=" bg-slate-700 text-gray-100">
        <Navbar bgColor={bgColor}/>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
