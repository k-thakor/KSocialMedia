import { createContext, useReducer } from "react";

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
  addAllPost:()=>{}
})

const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
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

  const addPost=(userId,postTitle,postBody,reactions,tags)=>{
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id:Date.now(),
        userId,title:postTitle,body:postBody,reactions,tags
      }
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
    <PostListContext.Provider value={{postList:postList,addPost: addPost,deletePost: deletePost,addAllPost:addAllPost}}>
        {children}
    </PostListContext.Provider>
  )
}

export default PostListProvider;