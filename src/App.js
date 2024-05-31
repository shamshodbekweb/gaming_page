import './App.css';
import "../src/stylee.css"
import Nav from "./components/header/nav"
import Main from "../src/components/main/main"
import Main2 from "../src/components/main2/main2"
import Main3 from "../src/components/main3/main3"
import Main4 from "../src/components/main4/main4"
import Footer from "../src/components/footer/footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Main2 />
      <Main3 />
      <Main4 />
      <Footer />
    </div>
  );
}

export default App;
