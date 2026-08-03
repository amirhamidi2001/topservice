import { Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProperties from "./components/FeaturedProperties";
import FeaturedServices from "./components/FeaturedServices";
import WhyUs from "./components/WhyUs";
import CallToAction from "./components/CallToAction";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";

// Swiper (used only inside Testimonials) is relatively heavy, so it's split
// into its own chunk and loaded once the section is about to be rendered.
const Testimonials = lazy(() => import("./components/Testimonials"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-indigo-50">
      <Header />
      <Hero />
      <About />
      <FeaturedProperties />
      <FeaturedServices />
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <WhyUs />
      <CallToAction />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
