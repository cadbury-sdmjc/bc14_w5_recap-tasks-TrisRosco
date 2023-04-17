import Comment from "../Comment";

function CommentList() {
  const comments = [
    {
      id: "kskBC5HZ8qgNQUiW6If6q",
      author: "Wilbur Wettes-Pantz",
      content: "Not your best work, Reginald.",
    },

    {
      id: "jFyGAKz1VsGputO1gV8xa",
      author: "Angela Pilk",
      content: "I'm not sure about this one, Reggie.",
    },
  ];

  return (
    <div>
      {comments.map((props) => (
        <Comment key={props.id} author={props.author} content={props.content} />
      ))}
    </div>
  );
}

export default CommentList;
