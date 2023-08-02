import React from "react";
import "./movielist.css";
import MovieCard from "../MovieCard";
import Addmovies from "../addmovies/Addmovies";

const MovieList = ({ movies, searchbytitle, searchbyrating, addfilm }) => {
  return (
    <div className="movielist">
      {movies
        .filter(
          (el) =>
            el.title
              .toLowerCase()
              .includes(searchbytitle.toLowerCase().trim()) &&
            el.rating >= searchbyrating
        )
        .map((el, i) => (
          <MovieCard film={el} key={i} />
        ))}
      <Addmovies addfilm={addfilm} />
    </div>
  );
};
export default MovieList;
