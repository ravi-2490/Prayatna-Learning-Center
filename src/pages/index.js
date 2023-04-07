import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Teams from "@/components/teams/Teams";

const Index = () => {
  return (
    <>
      <Banner />
      <Teams />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
