import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <><br /><Navbar bg="light" expand="lg" className=' container-fluid'>
      <Container fluid>
        <Navbar.Brand href="/"><img src='./logo.png' alt='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/order">order</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                order status
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                payment
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
                 About us
            </Nav.Link>
            <Nav.Link href="/menu" >
                 Menu
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" />
            <Button variant="outline-success " bg='primary'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  );
}

export default Navigation;