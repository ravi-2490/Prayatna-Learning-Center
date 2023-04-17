import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import "../components/teams/Teams.css";
import "../components/footer/Footer.css";
import Header from "@/components/header/Header";

import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </>
  );
}
