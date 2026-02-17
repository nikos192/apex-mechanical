import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import TrustBand from "./components/TrustBand.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import About from "./components/About.jsx";
import Reviews from "./components/Reviews.jsx";
import CTA from "./components/CTA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustBand />
        <WhyChoose />
        <About />
        <Reviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
