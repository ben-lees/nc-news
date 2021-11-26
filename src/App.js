import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Topics from "./components/pages/topics";
import Articles from "./components/pages/Articles";
import Article from "./components/pages/Article";
import SignIn from "./components/pages/SignIn";
import { UserContext } from "./contexts/UserContext";
import { useState, useMemo } from "react";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <Router>
        <NavBar />
        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/articles/:article_id" element={<Article />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
