import { useState } from "react";


export default function Blog() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(e){
    e.preventDefault() 

   const blog = {title,author,text}
   console.log(blog)
  }

  return (
    <div>
      <h1>Blog</h1>
  
      <form className="inputs-box" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button>publish</button>
      </form>
      <div className="article">
        <h2>{title}</h2>
        <h5>{author}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}
