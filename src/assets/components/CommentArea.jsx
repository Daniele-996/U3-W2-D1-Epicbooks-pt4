import { Col, Container, Row } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Component } from "react";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComment = async () => {
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
        this.setState({ comments }, () => {
          // console.log(comments);
          // this.state.comments.map((comment) => {
          //   /*console.log(comment)*/
          // });
          // console.log(this.state);
        });
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
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <CommentsList comment={this.state.comments} id={this.props.id} />
              <AddComment id={this.props.id} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default CommentArea;
