import About from "./components/about";
import Consumer from "./components/consumer";
import ContactPage from "./components/contact";
import Footer from "./components/ui/footer";
import MainPage2 from "./components/ui/mainPage2";
import Navbar from "./components/ui/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between screen-max-width bg-black overflow-y-hidden">
      <Navbar />
      <div className="relative z-10 w-full"> {/* Keep this div with z-index 10 */}
        <MainPage2 />
        <Consumer />
        <div className="relative">
          <img
            src="/consumer.jpg"
            alt="Consumer background"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10">
            <div id="about">
            <About/>
            </div>
          </div>
        </div>
        {/* <ContactPage/> */}
        <Footer />
        <div id="contact"/>
      </div>
    </div>
  );
}
