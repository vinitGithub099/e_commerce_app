import loginImage from ".././assets/6310507.jpg";
import LoginForm from "../components/LoginForm";
import RegisterHeader from "../components/RegisterHeader";

/**
 * * TODO: Fix the ui of login page with functionality, deadline: 12-06-23
 */
export default function RegisterUserPage() {
  return (
    <div className="w-full min-h-screen flex items-center bg-white sm:bg-light-gray">
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
      <RegisterHeader formType={"login"}></RegisterHeader>
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
