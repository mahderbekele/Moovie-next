'use client';
import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../lib/tmdb';

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mb-8 px-6">
      <h2 className="mb-3 text-xl font-bold">{title}</h2>
      <div className="flex items-center space-x-2">
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {movies.slice(0, 25).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="mt-20 bg-orange-300 text-white px-4 py-2 rounded hover:bg-blue-700 "
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default MovieSection;
