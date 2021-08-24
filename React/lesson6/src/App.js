import React from "react";
import Music from "./components/Music";
import Library from "./components/Library";
import Player from "./components/Player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Music></Music>
      <Library></Library>
      <Player></Player>
    </div>
  );
}

export default App;
