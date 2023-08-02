import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/movielist/MovieList";
import Search from "./Components/search/Search";
import Aboutfilms from "./Aboutfilms";

function App() {
  const [movies, setMovies] = useState(Aboutfilms);
  const [searchbytitle, setSearchbytitle] = useState("");
  const [searchbyrating, setSearchbyrating] = useState(0);
  const addfilm = (x) => {
    setMovies([...movies, x]);
  };
  return (
    <div className="App">
      <Search
        setSearchbytitle={setSearchbytitle}
        setSearchbyrating={setSearchbyrating}
        searchbyrating={searchbyrating}
      />
      <MovieList
        movies={movies}
        searchbytitle={searchbytitle}
        searchbyrating={searchbyrating}
        addfilm={addfilm}
      />
    </div>
  );
}

export default App;
