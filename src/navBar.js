import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function CollapsibleNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="images.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Exchange Program
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Programs" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">High School Exchange</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ESL Short Term Program
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Interships Exchange Programs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Countries 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes"  >
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavBar;