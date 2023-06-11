import { Link } from "react-router-dom";
import appIcon from "../assets/shopping_cart.png";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <AppLogo></AppLogo>
    </header>
  );
}

const AppLogo = () => {
  return (
    <Link to="/">
      <div className="flex flex-row items-center">
        <img
          className="w-10 h-10 sm:w-16 sm:h-16 object-cover"
          src={appIcon}
          alt=""
        ></img>
        <h1 className="font-semibold pl-2 text-sm md:text-xl">
          E-COMMERCE APP
        </h1>
      </div>
    </Link>
  );
};
