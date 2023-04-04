import logo from "../../../public/logo.jpg";
import HeaderItems from "./HeaderItems";
import Image from "next/image";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useState } from "react";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <section id="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <Image
              src={logo}
              height={40}
              width={40}
              className="d-inline-block align-top mx-1"
              alt="Logo"
            />
            <p className="mt-2">Praytana Learning Center</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {HeaderItems.map((item) => {
                return (
                  <Nav.Link href={item.url} key={item.id} onScroll={false}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
            <Nav className="ms-auto">
              <Button variant="outline-primary mx-1">Signup</Button>
              <Button variant="outline-primary mx-1">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
