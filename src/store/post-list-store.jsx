import { createContext, useEffect, useReducer, useState } from "react";

const DEFAULT_POST_LIST=[{
  id:'1',
  title:'Going to Mumbai',
  body:'Hi Friends, I am going to Mumbai for the vacations. Hope to enjoy a lot!!!!',
  reactions:2,
  userId:'116',
  tags:['vacation','Mumbai','Enjoy']
},{
  id:'2',
  title:'Pass ho gai bhai',
  body:'4 saal ki masti ke bad bhi ho gye hai pass',
  reactions:15,
  userId:'16',
  tags:['pass','graduation','unbelievable']
}];
//created context for postList
export const PostListContext=createContext({postList:[], 
  addPost:()=>{},
  deletePost:()=>{},
  fetchedPost:Boolean
})

const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    console.log(action.payload)
    if(action.type==="DELETE_POST")
    {
      newPostList=currPostList.filter((post)=>post.id !==action.payload.postId)
    }
    else if(action.type==="ADD_POST")
      {
       newPostList=[action.payload,...newPostList];
      }
      else if(action.type==="ADD_ALL_POST")
        {
          newPostList=action.payload.posts;
        }
  return newPostList;
}

//created provider for the Context
const PostListProvider=({children})=>{
  
  const [postList, dispatchPostList]=useReducer(postListReducer,[]);

  const [fetchedPost, setFetchedPost] = useState(false);

  const addPost=(postData)=>{
    dispatchPostList({
      type:"ADD_POST",
      payload: postData
      
    });
  }

  const addAllPost=(posts)=>{ 
    dispatchPostList({
      type:"ADD_ALL_POST",
      payload:{
        posts
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
    <PostListContext.Provider value={{postList:postList,addPost: addPost,deletePost: deletePost,fetchedPost:fetchedPost}}>
        {children}
    </PostListContext.Provider>
  )
}

export default PostListProvider;