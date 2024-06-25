import Post from "./Post";
import Welcome from "./Welcome";
import { useLoaderData } from "react-router-dom";

const PostList = () => {

 const postList=useLoaderData();

  return (
    <>
    {postList?.length ? (
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

export const  postLoader = () => {
  return fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => (data.products));
};
