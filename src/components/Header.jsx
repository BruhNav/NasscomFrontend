import { images } from "../assets";

const { logo } = images;

function Header(){
  return (
    <header className="flex mt-12 justify-between items-center">
        <div className="header__logo">
            <img
                src={logo}
                width={200}
                height={55}
                alt="image"
            />
        </div>
        <div className="flex justify-between itmes-center">
            <div className="mx-4 text-text font-semibold"><button><a href="/">Home</a></button></div>
            <div className="mx-4 text-text font-semibold"><button><a href="/about">About Us</a> </button></div>
            <div className="mx-4 text-text font-semibold"><button><a href="/model-metrix">Model</a></button></div>
            <button className="mx-4 text-white bg-cta font-semibold h-8 w-20 rounded">Contact</button>
        </div>
    </header>
  );
}
export default Header;