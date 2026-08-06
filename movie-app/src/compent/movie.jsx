async function watchMovie() {
  const trailer = await fetchMovieTrailer(movie.id);

  console.log("Trailer:", trailer);

  if (trailer) {
    console.log("YouTube URL:", `https://www.youtube.com/watch?v=${trailer.key}`);

    window.open(
      `https://www.youtube.com/watch?v=${trailer.key}`,
      "_blank"
    );
  } else {
    alert("Trailer not available.");
  }
}
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p> 
        <p>⭐ {movie.vote_average.toFixed(1)}</p>

        <button onClick={watchMovie}>
          ▶ Watch Trailer
        </button>
      </div>
    </div>
  );


export default MovieCard;