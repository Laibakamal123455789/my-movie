"use client"
import { useEffect, useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [movie, setMovie] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const API_KEY = "62ba84da719c3812b6d078e3f7c2e4f1";

 
  const fetchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
    setMovie(randomMovie);
  };

  const fetchTrailer = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    const trailer = data.results.find((video) => video.type === "Trailer");
    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const handleWatch = async () => {
    if (movie) {
      const trailerUrl = await fetchTrailer(movie.id);
      if (trailerUrl) {
        setIsPlaying(trailerUrl);
      } else {
        alert("Trailer not available for this movie.");
      }
    }
  };

  
  if (!movie) return <div className="hero-placeholder">Loading content...</div>;

  return (
    <div className="hero-container">
      
      {isPlaying ? (
        <iframe
          src={`${isPlaying}?autoplay=1`}
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="hero-video"
        ></iframe>
      ) : (
        <div
          className="hero-background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        ></div>
      )}

      <div className="hero-content">
     
        <h1 className="hero-title">{movie.title}</h1>
        <p className="hero-description">{movie.overview}</p>
        <div className="hero-buttons">
          <button className="hero-button watch" onClick={handleWatch}>
            Watch
          </button>
        
        </div>
      </div>
    </div>
  );
}
