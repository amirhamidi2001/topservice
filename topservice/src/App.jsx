import { useEffect } from "react";
import AOS from "aos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProperties from "./components/FeaturedProperties";
import FeaturedServices from "./components/FeaturedServices";
// import FeaturedAgents from "./components/FeaturedAgents";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
// import RecentBlog from "./components/RecentBlog";
import CallToAction from "./components/CallToAction";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";

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
      {/* <FeaturedAgents /> */}
      <Testimonials />
      <WhyUs />
      {/* <RecentBlog />/ */}
      <CallToAction />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;