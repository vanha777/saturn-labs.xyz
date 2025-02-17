import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Timeline from "./components/timeline";
import Credential from "./components/credential";
import PaymentBox from "./components/payment";
import Timer from "./components/timer";
import Consumer from "./components/consumer";
import NavBar from "./components/navBar";
import MainPage from "./components/ui/mainpage";
import Footer from "./components/ui/footer";
import ThreeCanvas from "./components/3d/canvas";
import MainPage2 from "./components/ui/mainPage2";
import Navbar from "./components/ui/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between screen-max-width bg-black overflow-y-hidden">
        <Navbar />
      <div className="relative z-10 w-full"> {/* Keep this div with z-index 10 */}
        <MainPage2/>
        <div className="relative">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
            >
                <source src="/consumers.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10">
                <Consumer />
                <Footer />
            </div>
        </div>
        {/* <About /> */}
        {/* <Timer/> */}
        {/* <Credential /> */}

        {/* <Timeline /> */}
        {/* <PaymentBox /> */}
      </div>
    </div>
  );
}
