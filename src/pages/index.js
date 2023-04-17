import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Gallery from "@/components/gallery/Gallery";
import Teams from "@/components/teams/Teams";
import Testimonial from "@/components/testimonial/Testimonial";

const Index = () => {
  return (
    <>
      <Banner />
      <Teams />
      <About />
      <Gallery />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Index;
