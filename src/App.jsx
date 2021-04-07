import logo from './logo.svg';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavMain from "./Components/NavMain";
import Home from "./Components/Home";
import Play from "./Components/Play";
import About from "./Components/About";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello world</h1>
       <NavMain/>
       {/* <Switch> */}
          {/* <Route exact path="/" component={Home}/>
          <Route exact path="/play" component={Play}/>
          <Route exact path="/about" component={About}/> */}

       {/* </Switch> */}
      </header>
    </div>
  );
}

export default App;
