import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import styles from "./App.module.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {

  const [selectedTab, setSelectedTab]=useState("Home");

  return (
    <PostListProvider>
    <div className={styles.appcontainer}>
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className={styles.content}>
        <Header />
        {selectedTab==="Home"?
        <PostList/>:
        <CreatePost/>
        }
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
