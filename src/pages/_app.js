import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import "../components/teams/Teams.css";
import "../components/footer/Footer.css";
import Header from "@/components/header/Header";

import Footer from "@/components/footer/Footer";
import Head from "next/head";

import { Provider } from "react-redux";
import store from "../../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </Provider>
    </>
  );
}
