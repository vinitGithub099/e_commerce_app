import { Link } from "react-router-dom";
import AppLogo from "./AppLogo";

export default function RegisterHeader({ formType }) {
  return (
    <div className="w-full">
      <div className="mb-8 flex justify-center">
        <AppLogo></AppLogo>
      </div>
      <Heading formType={formType}></Heading>
      <FormLink formType={formType}></FormLink>
    </div>
  );
}

const Heading = ({ formType }) => {
  const heading = formType === "login" ? "Sign In" : "Sign Up";
  return (
    <h1 className="text-2xl font-semibold flex justify-center">{heading}</h1>
  );
};

const FormLink = ({ formType }) => {
  const link = formType === "login" ? "/register" : "/login";
  const linkText = formType === "login" ? "Sign Up" : "Sign In";
  const text =
    formType === "login"
      ? "Don't have an account ?"
      : "Already have an account ?";

  return (
    <div className="w-full flex items-center justify-center mb-8 text-sm">
      <p>{text}</p>
      <Link to={link} className="py-2 font-semibold text-blue-5 px-2">
        {linkText}
      </Link>
    </div>
  );
};
