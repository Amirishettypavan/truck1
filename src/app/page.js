import Image from "next/image";
import Navbar from "./Components/Navbar";

import Main from "./pages/Main";
import About from "./pages/About";
import Footer from "./Components/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Servies";


export default function Home() {
  return (
    <div> 
   <Navbar/>
    <Main/>
    <About/>
    <Services/>
    <Contact/>
   <Footer/>
    
  </div>
   
  );
}
