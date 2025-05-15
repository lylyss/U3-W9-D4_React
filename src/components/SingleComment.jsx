const SingleComment = ({ comment }) => {
  return (
    <div className="single-comment">
      <p>
        <strong>{comment.author}</strong>: {comment.comment}
      </p>
      <p>Rating: {comment.rate}/5</p>
    </div>
  );
};

export default SingleComment;
