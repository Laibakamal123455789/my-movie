"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // For navigation within App Router

const API_KEY = "62ba84da719c3812b6d078e3f7c2e4f1"; // Your API key

export default function HorrorMovies({ genre }) {
  const router = useRouter(); // Initialize the router
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [genre]);

  if (loading) return <h2>Loading Horror Movies...</h2>;

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>Horror Movies</h2>
      <div style={{ display: "flex", overflowX: "scroll", gap: "10px" }}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => router.push(`/movies/${movie.id}`)} // Navigate to movie detail page
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                    : "/fallback-image.jpg"
                }
                alt={movie.title}
                style={{
                  width: "150px",
                  borderRadius: "8px",
                }}
              />
              <p
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {movie.title}
              </p>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}
