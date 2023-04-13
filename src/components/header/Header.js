import styles from "../../styles/Header.module.css";
import logo from "../../../public/logo.jpg";
import HeaderItems from "./HeaderItems";
import Image from "next/image";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { useState } from "react";

import { BsFillTelephoneFill } from "react-icons/bs";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <section id="header">
      <Navbar bg="light" expand="lg">
        <Container className={styles.navContainer}>
          <Navbar.Brand href="/" className="d-flex">
            <Image
              src={logo}
              height={40}
              width={40}
              className={styles.brandLogo}
              alt="Logo"
            />
            <p className={styles.brandName}>
              Praytana Learning <span>Center</span>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.toggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {HeaderItems.map((item) => {
                if (item.title === "Services") {
                  return (
                    <NavDropdown title="Services" key={item.id}>
                      {item.content.map((service) => {
                        return (
                          <NavDropdown.Item href={service.url} key={service.id}>
                            {service.name}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  );
                } else {
                  return (
                    <Nav.Link href={item.url} key={item.id} onScroll={false}>
                      {item.title}
                    </Nav.Link>
                  );
                }
              })}
            </Nav>
            <BsFillTelephoneFill className={styles.vibratingPhoneIcon} />{" "}
            +91-7204279330
            <Nav className="ms-auto">
              <Button variant="outline-primary mx-1" href="">
                Signup
              </Button>
              <Button variant="outline-primary mx-1" href="/">
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
