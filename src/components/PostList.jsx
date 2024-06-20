import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {

  const {postList}=useContext(PostListContext);
  return (
    <>
    {postList.map((item)=>{
      return(
        <Post key={item.id} post={item}/>
      )
    })}
    </>
  );
};
export default PostList;
