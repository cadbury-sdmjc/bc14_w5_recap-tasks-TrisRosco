import React from "react";

//a function that returns a blog post using an object called blog

function BlogPost() {
  const blog = {
    title: "My First Blog Post (wow!)",
    author: "Reginald M. Javascpriptte III",
    datePosted: "January 1, 2020",
    content: `Take a look at this incredible critter I found in my backyard. It's a marvelous specimin, is it not!?  `,
    imageSrc: `https://i.pinimg.com/originals/4c/a3/1e/4ca31e5343e89bc550044caec29543e6.jpg`,
    imageAlt: `A picture of Reginal Javascpriptte III`,
  };

  return (
    <div>
      <h1>{blog.title}</h1>
      <h2>By {blog.author}</h2>
      <h3>Posted on {blog.datePosted}</h3>
      <img src={blog.imageSrc} alt={blog.imageAlt} />
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPost;
