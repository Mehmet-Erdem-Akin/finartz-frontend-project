import React, { useState, useEffect } from "react";
import "./PopularFilterBar.css";
import Dropdown from "../Dropdown/Dropdown";
import MediaQuery from 'react-responsive'

export default function PopularFilterBar({ handleClick, selected }) {

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
      <h2 className="filter-title">Popüler Olanlar</h2>{console.log(window.screen)}
      <MediaQuery maxWidth={767}>
        <Dropdown 
        itemAmount="4"
        one="Yayın Akışı"
        two="Televizyonda"
        three="Kiralık"
        four="Sinemalarda"
        onClickOne={ () => handleClick("onStream")}
        onClickTwo={ () => handleClick("onTv")}
        onClickThree={ () => handleClick("onForRent")}
        onClickFour={ () => handleClick("onCinema")}
        selected={selected}
      />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <div className="bar">
          <div
            className="filter"
            onClick={() => handleClick("onStream")}
            style={selected === "onStream" ? selectedFilterBtn : {}}
          >
            <h3
              className="filter-text"
              style={selected === "onStream" ? selectedFilterText : {}}
            >
              Yayın Akışı
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
              Televizyonda
            </h3>
          </div>
          <div
            className="filter"
            onClick={() => handleClick("onForRent")}
            style={selected === "onForRent" ? selectedFilterBtn : {}}
          >
            <h3
              className="filter-text"
              style={selected === "onForRent" ? selectedFilterText : {}}
            >
              Kiralık
            </h3>
          </div>
          <div
            className="filter"
            onClick={() => handleClick("onCinema")}
            style={selected === "onCinema" ? selectedFilterBtn : {}}
          >
            <h3
              className="filter-text"
              style={selected === "onCinema" ? selectedFilterText : {}}
            >
              Sinemalarda
            </h3>
          </div>
        </div>
      </MediaQuery>
        
        
      
    </div>
  );
}
