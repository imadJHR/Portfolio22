import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import {  ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Pricing/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
