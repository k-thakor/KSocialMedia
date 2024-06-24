import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetchedPost } = useContext(PostListContext);

 

  return (
    <>
    {fetchedPost ? <LoadingSpinner/> :  postList?.length ? (
        postList.map((item) => {
          return <Post key={item.id} post={item} />;
        })
      ) : (
        <Welcome/>
      )}
    </>
  );
};
export default PostList;
