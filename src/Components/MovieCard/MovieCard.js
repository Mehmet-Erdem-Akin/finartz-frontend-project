import React from "react";
import "./MovieCard.css";
import MovieRating from "../MovieRating/MovieRating";
import ThumbsBar from "../ThumbsBar/ThumbsBar";
import MaxLineText from "../MaxLineText/MaxLineText";

export default function MovieCard(props) {
  return (
    <div>
      <div className="card-header">
        <img
          className="image"
          src={props.img}
          alt=""
          srcset=""
          style={{
            borderRadius: 8,
            boxShadow: "0 2px 8px rgb(0 0 0 / 10%)",
            minHeight: "calc(150px * 1.5)",
            height: "calc(150px * 1.5)",
            background: "#dbdbdb",
            overflow: "hidden",
          }}
        ></img>
        <div className="card-feature">
          <div className="movie-rating">
            <MovieRating
             rating={props.rating}
             trailColor={(props.rating >= 70) === true && '#204529' || (props.rating < 70 && props.rating >= 40) === true && '#3B3910' || (props.rating < 40) === true && '#571435' }
             pathColor={(props.rating >= 70) === true && '#21d07a' || (props.rating < 70 && props.rating >= 40) === true && '#D2D531' || (props.rating < 40) === true && '#DB2360' }
             />
          </div>
          <div className="thumbs">
            <ThumbsBar />
          </div>
        </div>
      </div>
      <div className="card-body">
          <MaxLineText 
            maxLine="3"
          >
          <h2>
          <a href="">{props.title}</a>
        </h2>
          </MaxLineText>
        
        <p>{props.date}</p>
      </div>
    </div>
  );
}
