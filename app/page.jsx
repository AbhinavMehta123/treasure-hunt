import Arena from "@/components/Arena";
import Beyond from "@/components/Beyond";
import Characters from "@/components/Characters";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shop from "@/components/Shop";


export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <Characters/>
    <Arena/>
    <Beyond/>
    <Shop/>
    <Footer/>
   </div>
  );
}
