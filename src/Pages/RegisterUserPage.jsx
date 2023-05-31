import LoginForm from "../components/LoginForm";

export default function RegisterUserPage() {
  return (
    <section className="max-w-sm translate-y-16 bg-white mx-auto rounded-lg shadow">
      {/* upper background */}
      <div className="w-full h-40 rounded-t-lg bg-wave1 bg-no-repeat bg-cover"></div>
      <h1 className="text-2xl mb-8 px-8 py-4 font-bold text-purple">
        Login Form
      </h1>
      <LoginForm></LoginForm>
    </section>
  );
}
