import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function LoginButton({ buttonText, className }) {
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
}

LoginButton.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
};
