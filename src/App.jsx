import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import styles from "./App.module.css";
function App() {
  return (
    <div class={styles.appcontainer}>
      <SideBar />
      <div class={styles.content}>
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
