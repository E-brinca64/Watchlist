import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-[#000814] p-4 shadow-md"> {/* Adicionando a classe shadow-md para sombra */}
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-2">
          <Link to="/">
            <img src="Logo.png" alt="Logo" />
          </Link>
        </h2>

        <div className="flex items-center">
          <div className="flex flex-row text-white text-base items-center gap-4">
            <h2>
              <Link className="mr-5" to="/today">Today</Link>
            </h2>
            <h2>
              <Link className="mr-16" to="/coming">Coming</Link>
            </h2>
          </div>

          <form className="flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Buscar" 
              className="p-4 rounded-full border-none bg-[#ffc300] underline" 
            />
            <button 
              type="submit" 
              className="bg-white border-2 border-white rounded-full text-black p-2.5 text-xl flex items-center cursor-pointer"
            >
              <BiSearchAlt2 />
            </button>
          </form>

          <h2 className="ml-5">
            <Link 
              to="/profile" 
              className="bg-white border-2 border-white rounded-full text-black p-3 text-2xl flex items-center cursor-pointer"
            >
              <IoPersonSharp />
            </Link>
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
