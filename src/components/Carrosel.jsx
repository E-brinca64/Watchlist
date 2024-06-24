import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const Carrosel = ({ movie, showLink = true}) => {
  return (
    <div>
      <div className="carrosel">
            <img src={imageUrl + movie.backdrop_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    </div>
  )
}

export default Carrosel
