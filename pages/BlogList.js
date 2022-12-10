import { useState } from "react";

const BlogList = ({ posts }) => {
  const nameArray = [
    "Leanne Graham",
    "Nicholas Runolhill ",
    "Kurtis Weissnat",
    "Romaguera Crona",
    "Ervin Howell",
    "Deckow-Crist",
    "Romaguera Jacobson",
    "Robel Corkery",
    "Chelsey Dietrich",
    "Leopoldo Corkery",
  ];



  let newArray = posts.map((post) => ({ ...post, name: nameArray.shift() }));
  const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date();
  const postdate = date.toLocaleDateString(undefined, options);

  return (
    <>
      <h1>Latest Posts</h1>
      
        {newArray.map((post) => {
          return (
            <ul className="blog-list">
            <ul className="post-box">
              <li className="post-title">{post.title}</li>
              <hr className="solid"></hr>
              <li className="post-author">By <a className="author-link" href="https://www.google.com/">{post.name}</a> on {postdate}</li>
              <hr className="solid"></hr>
              <li className="post-body">{post.body}</li>
              <button className="more-btn">more</button>
            </ul>
            
            </ul>
          );
        })}
      
    </>
  );
};

export default BlogList;
