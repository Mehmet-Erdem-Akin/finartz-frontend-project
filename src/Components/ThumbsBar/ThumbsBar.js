import React, { useState } from "react";
import "./ThumbsBar.css";

export default function ThumbsBar() {
  const [like, setLike] = useState(true);
  const [dislike, setDislike] = useState(true);

  const handleThumbAction = (thumbStatus) => {
    if (thumbStatus === "like") {
      setDislike(!dislike);
    }
    if (thumbStatus === "dislike") {
      setLike(!like);
    }
  };

  return (
    <div className="thumbs-bar">
      <div className="thumb-item">
        <svg style={{ display: like ? true : 'none' }} onClick={() => handleThumbAction('like')}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#b2b0b0"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
        </svg>
      </div>
      <div className="thumb-item">
        <svg style={{ display: dislike ? true : 'none' }} onClick={() => handleThumbAction('dislike')}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#b2b0b0"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" />
        </svg>
      </div>
    </div>
  );
}
