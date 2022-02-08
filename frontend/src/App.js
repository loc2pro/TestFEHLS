import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Home from "./Screen/Home";

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
