import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-text-container">
      <p className="title-home title-rainbow">Our merch is simply space.</p>
      <p className='home-subtitle-text'>
        See the{" "}
        <Link className="home-subtitle-link" to="/nasa-proj/space">
          Astronomical Picture of the Day
        </Link>
        , which is obtained directly from NASA API and is updated every day.
      </p>
    </div>
  );
}

export default Home;
