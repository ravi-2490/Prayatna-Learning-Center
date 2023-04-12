import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import "../components/teams/Teams.css";
import "../components/footer/Footer.css";
// import "../components/contact/Contact.css";
import Header from "@/components/header/Header";
import { SSRProvider } from "@react-aria/ssr";
export default function App({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Header />
        <Component {...pageProps} />
        <ToastContainer />
      </SSRProvider>
    </>
  );
}
