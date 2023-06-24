import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Form({
  className,
  fields,
  buttonConfigs,
  handleSubmit,
}) {
  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formState);
  };

  return (
    <form className={`w-full ${className}`} onSubmit={handelFormSubmit}>
      {fields.map((field, index) => {
        return (
          <Input key={index} field={field} handleChange={handleChange}></Input>
        );
      })}
      <Button {...buttonConfigs}></Button>
    </form>
  );
}
