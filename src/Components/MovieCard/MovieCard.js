import React from "react";
import "./MovieCard.css";
import MovieRating from "../MovieRating/MovieRating";
import ThumbsBar from "../ThumbsBar/ThumbsBar";
import MaxLineText from "../MaxLineText/MaxLineText";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function MovieCard(props) {
  return (
    <div>
      <div className="card-header">
        <LazyLoadImage
          className="image"
          style={{
            borderRadius: 8,
            boxShadow: "0 2px 8px rgb(0 0 0 / 10%)",
            minHeight: "calc(150px * 1.5)",
            height: "200px",
            background: "#dbdbdb",
            overflow: "hidden",
          }}
          effect="blur"
          src={props.img}
        />

        <div className="card-feature">
          <div className="movie-rating">
            <MovieRating
              rating={props.rating}
              trailColor={
                (props.rating >= 70 === true && "#204529") ||
                ((props.rating < 70 && props.rating >= 40) === true &&
                  "#3B3910") ||
                (props.rating < 40 === true && "#571435")
              }
              pathColor={
                (props.rating >= 70 === true && "#21d07a") ||
                ((props.rating < 70 && props.rating >= 40) === true &&
                  "#D2D531") ||
                (props.rating < 40 === true && "#DB2360")
              }
            />
          </div>
          <div className="thumbs">
            <ThumbsBar />
          </div>
        </div>
      </div>
      <div className="card-body">
        <MaxLineText maxLine="3">
          <h2>
            <a href="">{props.title}</a>
          </h2>
        </MaxLineText>

        <p>{props.date}</p>
      </div>
    </div>
  );
}
