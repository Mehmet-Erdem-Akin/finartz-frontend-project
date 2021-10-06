import React from 'react';
import './MovieCard.css';
import MovieRating from '../MovieRating/MovieRating';

export default function MovieCard() {
    return (
        <div>
            <div className="card-header">
                <img className="image" src="https://www.themoviedb.org/t/p/w220_and_h330_face/5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg"
                 alt="" 
                 srcset=""
                 style={{
                     borderRadius: 8,
                     boxShadow: '0 2px 8px rgb(0 0 0 / 10%)',                
                     minHeight: 'calc(150px * 1.5)',
                     height: 'calc(150px * 1.5)',
                     background: '#dbdbdb',
                     overflow: 'hidden',
                    }}
                 >
                     
                 </img>
                <div className="movie-rating">
                    <MovieRating/>
                </div>
            </div>
            <div className="card-body">
                <h2>
                    <a href="">
                        Peaky Blinders
                    </a>
                </h2>
                <p>
                    12-09-2021
                </p>
            </div>
        </div>
    )
}
