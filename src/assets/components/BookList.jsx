import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Component } from "react";

class BookList extends Component {
  state = {
    selectedAsin: "",
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedAsin !== this.state.selectedAsin) {
      console.log("Libro selezionato:", this.state.selectedAsin);
    }
  }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="col-8">
            <Row>
              {this.props.books.map((book) => (
                <Col xs={12} sm={8} md={4} lg={4} key={book.asin}>
                  <SingleBook
                    book={book}
                    onBookSelect={this.handleBookSelect}
                    isSelected={this.state.selectedAsin === book.asin}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col className="col-4">
            <CommentArea id={this.state.selectedAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
