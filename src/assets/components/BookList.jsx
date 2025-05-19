import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Component } from "react";

class BookList extends Component {
  // console.log("Books", props);

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="col-8">
            <Row>
              {this.props.books.map((book) => (
                <Col xs={12} sm={8} md={4} lg={4} key={book.asin}>
                  <SingleBook
                    key={book.asin}
                    book={book}
                    cardImg={book.img}
                    cardTitle={book.title}
                    cardPrice={book.price}
                    cardId={book.asin}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col className="col-4">
            <CommentArea />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
