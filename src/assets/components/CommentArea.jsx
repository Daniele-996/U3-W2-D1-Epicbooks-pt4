import { Col, Container, Row } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Component } from "react";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComment = async () => {
    if (!this.props.id) return;

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTM2NTFjMjUwNDAwMTUxYWI2YmEiLCJpYXQiOjE3NDczMTU4NDksImV4cCI6MTc0ODUyNTQ0OX0.yLPwlBGKTdgPgCr6rcn6Yzf5GM9owEQFIqSxVjnQ4LA",
          },
        }
      );
      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments });
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchComment();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchComment();
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.props.id ? (
              <>
                <CommentsList
                  comment={this.state.comments}
                  id={this.props.id}
                />
                <AddComment id={this.props.id} />
              </>
            ) : (
              <p className="text-muted">Seleziona un libro</p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
