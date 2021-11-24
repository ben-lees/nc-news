import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./Hero.css";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/matrix-thing.mp4" autoPlay loop muted />
      <h1>Welcome to NC News</h1>
      <p>Only the coolest and most exclusive stories on the interwebs</p>
      <div className="hero-btns">
        <Button>
          <Link to="/topics" className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
            Find a topic!
          </Link>
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          <Link to="/articles" className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
            Find an article!
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
