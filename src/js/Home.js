import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="app">
    <div className="landing">
      <h1>Bash's Netflix Lounge</h1>
      <input type="text" placeholder="Search Movie" />
      <Link to="/search">or Browse All</Link>
    </div>
  </div>
);

export default Home;
