import React from "react";

const Rate = ({ rating, setSearchbyrating = () => {} }) => {
  let arrayOfStars = [];
  const stars = (x) => {
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        arrayOfStars.push(
          <span
            style={{ color: "yellow", fontSize: "22px" }}
            onClick={() => setSearchbyrating(i)}
          >
            ★{" "}
          </span>
        );
      } else {
        arrayOfStars.push(
          <span
            style={{ color: "white", fontSize: "22px" }}
            onClick={() => setSearchbyrating(i)}
          >
            ★{" "}
          </span>
        );
      }
    }
    return arrayOfStars;
  };
  return <div style={{ height: "45px" }}>{stars(rating)}</div>;
};
export default Rate;
