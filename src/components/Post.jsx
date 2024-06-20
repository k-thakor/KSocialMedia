import { useContext } from "react";
import styles from "./Post.module.css";
import {AiFillDelete} from "react-icons/ai";
import { PostListContext } from "../store/post-list-store";
const Post = ({post}) => {

  const {deletePost}=useContext(PostListContext);

  return (
    <div className={`card ${styles.post_card}`} >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
              <AiFillDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((item)=>{
          return(
          <span key={item} className={`badge text-bg-primary ${styles.post_tags}`} >{item}</span>
          )
        })}
      <div  className={`alert alert-success ${styles.post_reactions}`}  role="alert">
        This post has been reacted by {post.reactions} people.
      </div>
      </div>
    </div>
  );
};
export default Post;
