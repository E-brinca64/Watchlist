import { FaYoutube, FaFacebook  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";   

const Footer = () => {
    return (
      <footer className="bg-[#000814] text-white p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img src="Logo.png" alt="Logo" className="h-24 mb-4" />
          </div>
          <div>
            <h3 className="font-bold mb-2">Learn More</h3>
            <ul>
              <li><a href="#" className="hover:underline">About Watchlist</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p>Email: Watchlist@list.com</p>
            <p>Telephone: (11) 98757-4365</p>
          </div>
            <div className="flex flex-col gap-4 mt-4">
                <h3 className="font-bold mb-2"> Social</h3>
              <a href="#" className="hover:underline flex"><FaFacebook /> Facebook</a>
              <a href="#" className="hover:underline flex"><RiInstagramFill /> Instagram</a>
              <a href="#" className="hover:underline flex"><FaXTwitter /> X</a>
              <a href="#" className="hover:underline flex"><FaYoutube /> YouTube</a>
            </div>
          
        </div>
      </footer>
    );
  };
  
  export default Footer;
  