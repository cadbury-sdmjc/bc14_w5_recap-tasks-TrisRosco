function CommentList() {
  const comments = [
    {
      id: "kskBC5HZ8qgNQUiW6If6q",
      asuthor: "Wilbur Wetblankette",
      content: "Not your best work, Reginald.",
    },

    {
      id: "jFyGAKz1VsGputO1gV8xa",
      auther: "Angela Wilkes",
      content: "I'm not sure about this one, Reggie.",
    },
  ];

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          content={comment.content}
        />
      ))}
    </div>
  );
}

export default CommentList;
