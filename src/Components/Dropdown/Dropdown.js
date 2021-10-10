import React from "react";
import "./Dropdown.css";

const selectedFilterBtn = {
  "background-color": "#032541",
  color: "#ffffff",
};

export default function Dropdown(props) {
  let itemAmount = props.itemAmount;

  return (
    <div class="dropdown">
      <button class="dropbtn">Filtre Seç</button>
      {itemAmount === "4" ? (
        <div class="dropdown-content">
          <a
            href="#"
            onClick={props.onClickOne}
            style={props.selected === "onStream" ? selectedFilterBtn : {}}
          >
            {props.one}
          </a>
          <a
            href="#"
            onClick={props.onClickTwo}
            style={props.selected === "onTv" ? selectedFilterBtn : {}}
          >
            {props.two}
          </a>
          <a
            href="#"
            onClick={props.onClickThree}
            style={props.selected === "onForRent" ? selectedFilterBtn : {}}
          >
            {props.three}
          </a>
          <a
            href="#"
            onClick={props.onClickFour}
            style={props.selected === "onCinema" ? selectedFilterBtn : {}}
          >
            {props.four}
          </a>
        </div>
      ) : (
        <div class="dropdown-content">
          <a
            href="#"
            onClick={props.onClickOne}
            style={props.selected === "movies" ? selectedFilterBtn : {}}
          >
            {props.one}
          </a>
          <a
            href="#"
            onClick={props.onClickTwo}
            style={props.selected === "onTv" ? selectedFilterBtn : {}}
          >
            {props.two}
          </a>
        </div>
      )}
    </div>
  );
}
