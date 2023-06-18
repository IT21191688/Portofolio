import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './Components/Main';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Contacts from './Components/Contacts';

function App() {
  return (
    <div className="App">

      <Main />
      <Home />
      <About />
      <Resume />
      <Contacts />

    </div >


  );
}

export default App;
