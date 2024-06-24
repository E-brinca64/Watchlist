import { useState, useEffect } from "react";
import MovieCard from '../components/MovieCard.jsx';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [nowPlaying, setNowPlaying] =useState([])

  const getNowPlayingMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json();

    setNowPlaying(data.results);
  }

    useEffect(() =>{

      const nowPlayingUrl = `${moviesURL}now_playing?${apiKey}`;

      getNowPlayingMovies(nowPlayingUrl);
    }, [])

  return (
  <>
      <div className="container">
        <h2 className="nowPlaying">Currently playing</h2>
        <div className="movies-container">
          {nowPlaying.length > 0 && nowPlaying.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>

    <h2>Coming soon</h2>

      Filmes
</>
    
  );  
}

export default Home
 
//     carrocel imagem 
// <form >
// <button>BOTÃO</button>
// <button>BOTÃO2</button>
// </form>
