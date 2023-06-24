import Form from "./Form/Form";
import RegisterHeader from "./RegisterHeader";

const inputFields = [
  {
    className: "",
    type: "email",
    name: "username",
    label: "",
    placeholder: "Username or Email Address",
    required: true,
  },
  {
    className: "",
    type: "password",
    name: "password",
    placeholder: "*******",
    label: "",
    required: true,
    showPassWordStrength: true,
  },
];

const buttonConfigs = {
  label: "Submit",
  type: "submit",
  className: "my-4",
};

export default function SignUpForm({ className }) {
  const buildClassName = (instanceClassName) => {
    const defaultClassName = "w-full min-h-screen bg-white sm:bg-light-gray";
    return `${defaultClassName} ${className} ${instanceClassName}`;
  };

  const handleSubmit = (formState) => {
    console.log(formState);
  };

  return (
    <div className={buildClassName(``)}>
      <section className="mx-auto mt-40 max-w-lg p-8 bg-white shadow-sm">
        <RegisterHeader formType={"register"}></RegisterHeader>
        <Form
          className={``}
          fields={inputFields}
          buttonConfigs={buttonConfigs}
          handleSubmit={handleSubmit}
        ></Form>
      </section>
    </div>
  );
}
