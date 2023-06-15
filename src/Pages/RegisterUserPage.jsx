import { Link } from "react-router-dom";
import loginImage from ".././assets/6310507.jpg";
import AppLogo from "../components/AppLogo";
import LoginForm from "../components/LoginForm";

/**
 * * TODO: Fix the ui of login page with functionality, deadline: 12-06-23
 */
export default function RegisterUserPage() {
  return (
    <div className="w-full min-h-screen flex items-center bg-white md:bg-light-gray">
      <section className="w-full sm:w-2/3 h-2/3 mx-auto flex bg-white">
        <LeftSlide></LeftSlide>
        <RightSlide></RightSlide>
      </section>
    </div>
  );
}

const LeftSlide = () => {
  return (
    <div className="w-full lg:w-1/2 mx-auto px-8 py-8 border border-light-gray">
      <div className="mb-8 flex justify-center">
        <AppLogo></AppLogo>
      </div>
      <h1 className="text-2xl font-semibold flex justify-center">Sign in</h1>
      <div className="w-full flex items-center justify-center mb-8 text-sm">
        <p>{`Don't have an account ?`}</p>
        <Link className="py-2 font-semibold text-darkPurple px-2">Sign up</Link>
      </div>
      <LoginForm className=""></LoginForm>
    </div>
  );
};

const RightSlide = () => {
  return (
    <div className="w-1/2 hidden lg:flex border border-light-gray">
      <img className="object-cover" src={loginImage} alt=""></img>
    </div>
  );
};
