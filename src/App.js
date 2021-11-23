import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact />
          {/* <Route path="/home" component={Home} />
          <Route path="/topics" component={Topics} />
          <Route path="/articles" component={Articles} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
