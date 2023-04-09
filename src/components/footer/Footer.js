import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faQuora,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Applogo from "../applogo/Applogo";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container">
          <div className="sec aboutus">
            <h2>About us</h2>
            <p>
              Prayatna Learning Center is located in IT Hub, Bengaluru. It is
              one of the most loved centre for learning. We cater coaching and
              tuitions for classes starting from Nursery to 12th Standard. It
              was founded by Engineers and lecturers in 2017 with a vision to
              make learning easy and fun.{" "}
            </p>
            <ul className="sci">
              <li>
                <a
                  href="https://www.facebook.com/people/Prayatna-Learning-Centre/100064719037655/?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="icons"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  {/* <FaFacebook className="icons" /> */}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ashwin-kumar-12ba5495/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="icons"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  {/* <FaLinkedinIn className="icons" /> */}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/7204279330?text=Hi%20I%20am%20looking%20for%20enquiry%20Please%20Connect%20with%20me.%20Thankyou."
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="icons"
                    icon={faWhatsapp}
                  ></FontAwesomeIcon>
                  {/* <FaWhatsapp className="icons" /> */}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    className="icons"
                    icon={faQuora}
                  ></FontAwesomeIcon>
                  {/* <FaQuora className="icons" /> */}
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Quick Links</h2>
            <ul className="qlinklist">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Term & Condition</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec contacts">
            <h2>Contact info</h2>
            <ul className="info">
              <li>
                <span>
                  <FontAwesomeIcon icon={faMapMarker} />
                </span>
                <span>
                  2B Akshaya Nagar <br /> Rammurthy Nagar <br /> Flower Garden
                  Layout, Bangalore <br /> India, Bengaluru <br /> Karnataka
                  560016
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <p>
                  <a href="tel:7204279330">+91-7204279330</a>
                  <br />
                  <a href="tel:7795199849">+91-7795199849</a>
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <p>
                  <a
                    href="mailto:plearningcenter17@gmail.com"
                    className="mailId"
                  >
                    plearningcenter17@gmail.com
                  </a>
                </p>
              </li>
              <li className="applogo">
                <Applogo />
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrighttext">
        <p>Copyright @ 2023 Prayatna Learning Center. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
