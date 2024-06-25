import { useContext } from "react";
import styles from "./CreatePost.module.css";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {

  return (
    <Form method="POST" className={styles.create_post} >
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">Enter your User Id here</label>
      <input type="text" name="userId" className="form-control" id="userId" placeholder="Your User Id"/>
    </div>
    <div className="mb-3">
      <label htmlFor="postTitle" className="form-label">Post Title</label>
      <input type="text" name="title" className="form-control" id="postTitle" placeholder="How are you feeling today..."/>
    </div>
    <div className="mb-3">
      <label htmlFor="postBody" className="form-label">Post Body</label>
      <input type="text" name="body" className="form-control" id="postBody" placeholder="Tell us more about it"/>
    </div>
    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Enter Post Reactions</label>
      <input type="text" name="reactions" className="form-control" id="reactions" placeholder="Reactions"/>
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Enter your HashTags</label>
      <input type="text" name="tags" className="form-control" id="tags" placeholder="Enter tags by space"/>

    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </Form>
  );
};
export default CreatePost;

export const createPostAction=async (data)=>{
  
  const formData=await data.request.formData();

  const postData=Object.fromEntries(formData);
  console.log(postData);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(data=> { console.log(data)});

  return redirect("/create-post")
}
