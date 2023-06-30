import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import Navbar from "./components/header/Navbar";
import Welcome from "./components/welcome/Welcome";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <>
      <Navbar />
      <Fade cascade="true" direction="left">
        <Welcome />
      </Fade>
    </>
  );
}

export default App;
