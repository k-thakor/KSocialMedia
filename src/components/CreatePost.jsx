import { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import { PostListContext } from "../store/post-list-store";
const CreatePost = ({setSelectedTab}) => {

  const userIdElement =useRef();
  const postTitleElement =useRef();
  const postBodyElement =useRef();
  const reactionsElement =useRef();
  const tagsElement =useRef();

  const {addPost} =useContext(PostListContext);
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=(tagsElement.current.value).split(" ");


    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postTitle,
        userId: userId,
        tags:tags,
        body:postBody,
        reactions:reactions,
      })
    })
    .then(res => res.json())
    .then(data=> addPost(data));

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    setSelectedTab("Home");
  }
  return (
    <form className={styles.create_post} onSubmit={(event)=>handleSubmit(event)}>
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">Enter your User Id here</label>
      <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Your User Id"/>
    </div>
    <div className="mb-3">
      <label htmlFor="postTitle" className="form-label">Post Title</label>
      <input type="text" ref={postTitleElement} className="form-control" id="postTitle" placeholder="How are you feeling today..."/>
    </div>
    <div className="mb-3">
      <label htmlFor="postBody" className="form-label">Post Body</label>
      <input type="text" ref={postBodyElement} className="form-control" id="postBody" placeholder="Tell us more about it"/>
    </div>
    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Enter Post Reactions</label>
      <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="Reactions"/>
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Enter your HashTags</label>
      <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Enter tags by space"/>

    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  );
};
export default CreatePost;
