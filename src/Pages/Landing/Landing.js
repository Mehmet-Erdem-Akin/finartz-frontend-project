import React from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import "./Landing.css";
import PopularMoviesSection from "../../Components/PopularMoviesSection/PopularMoviesSection";
import FreeToWatchSection from "../../Components/FreeToWatchSection/FreeToWatchSection";

export default function Landing() {
  return (
    <div>
      <h2 className="title">Finartz Frontend Development Project</h2>
        <PopularMoviesSection/>
        <FreeToWatchSection/>
      
    </div>
  );
}
