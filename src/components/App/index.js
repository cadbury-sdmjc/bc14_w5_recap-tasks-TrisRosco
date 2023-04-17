import React from "react";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import Comment from "../Comment";
import BlogPost from "../BlogPost";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState(0);

  function onSubmit(author, content) {
    const newComment = {
      id: commentId,
      author: author,
      content: content,
    };
    setComments([...comments, newComment]);
    newCommentId();
  }

  function newCommentId() {
    setCommentId(commentId + 1);
  }

  return (
    <div>
      <BlogPost />
      <CommentList comments={comments} />
      <CommentForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
