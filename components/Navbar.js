import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
export default function NavbarItem() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"> {"< {{ AYRTON ZAMARIAN}} />"}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://linkedin.com/in/ayrton-zamarian-8a0aa0214">Linkedin</Nav.Link>
              <Nav.Link href="https://gitlab.com/ayrtonzama">Gitlab</Nav.Link>
              <Nav.Link href="https://github.com/ayrtonzama">Github</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
