import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = ({ book, onBookSelect, isSelected }) => {
  return (
    <Card
      className={`mb-3 border-4 ${isSelected ? "border-dark" : ""}`}
      onClick={() => onBookSelect(book.asin)}
    >
      <Card.Img
        variant="top"
        src={book.img}
        className="imgClass"
        style={{ cursor: "pointer" }}
      />
      <Card.Body>
        <Card.Title className="text-truncate">{book.title}</Card.Title>
        <Button variant="primary">Compra ora a ${book.price}</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
