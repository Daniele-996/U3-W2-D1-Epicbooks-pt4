import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";

class AllTheBooks extends Component {
  state = {
    type: fantasy,
  };

  render() {
    return (
      <Container fluid>
        <div className="container d-flex gap-2 m-2">
          <Button
            variant="dark text-white"
            onClick={() => this.setState({ type: fantasy })}
          >
            Fantasy
          </Button>
          <Button
            variant="dark text-white"
            onClick={() => this.setState({ type: history })}
          >
            History
          </Button>
          <Button
            variant="dark text-white"
            onClick={() => this.setState({ type: horror })}
          >
            Horror
          </Button>
          <Button
            variant="dark text-white"
            onClick={() => this.setState({ type: romance })}
          >
            Romance
          </Button>
          <Button
            variant="dark text-white"
            onClick={() => this.setState({ type: scifi })}
          >
            Scifi
          </Button>
        </div>
        {/* <Row xs={1} sm={2} md={3} xl={4} xxl={6}>
          {this.state.type.map((book) => (
            <Col key={book.asin}>
              <Card className="my-2">
                <Card.Img className="imgClass" variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {book.title}
                  </Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="primary">Buy for ${book.price}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
      </Container>
    );
  }
}

export default AllTheBooks;
