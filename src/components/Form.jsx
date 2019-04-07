import React from "react";
import useForm from "../hooks/useForm";

function Form({ initialValues, validationSchema }) {
  const [values, onChange, onBlur] = useForm(initialValues, validationSchema);
  const fieldNames = Object.keys(initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  const inputList = fieldNames.map((field, idx) => {
    return (
      <>
        <label htmlFor={field} key={`label-${field}`}>
          {field}
        </label>
        <input
          type="text"
          key={`field-${field}`}
          name={field}
          value={values[field]}
          onChange={onChange}
          onBlur={onBlur}
        />
      </>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      {inputList}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
