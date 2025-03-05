import About from "./components/About";
import Aboutt from "./pages/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Blog from "./pages/Blogs";
import { Route, Routes } from "react-router-dom";
import AboutNFC from "./pages/AboutNFC";
import GestionInsta from "./pages/GestionInsta";
import Marketing from "./pages/Marketing";
import SiteWeb from "./pages/SiteWeb";
import Offers from "./components/Offers";
import Devis from "./pages/Devis";
import Stats from "./components/Stats";
import Realisations from "./pages/Realisations";
import Partners from "./components/Partners";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Offers />
              <About />
              <Partners />
            </>
          }
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/nfc" element={<AboutNFC />} />
        <Route path="/gestion-instagram" element={<GestionInsta />} />
        <Route path="/marketing-digital" element={<Marketing />} />
        <Route path="/site-web" element={<SiteWeb />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/about" element={<Aboutt />} />
        <Route path="/realisation" element={<Realisations />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
