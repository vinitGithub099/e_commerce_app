import { Link } from "react-router-dom";
import { SearchIcon } from "../icons/Icons";
import AppLogo from "./AppLogo";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <header className="w-full py-4 px-4 sm:px-8 md:px-16  bg-white shadow-md flex flex-col sm:flex-row items-center justify-between">
      <Logo></Logo>
      <div className="flex flex-row">
        <SearchBar></SearchBar>
        <LoginButton
          className="hidden sm:block mx-4"
          buttonText="Login"
        ></LoginButton>
      </div>
    </header>
  );
}

const Logo = () => {
  return (
    <Link to="/">
      <AppLogo></AppLogo>
    </Link>
  );
};

const SearchBar = () => {
  return (
    <div className="border px-2 py-1 flex flex-row items-center gap-4 rounded-2xl">
      <SearchIcon></SearchIcon>
      <input className="p-1 outline-none" type="text"></input>
    </div>
  );
};
