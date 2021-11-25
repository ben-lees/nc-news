import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Topics from "./components/pages/topics";
import Articles from "./components/pages/Articles";
import Article from "./components/pages/Article";
import { UserProvider } from "./contexts/User";

function App() {
  return (
    <UserProvider>
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<Article />} />
          </Routes>
        </Router>
      </>
    </UserProvider>
  );
}

export default App;
