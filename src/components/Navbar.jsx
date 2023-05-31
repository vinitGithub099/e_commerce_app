import PropTypes from "prop-types";
import { useState } from "react";
import appIcon from "../assets/shopping_cart.png";
import { CloseIcon, Hamburger } from "../icons/Icons";

const navLinks = [
  { name: "Home" },
  { name: "About" },
  { name: "Products" },
  { name: "Carts" },
];

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const handleToggleMenu = () => setToggleMenu((prev) => !prev);
  return (
    <nav className="shadow-sm shadow-purple">
      <div className="py-2 px-2 sm:px-6 flex flex-row items-center justify-between">
        <AppLogo></AppLogo>
        <NavLinks
          className="hidden sm:flex flex-row"
          orientation={"horizontal"}
        ></NavLinks>
        <div className="flex flex-row items-center">
          <LoginButton className="mx-4" buttonText="Login"></LoginButton>
          <ToggleMenu
            className="max-sm:block hidden p-2 rounded-md hover:cursor-pointer hover:bg-dimPurple"
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            handleClick={handleToggleMenu}
          ></ToggleMenu>
        </div>
      </div>
      {!toggleMenu ? (
        <NavLinks
          className="sm:hidden text-center"
          orientation={"vertical"}
        ></NavLinks>
      ) : null}
    </nav>
  );
}

const AppLogo = () => {
  return (
    <div className="w-10 h-10 sm:w-16 sm:h-16">
      <img className="object-cover" src={appIcon} alt=""></img>
    </div>
  );
};

const NavLink = ({ link, orientation, className }) => {
  const buildClassName = () => {
    const defaultClassName =
      "border-2 border-white font-semibold px-4 py-2 hover:cursor-pointer ";
    let orientationClassName = "";
    if (orientation === "vertical") {
      orientationClassName += "hover:bg-dimPurple";
    }
    if (orientation === "horizontal") {
      orientationClassName += "hover:border-b-lightPurple";
    }
    return `${defaultClassName} ${className} ${orientationClassName} `;
  };
  return <div className={buildClassName()}>{link.name}</div>;
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
        "border-2 border-b-0 border-l-0 border-r-0 border-lightPurple";
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
  const buildClassName = () => {
    const defaultClassName = `border px-4 py-2 font-semibold rounded-md bg-darkPurple hover:bg-purple text-white text-xl`;
    return `${defaultClassName} ${className}`;
  };
  return <button className={buildClassName()}>{buttonText}</button>;
};

LoginButton.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
};

const ToggleMenu = ({ className, toggleMenu, handleClick }) => {
  return (
    <button className={`${className}`} type="button" onClick={handleClick}>
      {toggleMenu ? <Hamburger></Hamburger> : <CloseIcon></CloseIcon>}
    </button>
  );
};

ToggleMenu.propTypes = {
  className: PropTypes.string,
  toggleMenu: PropTypes.bool,
  handleClick: PropTypes.func,
};
