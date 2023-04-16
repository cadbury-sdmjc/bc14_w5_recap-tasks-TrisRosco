import React from "react";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import BlogPost from "../BlogPost";

function App() {
  return (
    <div>
      <CommentList />
      <CommentForm />
      <BlogPost />
    </div>
  );
}

export default App;
