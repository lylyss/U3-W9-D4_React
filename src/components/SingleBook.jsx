import { useState } from "react";
import CommentArea from "./CommentArea";
import { Card, Row } from "react-bootstrap";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Row className="g-2">
      <Card className={`single-book ${selected ? "selected" : ""}`} onClick={() => setSelected(!selected)}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <p>{book.price}€</p>
          {selected && <CommentArea bookId={book.asin} />}
        </Card.Body>
      </Card>
    </Row>
  );
};

export default SingleBook;
