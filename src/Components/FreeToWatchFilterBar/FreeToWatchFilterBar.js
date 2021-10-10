import React, { useState } from "react";
import "./FreeToWatchFilterBar.css";
import Dropdown from "../Dropdown/Dropdown";
import MediaQuery from 'react-responsive'

export default function FreeToWatchFilterBar({ handleClick, selected }) {
  const selectedFilterBtn = {
    "background-color": "#032541",
  };
  const selectedFilterText = {
    background: "linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)",
    "-webkitBackgroundClip": "text",
    "-webkitTextFillColor": "transparent",
  };

  return (
    <div className="FilterBar">
      <h2 className="filter-title">
        İzlemek Ücretsiz
      </h2>
      <MediaQuery maxWidth={767}>
      <Dropdown
        itemAmount="2"
        one="Filmler"
        two="TV"
        onClickOne={() => handleClick("movies")}
        onClickTwo={() => handleClick("onTv")}
        selected={selected}
      />
      </MediaQuery>
      <MediaQuery minWidth={768}>
      <div className="bar" >
        <div
          className="filter"
          onClick={() => handleClick("movies")}
          style={selected === "movies" ? selectedFilterBtn : {}}
        >
          <h3
            className="filter-text"
            style={selected === "movies" ? selectedFilterText : {}}
          >
            Filmler
          </h3>
        </div>
        <div
          className="filter"
          onClick={() => handleClick("onTv")}
          style={selected === "onTv" ? selectedFilterBtn : {}}
        >
          <h3
            className="filter-text"
            style={selected === "onTv" ? selectedFilterText : {}}
          >
            TV
          </h3>
        </div>
      </div>
      </MediaQuery>
    </div>
  );
}
