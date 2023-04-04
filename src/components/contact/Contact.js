import {
  FaMap,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import styles from "../../styles/Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [enquiryDetails, setEnquiryDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEnquiryDetails({ ...enquiryDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enquiryDetails);
    setEnquiryDetails({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <section id="contactus" className={styles.contactBody}>
      <div className={styles.contactUs}>
        <div className={styles.title}>
          <h2>Get In Touch</h2>
        </div>
        <div className={styles.box}>
          {/* form box */}
          <div className={`${styles.contact} ${styles.form}`}>
            <h3>Send a Message</h3>
            <form method="post" action="/" onSubmit={handleSubmit}>
              <div className={styles.formBox}>
                <div className={styles.row50}>
                  <div className={styles.inputBox}>
                    <span>First Name</span>
                    <input
                      type="text"
                      placeholder="Aswin"
                      name="firstName"
                      value={enquiryDetails.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <span>Last Name</span>
                    <input
                      type="text"
                      placeholder="Kumar"
                      name="lastName"
                      value={enquiryDetails.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.row50}>
                  <div className={styles.inputBox}>
                    <span>Email</span>
                    <input
                      type="text"
                      placeholder="aswin@gmail.com"
                      name="email"
                      value={enquiryDetails.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <span>Mobile</span>
                    <input
                      type="text"
                      placeholder="+91 734 456 7728"
                      name="mobile"
                      value={enquiryDetails.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.row100}>
                  <div className={styles.inputBox}>
                    <span>Message</span>
                    <textarea
                      placeholder="write your message here..."
                      name="message"
                      value={enquiryDetails.message}
                      onInput={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className={styles.row100}>
                  <div className={styles.inputBox}>
                    <input type="submit" value="send" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* info box */}
          <div className={`${styles.contact} ${styles.info}`}>
            <div className={styles.contactTitle}>
              <h3>Contact Info</h3>
            </div>
            <div className={styles.infoBox}>
              <div>
                <span>
                  <FaMap />
                </span>
                <p>Rammurthy Nagar,Bangalore,India</p>
              </div>

              <div>
                <span>
                  <FiMail />
                </span>
                <a href="mailto:ashkumar006@gmail.com">ashkumar006@gmail.com</a>
              </div>

              <div>
                <span>
                  <AiFillPhone />
                </span>
                <a href="tel:+917204279330">+91-720-427-9330</a>
              </div>
              {/* social media links */}
              <ul className={styles.social}>
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* map box */}
          <div className={`${styles.contact} ${styles.map}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62195.552891884196!2d77.6720576837939!3d13.021526612309213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPrayatna%20learning%20center!5e0!3m2!1sen!2sin!4v1680482688136!5m2!1sen!2sin"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
