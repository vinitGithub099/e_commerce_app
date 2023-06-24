import React, { useRef } from "react";
import _ from "underscore";
import PasswordStrengthIndicator from "../PasswordStrengthIndicator";

export default function Input({ field, handleChange }) {
  // const {
  //   type,
  //   label,
  //   defaultValue,
  //   name,
  //   options,
  //   className,
  //   required,
  //   placeholder,
  // } = field;
  switch (field.type) {
    case "email":
      return (
        <EmailInput
          // label={label}
          // name={name}
          // defaultValue={defaultValue || ""}
          onChange={handleChange}
          // className={className}
          // required={required}
          // placeholder={placeholder}
          {...field}
        ></EmailInput>
      );
    case "textArea":
      return (
        <TextArea
          // label={label}
          // name={name}
          // defaultValue={defaultValue || ""}
          onChange={handleChange}
          // className={className}
          // required={required}
          // placeholder={placeholder}
          {...field}
        ></TextArea>
      );
    case "text":
      return (
        <TextInput
          // label={label}
          // name={name}
          // defaultValue={defaultValue || ""}
          onChange={handleChange}
          // className={className}
          // required={required}
          // placeholder={placeholder}
          {...field}
        ></TextInput>
      );
    case "select":
      return (
        <SelectInput
          // label={label}
          // name={name}
          // defaultValue={defaultValue || ""}
          onChange={handleChange}
          // className={className}
          // options={options}
          // required={required}
          {...field}
        ></SelectInput>
      );
    case "password":
      return (
        <Password
          // label={label}
          // name={name}
          // defaultValue={defaultValue || ""}
          onChange={handleChange}
          // className={className}
          // options={options}
          // required={required}
          // placeholder={placeholder}
          {...field}
        ></Password>
      );
    default:
      return null;
  }
}

const TextInput = ({
  type,
  label,
  name,
  defaultValue,
  onChange,
  className,
  placeholder,
  required,
}) => (
  <div>
    {_.isEmpty(label) ? <label htmlFor={name}>{label}</label> : null}
    <input
      type={type}
      id={name}
      name={name}
      defaultValue={defaultValue || ""}
      onChange={onChange}
      placeholder={placeholder ? placeholder : ""}
      className={`w-full border border-lightGray bg-blue-0 p-2 my-2 outline-none ${className}`}
      required={required}
    />
  </div>
);

const EmailInput = ({
  type,
  label,
  name,
  defaultValue,
  onChange,
  className,
  placeholder,
  required,
}) => (
  <div>
    {_.isEmpty(label) ? <label htmlFor={name}>{label}</label> : null}
    <input
      type={type}
      id={name}
      name={name}
      defaultValue={defaultValue || ""}
      onChange={onChange}
      placeholder={placeholder ? placeholder : ""}
      className={`w-full border border-lightGray bg-blue-0 p-2 my-2 outline-none ${className}`}
      required={required}
    />
  </div>
);

const SelectInput = ({
  label,
  name,
  defaultValue,
  onChange,
  options,
  className,
  required,
}) => (
  <div>
    {_.isEmpty(label) ? <label htmlFor={name}>{label}</label> : null}
    <select
      id={name}
      name={name}
      defaultValue={defaultValue || ""}
      onChange={onChange}
      className={`w-full border border-lightGray bg-blue-0 p-2 my-2 outline-none ${className}`}
      required={required}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const Password = ({
  type,
  label,
  name,
  defaultValue,
  onChange,
  className,
  placeholder,
  required,
  showPassWordStrength,
}) => {
  const passwordRef = useRef(null);

  return (
    <div>
      {_.isEmpty(label) ? <label htmlFor={name}>{label}</label> : null}
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        onChange={onChange}
        placeholder={!_.isEmpty(placeholder) ? placeholder : ""}
        className={`w-full border border-lightGray bg-blue-0 p-2 my-2 outline-none ${className}`}
        required={required}
        ref={passwordRef}
      />
      {showPassWordStrength ? (
        <PasswordStrengthIndicator
          password={passwordRef.current?.value}
        ></PasswordStrengthIndicator>
      ) : null}
    </div>
  );
};
