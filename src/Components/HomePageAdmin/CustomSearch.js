import React from "react";
import classes from "./HomePageAdmin.module.css";

export default function CustomSearch(props) {
  const ondataChanged = (e) => {
    props.onSearchDataChanged(e.target.value);
  };

  return (
    <div className={classes.searchBar}>
      <span className={classes.searchBarSpan}>
        <i class="fas fa-search"></i>
        <input
          onChange={ondataChanged}
          type="text"
          placeholder="Enter Something"
        />
      </span>
    </div>
  );
}
