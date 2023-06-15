import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CloseIcon, Hamburger } from "../icons/Icons";
import LoginButton from "./LoginButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Carts", path: "/carts" },
];

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => setToggleMenu((prev) => !prev);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (toggleMenu && ref.current && !ref.current.contains(e.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggleMenu]);

  return (
    <nav className="my-2 w-full" ref={ref}>
      <div className="w-full px-2 sm:px-6 flex flex-row items-center justify-between sm:justify-center">
        <NavLinks
          className="hidden sm:flex flex-row"
          orientation={"horizontal"}
        ></NavLinks>
        <ToggleMenu
          className="border-2 border-lightPurple max-sm:block p-1 hidden rounded-md hover:cursor-pointer hover:bg-dimPurple"
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          handleClick={handleToggleMenu}
        ></ToggleMenu>
        <LoginButton
          className="block sm:hidden mx-4"
          buttonText="Login"
        ></LoginButton>
      </div>
      {toggleMenu ? (
        <NavLinks
          className="sm:hidden text-center"
          orientation={"vertical"}
        ></NavLinks>
      ) : null}
    </nav>
  );
}
const NavLink = ({ link, orientation, className }) => {
  const buildClassName = () => {
    const defaultClassName =
      "border-2 border-white px-4 py-2 hover:cursor-pointer";
    let orientationClassName = "";
    if (orientation === "vertical") {
      orientationClassName += "hover:bg-dimPurple rounded-md";
    }
    if (orientation === "horizontal") {
      orientationClassName += "hover:border-b-lightPurple";
    }
    return `${defaultClassName} ${className} ${orientationClassName} `;
  };
  return (
    <div className={buildClassName()}>
      <Link to={link.path}>{link.name}</Link>
    </div>
  );
};

NavLink.propTypes = {
  link: PropTypes.object,
  className: PropTypes.string,
  orientation: PropTypes.string,
};

const NavLinks = ({ className, orientation }) => {
  const buildClassName = () => {
    const defaultClassName = "hover:cursor-pointer";
    let orientationClassName = "";
    if (orientation === "vertical") {
      orientationClassName +=
        "border-2 border-lightGray m-2 shadow-xl rounded-md";
    }
    if (orientation === "horizontal") {
      orientationClassName += "px-4";
    }
    return `${defaultClassName} ${className} ${orientationClassName} `;
  };
  return (
    <div className={buildClassName()}>
      {navLinks && navLinks.length
        ? navLinks.map((link, index) => (
            <NavLink
              key={index}
              link={link}
              orientation={orientation}
            ></NavLink>
          ))
        : null}
    </div>
  );
};

NavLinks.propTypes = {
  className: PropTypes.string,
  orientation: PropTypes.string,
};

/* const ThemeButton = ({ theme, className, handleTheme }) => {
  const buildClassName = () => {
    const defaultClassName = ``;
    return `${defaultClassName} ${className}`;
  };
  return theme === "light" ? (
    <div className={buildClassName()} onClick={handleTheme}>
      <LightThemeIcon></LightThemeIcon>
    </div>
  ) : (
    <div className={buildClassName()} onClick={handleTheme}>
      <DarkThemeIcon></DarkThemeIcon>
    </div>
  );
};

ThemeButton.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  handleTheme: PropTypes.func,
}; */

const ToggleMenu = ({ className, toggleMenu, handleClick }) => {
  return (
    <button className={`${className}`} type="button" onClick={handleClick}>
      {!toggleMenu ? <Hamburger></Hamburger> : <CloseIcon></CloseIcon>}
    </button>
  );
};

ToggleMenu.propTypes = {
  className: PropTypes.string,
  toggleMenu: PropTypes.bool,
  handleClick: PropTypes.func,
};
