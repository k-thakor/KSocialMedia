import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost from './components/CreatePost.jsx'
import PostList, { postLoader } from './components/PostList.jsx'

const route= createBrowserRouter([
  {path:"/",element:<App/>, children:[ {path:"/",element:<PostList/>,loader:postLoader}, {path:"/create-post",element:<CreatePost/>}]},
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
