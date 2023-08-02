import React from "react";
import Rate from "./Rate";

const MovieCard = ({ film }) => {
  return (
    <div>
      {" "}
      <div className="film1">
        <div className="image">
          <img src={film.image} alt="redNotice" />
          <div style={{ marginLeft: "12px" }}>
            <div className="titleDescrition">
              <p className="title">{film.title}</p>
              <p className="description">{film.description}</p>
            </div>
            <Rate rating={film.rating} />
            
          </div>
        </div>
      </div>
      <div className="rating">
        <p>{film.rating}</p>
      </div>
    </div>
  );
};
export default MovieCard;
