import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addAllPost } = useContext(PostListContext);

  const [fetchedPost, setFetchedPost] = useState(false);

  useEffect(() => {
        setFetchedPost(true);
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          addAllPost(data.products);
          setFetchedPost(false);
        });

        return()=>{
          console.log("cleaning up useeffect")
        }

  }, []);

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
