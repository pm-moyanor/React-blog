import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Blog from "./Blog";
import BlogList from "./BlogList";
import posts from "./data";

export default function Home() {
  return (
   <div>
      {/* <Blog /> */}
      <BlogList posts={posts}/>
   </div>

    
  );
}
