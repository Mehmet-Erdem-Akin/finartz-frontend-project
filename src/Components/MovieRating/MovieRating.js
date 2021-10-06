import React from "react";
import { CircularProgressbar,CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
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
          pathColor: '#ffffff',
          textColor: "#ffffff",
          trailColor: "#204529",
          pathColor: "#21d07a",
        })}
      >
         <div style={{ fontSize: '14px', color: '#fff',marginLeft: '-5px' }}>
          <strong>67</strong> 
          <span style={{fontSize: '8px',top: '12px', position: 'absolute'}}>%</span>
        </div> 
      </CircularProgressbarWithChildren>
    </div>
  );
}
