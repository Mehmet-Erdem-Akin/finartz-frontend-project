import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function MovieRating() {
  const percentage = 66;

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
          textColor: "#ffffff",
          trailColor: "#204529",
          pathColor: "#21d07a",
        })}
      >
         <div style={{ fontSize: '14px', color: '#fff',marginLeft: '-5px' }}>
          <strong>67</strong> 
          <span style={{fontSize: '6px',top: '12px', position: 'absolute',color: '#ccc'}}>%</span>
        </div> 
      </CircularProgressbarWithChildren>
    </div>
  );
}
