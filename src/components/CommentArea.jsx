import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZjJmMzFlYmU4MjAwMTUwOWYzMjQiLCJpYXQiOjE3NDczMTc0OTEsImV4cCI6MTc0ODUyNzA5MX0.RvlheLp-mP_qB4t8n1Z_V613km7395Hs3aXIdSMAVMI",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          console.error("Errore nel recupero dei commenti");
        }
      } catch (error) {
        console.error("Errore:", error);
      }
    };

    fetchComments();
  }, [bookId]);

  return (
    <div className="comment-area">
      <CommentsList comments={comments} />
      <AddComment bookId={bookId} onCommentAdded={(newComment) => setComments([...comments, newComment])} />
    </div>
  );
};

export default CommentArea;
