import React, { useState, useEffect } from "react";
import FreeToWatchFilterBar from "../FreeToWatchFilterBar/FreeToWatchFilterBar";
import MovieCard from "../MovieCard/MovieCard";
import "./FreeToWatchSection.css";
import axios from 'axios'

const links = {
  movies:
    "https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=3",
  onTv: 
    "https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=4",
};
const defaultLink =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=3";

export default function FreeToWatchSection() {
  const [link, setLink] = useState(defaultLink);
  const [selected, setSelected] = useState('movies');
  const [movieList, setMovieList] = useState([])

  const handleClick = (text) => {
    setLink(links[text]);
    setSelected(text);
  };

  useEffect(() => {
    axios.get(link).then((res) => {
        let result = res.data['results']
        if (result) {
            let list = result.map((item) => {
                let movie = {}
                movie['title'] = item.title
                movie['imagePath'] = item['poster_path']
                movie['date'] = item['release_date']
                movie['rating'] = item['vote_average']
                return movie;
            })
            setMovieList(list)
        }
    })
}, [link])

  return (
      <div className="container">
        <FreeToWatchFilterBar
          filterAmount="2"
          filtersTitle="İzlemek Ücretsiz"
          filterOne="Filmler"
          filterTwo="TV"
          handleClick={handleClick}
          selected={selected}
        />
        <div className="slider">
        <div className="scroll">
        {movieList.map((movie) => (
          <div className="item">
            <MovieCard 
                img={"https://www.themoviedb.org/t/p/w220_and_h330_face" + movie.imagePath}
                title={movie.title}
                date={movie.date}
                rating={movie.rating * 10}
            />
          </div>
         ))}
        </div>
      </div>
      </div>
  );
}
