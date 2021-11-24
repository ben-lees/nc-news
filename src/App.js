import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Topics from "./components/topics";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home"  /> */}
          <Route path="/topics" element={<Topics />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
