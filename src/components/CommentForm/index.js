import React from "react";

import { useState } from "react";

function CommentForm(props) {
  const [author, setAuthor] = useState("Anon Author");
  const [content, setContent] = useState("");

  function onSubmit() {
    if (content !== "") {
      props.onSubmit = { author, content };
      setContent("");
    } else {
      return null;
    }
  }

  return (
    <div>
      <label>Author</label>
      <input
        type="text"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      />
      <label>Comment</label>
      <input
        type="text"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default CommentForm;
