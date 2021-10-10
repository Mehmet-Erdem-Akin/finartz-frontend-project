import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function MovieRating(props) {
  const percentage = props.rating;

  return (
    <div>
      <CircularProgressbarWithChildren
        value={percentage}
        //text={`${percentage}`}
        strokeWidth={6}
        styles={buildStyles({
          // Text size
          textSize: "2em",
          
          // Colors
          textColor: '#ffffff',
          trailColor: props.trailColor,
          pathColor: props.pathColor,
        })}
      >
         <div style={{ fontSize: '14px', color: '#fff',marginLeft: '-5px' }}>
          <strong>{percentage}</strong> 
          <span style={{fontSize: '6px',top: '12px', position: 'absolute',color: '#ccc'}}>%</span>
        </div> 
      </CircularProgressbarWithChildren>
    </div>
  );
}
