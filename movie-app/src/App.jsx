import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MovieCard from "./compent/movie";
import { fetchPopularMovies } from "./data/movie";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };

    loadMovies();
  }, []);

  return (
    <>
      <Navbar />

      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;