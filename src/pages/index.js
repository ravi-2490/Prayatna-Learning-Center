import About from "@/components/about/About";
import Advertisment from "@/components/advertisment/Advertisment";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Gallery from "@/components/gallery/Gallery";
import Teams from "@/components/teams/Teams";
import Testimonial from "@/components/testimonial/Testimonial";
import Head from "next/head";
const Index = () => {
  return (
    <>
      <Head>
        <title>Prayatna Learning Center</title>
        <meta name="title" content="Prayatna Learning Center" />
        <meta
          name="description"
          content="Best coaching center for the pre-school,high school,class-10,first PUC,second PUC,JEE mains,JEE advance,NATA and K-CET. We give one to one mentorship to all our student and also provide full assistance on the overall development of the student."
        />
        <meta name="keywords" content="best,best coaching center,PUC,K-CET" />
        <meta
          name="author"
          content="Ashwin kumar,Deepshikha Sharma and Ravi kumar"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Advertisment />
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
