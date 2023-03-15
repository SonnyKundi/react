import {useState, useEffect} from "react";

import MovieCard from "./MovieCard";


import  './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=7b58fc66'


/*const movie = {
   "Poster": "https://m.media-amazon.com/images/M/MV5BNTE5NDA1YjgtMjM2Yi00YWM1LWE0OGEtZDBkZTkxYjhjYzg0XkEyXkFqcGdeQXVyMTUyMjEyMjMx._V1_SX300.jpg",
    "Title": "Power Slap: Road to the Title",
    "Type": "series",
    "Year": "2023",
    "imdbID": "tt25697028"
}*/
const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("Batman");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };
  
    return (
      <div className="app">
        <h1>MovieLand</h1>
  
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
  
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    );
  };
  
  export default App;