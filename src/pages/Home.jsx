// src/pages/Home.jsx

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard.jsx"; 
import Carrosel from "../components/Carrosel.jsx";
import Footer from "../components/Footer.jsx";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upComing, setUpComing] = useState([]);

  const fetchMovies = async (url, setState) => {
    const res = await fetch(url);
    const data = await res.json();
    setState(data.results);
  };

  useEffect(() => {
    fetchMovies(`${moviesURL}top_rated?${apiKey}`, setTopRated);
    fetchMovies(`${moviesURL}now_playing?${apiKey}`, setNowPlaying);
    fetchMovies(`${moviesURL}upcoming?${apiKey}`, setUpComing);
  }, []);

  return (
    <>
      <div className="mb-8">
        {topRated.length > 0 && <Carrosel movies={topRated} />}
      </div>

      <div className="container mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4">Currently Playing</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nowPlaying.length > 0 &&
            nowPlaying.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>

      <div className="container mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {upComing.length > 0 &&
            upComing.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
