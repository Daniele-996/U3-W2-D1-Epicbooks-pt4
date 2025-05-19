import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const MyNav = function () {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xl={12} lg={12}>
            <Navbar bg="dark" data-bs-theme="dark">
              <Container>
                <Navbar.Brand href="#home">MyLibrary</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#Home">Home</Nav.Link>
                  <Nav.Link href="#About">About</Nav.Link>
                  <Nav.Link href="#Browse">Browse</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyNav;
