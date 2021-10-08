import React, { useState, useEffect } from "react";
import PopularFilterBar from "../PopularFilterBar/PopularFilterBar";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMoviesSection.css";
import axios from 'axios'

const links = {
  onStream:
    "https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=1",
  onTv: "https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=4",
  onForRent:
    "https://api.themoviedb.org/3/discover/movie?api_key=267478f9e81983e4ecdb72c1b7954e41&language&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3",
  onCinema:
    "https://api.themoviedb.org/3/movie/popular?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=2",
};
const defaultLink =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=1";

export default function PopularMoviesSection() {
  const [link, setLink] = useState(defaultLink);
  const [selected, setSelected] = useState('onStream');
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
      <PopularFilterBar
        handleClick={handleClick}
        selected={selected}
      />
      <div className="slider">
        <div className="scroll">
        {movieList.map((item) => (
          <div className="item">
            <MovieCard 
                img={"https://www.themoviedb.org/t/p/w220_and_h330_face" + item.imagePath}
                title={item.title}
                date={item.date}
                rating={item.rating * 10 }
            />
          </div>
         ))}
        </div>
      </div>
    </div>
  );
}
