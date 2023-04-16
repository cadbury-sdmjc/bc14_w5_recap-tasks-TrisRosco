function Comment(props) {
  const { author, content } = props;

  const initials = author
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <div>
      <h3>{author}</h3>
      <p>{content}</p>
      <div className="ID">{initials}</div>
    </div>
  );
}

// return null;

export default Comment;
