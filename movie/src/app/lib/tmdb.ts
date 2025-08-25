import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
}

export async function fetchMovies(category: string, params = ''): Promise<Movie[]> {
  try {
    const url = `${BASE_URL}${category}?api_key=${API_KEY}${params}`;
    const res = await axios.get(url);
    return res.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
