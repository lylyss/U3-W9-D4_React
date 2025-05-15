import SingleComment from "./SingleComment";
import { Container } from "react-bootstrap";

const CommentsList = ({ comments }) => {
  return (
    <Container className="comments-list">
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default CommentsList;
