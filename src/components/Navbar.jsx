import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import {BiSearchAlt2} from "react-icons/bi";

const Navbar = () => {
  return (

      <nav id="navbar">
          <h2>
        <Link to="/">
          <img src="Logo.png" alt="Logo" />
        </Link>
      </h2>
          
          <h2>
            <Link to="/today">Today</Link>
          </h2>
          <h2>
            <Link to="/coming">Coming</Link>
          </h2>

        <form>
            <input type="text" placeholder="Buscar"/>
            <button type="submit">
                <BiSearchAlt2 />
            </button>
        </form>


          <h2>
            <Link to="/profile">Profile</Link>
          </h2>
        </nav>
  )
}

export default Navbar
