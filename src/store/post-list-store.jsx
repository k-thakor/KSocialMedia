import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST=[{
  id:'1',
  title:'Going to Mumbai',
  body:'Hi Friends, I am going to Mumbai for the vacations. Hope to enjoy a lot!!!!',
  reactions:2,
  userId:'116',
  url:'KSocialMedia/src/assets/graduation.jpg',
  tags:['vacation','Mumbai','Enjoy']
},{
  id:'2',
  title:'Pass ho gai bhai',
  body:'4 saal ki masti ke bad bhi ho gye hai pass',
  reactions:15,
  userId:'16',
  url:'',
  tags:['pass','graduation','unbelievable']
}];
//created context for postList
export const PostListContext=createContext({postList:[], 
  addPost:()=>{},
  deletePost:()=>{},
})

const postListReducer=(currPostList,action)=>{
   console.log(action)
    let newPostList=currPostList;
    if(action.type==="DELETE_POST")
    {
      newPostList=currPostList.filter((post)=>post.id !==action.payload.postId)
    }
  return newPostList;
}

//created provider for the Context
const PostListProvider=({children})=>{
  
  const [postList, dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);

  const addPost=(postId)=>{
    dispatchPostList({
      type:"DELETE_POST",
      payload:{
        postId
      }
    });

  }

  const deletePost=(postId)=>{
    dispatchPostList({
      type:"DELETE_POST",
      payload:{
        postId
      }
    });
  }

  return(
    <PostListContext.Provider value={{postList:postList,addPost: addPost,deletePost: deletePost}}>
        {children}
    </PostListContext.Provider>
  )
}

export default PostListProvider;