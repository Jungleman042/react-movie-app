const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  const data = await response.json();
  return data.results;
};

export const fetchMovieTrailer = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  );

  const data = await response.json();

  const trailer = data.results.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  return trailer;
};
 

