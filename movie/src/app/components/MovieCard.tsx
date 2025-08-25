import React from 'react';
import { Movie } from '../lib/tmdb';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : '/no-poster.png';

  return (
    <div className="w-40 flex-shrink-0 cursor-pointer hover:scale-105 transform transition duration-300">
      <img src={imageUrl} alt={movie.title || movie.name} className="rounded-lg mb-2" />
      <div className="text-xs font-semibold truncate">{movie.title || movie.name}</div>
    </div>
  );
};

export default MovieCard;
