import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  console.log("Selected Book:", selectedBook);
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Container>
          <h1 className="mb-4">Book List</h1>
          <BookList books={fantasy} onBookSelect={setSelectedBook} />
          {selectedBook && <CommentArea bookId={selectedBook} />}
        </Container>
      </Container>
      <MyFooter />
    </>
  );
};

export default App;
