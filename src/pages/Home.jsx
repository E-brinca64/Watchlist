import { useState, useEffect } from "react";
import MovieCard from '../components/MovieCard.jsx';
import Carrosel from "../components/Carrosel.jsx";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  
  const [topRated, setTopRated] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json();

    setTopRated(data.results);
  }
  
  useEffect(() =>{

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, [])
  
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

    const [upComing, setUpComing] =useState([])

    const getUpComingMovies = async (url) => {

      const res = await fetch(url)
      const data = await res.json();
  
      setUpComing(data.results);
    }
    useEffect(() =>{

      const upComingURL = `${moviesURL}upcoming?${apiKey}`;

      getUpComingMovies(upComingURL);
    }, [])

  return (
  <>
      <div className="cavalo">
        {topRated.length > 0 && topRated.map((movie) => <Carrosel key={movie.id} movie={movie} />)}
      </div>


      <div className="container">
        <h2 className="nowPlaying">Currently playing</h2>
        <div className="movies-container">
          {nowPlaying.length > 0 && nowPlaying.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>

    <div className="container">
        <h2 className="nowPlaying">Coming soon</h2>
        <div className="movies-container">
          {upComing.length > 0 && upComing.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
</>
    
  );  
}

export default Home
 
//     carrocel imagem 
// <form >
// <button>BOTÃO</button>
// <button>BOTÃO2</button>
// </form>
