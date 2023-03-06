import { images } from "../assets";
import {Link} from "react-router-dom";

const { logo } = images;

function Header(){
  return (
    <header className="flex mt-12 justify-between items-center mx-20">
        <div className="header__logo">
            <img
                src={logo}
                width={200}
                height={55}
                alt="image"
            />
        </div>
        <div className="flex justify-between itmes-center">
            <div className="mx-4 text-text font-semibold"><button><Link to="/">Home</Link></button></div>
            <div className="mx-4 text-text font-semibold"><button><Link to="/about">About Us</Link> </button></div>
            <div className="mx-4 text-text font-semibold"><button><Link to="/model-metrix">Model</Link></button></div>
            <button className="mx-4 text-white bg-cta font-semibold h-8 w-20 rounded">Contact</button>
        </div>
    </header>
  );
}
export default Header;