import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: this.props.id,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTM2NTFjMjUwNDAwMTUxYWI2YmEiLCJpYXQiOjE3NDczMTU4NDksImV4cCI6MTc0ODUyNTQ0OX0.yLPwlBGKTdgPgCr6rcn6Yzf5GM9owEQFIqSxVjnQ4LA",
      },
    });
  };

  render() {
    return (
      <>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Commenta qui.."
              value={this.state.comment}
              onChange={(e) => this.setState({ comment: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="rate">
            <Form.Select
              aria-label="Rate"
              value={this.state.rate}
              onChange={(e) => this.setState({ rate: e.target.value })}
              required
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" variant="info">
            Invia
          </Button>
        </Form>
      </>
    );
  }
}
export default AddComment;
