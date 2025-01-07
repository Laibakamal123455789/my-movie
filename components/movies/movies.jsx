"use client"; // Ensuring it runs as a client component
import { useEffect, useState } from "react";

export default function Movie({ genre, apiKey, type }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.id}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (genre && apiKey) {
      fetchMovies();
    }
  }, [genre, apiKey]);

  // Loading state
  if (loading) return <h2>Loading {type} Movies...</h2>;

  return (
    <div>
      <h2>{genre.name} Movies</h2>
      <div style={{ display: "flex", overflowX: "scroll", gap: "10px" }}>
        {movies.length === 0 ? (
          <p>No Movies Found.</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} style={{ textAlign: "center" }}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: "150px", borderRadius: "8px" }}
                />
              ) : (
                <div
                  style={{
                    width: "150px",
                    height: "225px",
                    backgroundColor: "#ccc",
                    borderRadius: "8px",
                  }}
                >
                  No Image Available
                </div>
              )}
              <p style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {movie.title}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
