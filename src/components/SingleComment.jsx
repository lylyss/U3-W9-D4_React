import { Container } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  return (
    <Container className="single-comment">
      <p>
        <strong>{comment.author}</strong>: {comment.comment}
      </p>
      <p>Rating: {comment.rate}/5</p>
    </Container>
  );
};

export default SingleComment;
