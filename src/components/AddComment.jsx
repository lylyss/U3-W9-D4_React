import { useState } from "react";

const AddComment = ({ bookId, onCommentAdded }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      comment,
      rate,
      elementId: bookId,
    };

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZjMFlYmU4MjAwMTUwOWYzMjQiLCJpYXQiOjE3NDczMTc0OTEsImV4cCI6MTc0ODUyNzA5MX0.RvlheLp-mP_qB4t8n1Z_V613km7395Hs3aXIdSMAVMI",
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        const addedComment = await response.json();
        onCommentAdded(addedComment);
        setComment("");
        setRate(1);
      } else {
        console.error("Error adding comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment" onClick={(e) => e.stopPropagation()}>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Condividi la tua opinione" required />
      <select value={rate} onChange={(e) => setRate(e.target.value)}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default AddComment;
