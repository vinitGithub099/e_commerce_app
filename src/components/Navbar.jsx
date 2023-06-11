import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CloseIcon, Hamburger } from "../icons/Icons";

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
    <nav className="w-full" ref={ref}>
      <div className="py-2 px-2 sm:px-6 flex flex-row items-center justify-between shadow-sm shadow-purple">
        <NavLinks
          className="hidden sm:flex flex-row"
          orientation={"horizontal"}
        ></NavLinks>
        <div className="w-full flex flex-row items-center justify-between">
          <ToggleMenu
            className="max-sm:block hidden p-2 rounded-md hover:cursor-pointer hover:bg-dimPurple"
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            handleClick={handleToggleMenu}
          ></ToggleMenu>
          <LoginButton className="mx-4" buttonText="Login"></LoginButton>
        </div>
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
      "border-2 border-white font-semibold px-4 py-2 hover:cursor-pointer";
    let orientationClassName = "";
    if (orientation === "vertical") {
      orientationClassName += "hover:bg-dimPurple";
    }
    if (orientation === "horizontal") {
      orientationClassName += "hover:border-b-lightPurple rounded-md";
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
      orientationClassName += "m-2 shadow-md shadow-lightPurple rounded-md";
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

const LoginButton = ({ buttonText, className }) => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  const buildClassName = () => {
    const defaultClassName = `border px-4 py-2 font-semibold rounded-md bg-darkPurple hover:bg-purple text-white text-xl`;
    return `${defaultClassName} ${className}`;
  };
  return (
    <button className={buildClassName()} onClick={handleLogin}>
      {buttonText}
    </button>
  );
};

LoginButton.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
};

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
