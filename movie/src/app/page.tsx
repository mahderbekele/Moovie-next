import Image from "next/image";
import Navbar from "./components/Navbar";
import MovieSection from "./components/MovieSection";
import { fetchMovies, Movie } from './lib/tmdb';
import HomePage from "./pages";


export default function Home() {
  return (
<div>
  <HomePage />
    
    </div>
  );
}
