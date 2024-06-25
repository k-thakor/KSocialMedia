import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import styles from "./App.module.css";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {

  return (
    <PostListProvider>
    <div className={styles.appcontainer}>
      <SideBar />
      <div className={styles.content}>
        <Header />
        <Outlet/>
        <Footer /> 
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
