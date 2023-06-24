import React from "react";

export default function Button({
  type,
  label,
  handleClick,
  className,
  ...rest
}) {
  const buttonProps = { handleClick, label, className, ...rest };
  switch (type) {
    case "submit":
      return <SubmitButton {...buttonProps}>{label}</SubmitButton>;
    case "secondary":
      return <button {...buttonProps}>{label}</button>;
    case "success":
      return <button {...buttonProps}>{label}</button>;
    case "danger":
      return (
        <button {...buttonProps} className={{ backgroundColor: "red" }}>
          {label}
        </button>
      );
    default:
      return <button {...buttonProps}>{label}</button>;
  }
}

const SubmitButton = ({ label, handleClick, className, ...rest }) => {
  return (
    <button
      className={`w-full p-2 font-semibold rounded-sm bg-blue-6 hover:bg-blue-5 text-white text-md ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </button>
  );
};
