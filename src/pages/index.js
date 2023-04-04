import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Teams from "@/components/teams/Teams";

const Index = () => {
  return (
    <>
      <Header />
      <Banner />
      <Teams />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
