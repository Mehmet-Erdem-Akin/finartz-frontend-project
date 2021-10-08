import React from 'react';
import './MovieCard.css';
import MovieRating from '../MovieRating/MovieRating';

export default function MovieCard(props) {
    return (
        <div>
            <div className="card-header">
                <img className="image" src={props.img}
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
                    <MovieRating
                        rating={props.rating}
                    />
                </div>
            </div>
            <div className="card-body">
                <h2>
                    <a href="">
                        {props.title}
                    </a>
                </h2>
                <p>
                    {props.date}
                </p>
            </div>
        </div>
    )
}

