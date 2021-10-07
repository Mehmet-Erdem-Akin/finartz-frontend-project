import React from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import "./Landing.css";
import FilterBar from "../../Components/FilterBar/FilterBar";

export default function Landing() {
  return (
    <div>
      <h2 className="title">Finartz Frontend Development Project</h2>
      <div className="container">
          <FilterBar
           filterAmount="4"
           filtersTitle="Popüler Olanlar"
           filterOne="Yayın Akışı"
           filterTwo="Televizyonda"
           filterThree="Kiralık"
           filterFour="Sinemalarda"
           />
        <div className="slider">
          <div className="scroll">
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <FilterBar 
            filterAmount="2"
            filtersTitle="İzlemek Ücretsiz"
            filterOne="Filmler"
            filterTwo="TV"
          />
        <div className="slider">
          <div className="scroll">
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
            <div className="item">
              <MovieCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
