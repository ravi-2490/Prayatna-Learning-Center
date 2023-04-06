import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "../components/teams/Teams.css";
import "../components/footer/Footer.css";
// import "../components/contact/Contact.css";
import Header from "@/components/header/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
