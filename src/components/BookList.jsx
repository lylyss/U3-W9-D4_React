import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books, onBookSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <Form.Group style={{ marginBottom: "20px" }}>
        <Form.Control type="text" placeholder="Cerca un libro..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </Form.Group>
      <Row>
        {filteredBooks.map((book) => (
          <Col xs={12} md={4} key={book.asin}>
            <SingleBook book={book} onBookSelect={() => onBookSelect(book.asin)} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BookList;
