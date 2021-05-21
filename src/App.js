import NavBar from "./components/nav_bar/nav_bar";
import Mission from "./components/mission/mission";
import Leadership from "./components/leadership/leadership";
import Investors from "./components/investors/investors";
import Footer from "./components/footer/footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Mission />
      <Leadership />
      <Investors />
      <Footer />
    </div>
  );
}

export default App;
