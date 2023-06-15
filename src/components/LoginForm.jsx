import PropTypes from "prop-types";
import { useContext, useEffect, useReducer, useState } from "react";
import _ from "underscore";
import { AppContext } from "../Context/AppContext";
import { userReducer } from "../Reducers/reducer";
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

export default function LoginForm({ className }) {
  const { userInitialState } = useContext(AppContext);
  const [state, dispatch] = useReducer(userReducer, userInitialState);
  const [formFields, setFormFields] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  console.log(state);
  const buildClassName = (instanceClassName) => {
    const defaultClassName = "flex flex-col";
    return `${defaultClassName} ${className} ${instanceClassName}`;
  };
  const loginUser = (loginUserData) =>
    authAPI
      .loginUser(loginUserData)
      .then((res) => {
        console.log("res: ", res);
        dispatch({ type: "set_user_data", payload: res });
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg("Invalid Credentials!");
      });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formFields);
  };

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  useEffect(() => console.log(formFields), [formFields]);

  return (
    <form className={buildClassName(``)} onSubmit={handleSubmit}>
      {inputFields && inputFields.length ? (
        inputFields.map((inputField, index) => (
          <Input
            key={index}
            {...inputField}
            handleChange={handleChange}
          ></Input>
        ))
      ) : (
        <FormFallBack></FormFallBack>
      )}
      {inputFields && inputFields.length && (
        <div className="mb-4">
          <LoginButton></LoginButton>
          <p className="py-2 text-sm text-center font-semibold text-lightPurple hover:text-darkPurple hover:cursor-pointer">
            Forgot password?
          </p>
        </div>
      )}
      <ErrorMessage errorMsg={errorMsg}></ErrorMessage>
    </form>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string,
};

const Input = (props) => {
  const { type, name, placeholder, htmlFor, required, handleChange } = props;

  return (
    <input
      className="w-full mb-8 p-2 border-b outline-none"
      type={type}
      name={name}
      placeholder={placeholder}
      htmlFor={htmlFor}
      required={required}
      onChange={handleChange}
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
  handleChange: PropTypes.func,
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

const ErrorMessage = ({ errorMsg }) =>
  !_.isEmpty(errorMsg) && <p className="my-4 text-error text-md">{errorMsg}</p>;

ErrorMessage.propTypes = {
  errorMsg: PropTypes.string,
};
