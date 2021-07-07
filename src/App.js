import React from "react";

//CSS
import "./App.css";

//Component Imports
import Header from "./components/header/Header";
import SwipeButtons from "./components/swipebuttons/SwipeButtons";
import TinderCards from "./components/tindercards/TinderCards";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
