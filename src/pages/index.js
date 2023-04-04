import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Teams from "@/components/teams/Teams";

const Index = () => {
  return (
    <>
      <Banner />
      <Teams />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
