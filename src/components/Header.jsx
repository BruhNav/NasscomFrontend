import { images } from "../assets";
import {Link} from "react-router-dom";

const { logo, iiitnr } = images;

function Header(){
  return (
    <header className="flex mt-12 justify-between items-center mx-20">
        <div>
            <a target="_blank" href="https://www.iiitnr.ac.in/">
                <img
                    src={iiitnr}
                    width={110}
                    alt="image"
                />
            </a>
        </div>
        <div className="translate-x-32">
        </div>
        <div className="flex justify-between itmes-center text-xl">
            <div className="mx-4 text-text font-semibold"><button><Link to="/">Home</Link></button></div>
            {/* <div className="mx-4 text-text font-semibold"><button><Link to="/about">About Us</Link> </button></div> */}
            <div className="mx-4 text-text font-semibold"><button><Link to="/model-metrix">Model</Link></button></div>
            <button className="mx-4 text-white bg-cta font-semibold h-8 w-24 rounded"><a href="mailto: pranav20100@iiitnr.edu.in">Contact</a> </button>
        </div>
    </header>
  );
}
export default Header;