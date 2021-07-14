import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Body from "./Body.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
