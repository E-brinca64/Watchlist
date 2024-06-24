// src/components/Carrosel.jsx

import { useState } from "react";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const Carrosel = ({ movies, showLink = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto m-20">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((movie, index) => (
            <div key={movie.id} className="w-full flex-shrink-0 flex flex-col items-center">
              <img
                src={imageUrl + movie.backdrop_path}
                alt={movie.title}
                className="w-full"
              />
                <h2 className="font-white text-4xl">{movie.title}</h2>


              {showLink && (
                <Link
                  to={`/movie/${movie.id}`}
                  className="text-center block mt-2 text-blue-500"
                >
                  <button className=" p-3 pl-8 pr-8 rounded-2xl border-4 border-[#ffc300] text-[#ffc300]">
                    Details
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 p-2 bg-gray-800 bg-opacity-75 text-white rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 p-2 bg-gray-800 bg-opacity-75 text-white rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carrosel;
