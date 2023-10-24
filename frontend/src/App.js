import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './Components/Main';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Contacts from './Components/Contacts';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">

      <Main />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contacts />

      {/*"homepage": "https://IT21191688.github.io/Portofolio",*/}

    </div>

  );
}

export default App;
