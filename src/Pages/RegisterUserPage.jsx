import LoginForm from "../components/LoginForm";

export default function RegisterUserPage() {
  return (
    <div className="w-full bg-white rounded-lg">
      <section className="max-w-md mx-auto shadow">
        {/* upper background */}
        <div className="h-40 rounded-t-lg bg-wave1 bg-no-repeat bg-cover"></div>
        <h1 className="text-2xl mb-8 px-8 py-4 font-bold text-purple">
          Login Form
        </h1>
        <LoginForm></LoginForm>
      </section>
    </div>
  );
}
