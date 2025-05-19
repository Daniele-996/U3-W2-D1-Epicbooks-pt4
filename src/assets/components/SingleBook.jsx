import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        className={`border-4   ${this.state.selected ? "border-dark" : ""}`}
      >
        <Card.Img
          className="imgClass"
          variant="top"
          src={this.props.cardImg}
          onClick={() => this.setState({ selected: !this.state.selected })}
        />
        <Card.Body>
          <Card.Title className="text-truncate">
            {this.props.cardTitle}
          </Card.Title>
          <Card.Text>{}</Card.Text>
          <Button variant="primary">
            Compra Ora a ${this.props.cardPrice}
          </Button>
          {/* {this.state.selected && <CommentArea id={this.props.cardId} />} */}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
