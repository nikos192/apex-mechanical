import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import About from "./components/About.jsx";
import Reviews from "./components/Reviews.jsx";
import CTA from "./components/CTA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-mesh">
      <Navbar />
      <main>
        <Hero />
        <Services />
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
