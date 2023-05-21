import PropTypes from "prop-types";
import { authAPI } from "../apis/authAPI";
const inputFields = [
  {
    className: "",
    type: "text",
    name: "username",
    placeholder: "username",
    htmlFor: "",
    required: true,
  },
  {
    className: "",
    type: "password",
    name: "password",
    placeholder: "*******",
    htmlFor: "",
    required: true,
  },
];
const loginUser = (loginUserData) =>
  authAPI
    .loginUser(loginUserData)
    .then((res) => console.log("res: ", res))
    .catch((error) => console.log("error: ", error));

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let loginFormData = {};
    for (let [key, value] of formData.entries()) {
      loginFormData = { ...loginFormData, [key]: value };
    }
    console.log(loginFormData);
    loginUser(loginFormData);
  };

  return (
    <form className="px-8 w-full flex flex-col" onSubmit={handleSubmit}>
      {inputFields && inputFields.length ? (
        inputFields.map((inputField, index) => (
          <Input key={index} {...inputField}></Input>
        ))
      ) : (
        <FormFallBack></FormFallBack>
      )}
      <div className="mb-8">
        <LoginButton></LoginButton>
        <span className="text-xs text-lightPurple hover:text-darkPurple hover:cursor-pointer">
          Forgot password?
        </span>
      </div>
    </form>
  );
};

export default LoginForm;

const Input = (props) => {
  const { className, type, name, placeholder, htmlFor, required } = props;
  const buildClassName = (appClassName) => {
    const defaultClassName = "w-full mb-8 p-2 border-b outline-none";
    return `${defaultClassName} ${className} ${appClassName}`;
  };
  return (
    <input
      className={buildClassName(``)}
      type={type}
      name={name}
      placeholder={placeholder}
      htmlFor={htmlFor}
      required={required}
    ></input>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

const LoginButton = () => {
  return (
    <button
      className="w-full p-2 font-semibold rounded-md bg-darkPurple hover:bg-purple text-white text-xl"
      type="submit"
    >
      Login
    </button>
  );
};

const FormFallBack = () => {
  return (
    <div className="w-full mb-8 text-xl font-semibold text-error">
      Oops! Login Form not found.
    </div>
  );
};
