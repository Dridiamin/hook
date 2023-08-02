import React from "react";
import "./search.css";
import Rate from "../Rate.js";

const Search = ({ setSearchbytitle, setSearchbyrating, searchbyrating }) => {
  return (
    <div className="search">
      {" "}
      <div className="searchBar">
        <input
          className="inputsearch"
          type="text"
          placeholder="Search film by title"
          onChange={(e) => setSearchbytitle(e.target.value)}
        />
        <Rate
          rating={searchbyrating}
          setSearchbyrating={setSearchbyrating}
          style={{ marginTop: "12px" }}
        />
      </div>
    </div>
  );
};

export default Search;
