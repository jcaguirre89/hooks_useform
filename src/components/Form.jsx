import React from "react";
import useForm from "../hooks/useForm";

function Form({ initialValues, validationSchema }) {
  const [
    values,
    errors,
    touched,
    formValid,
    onChange,
    onBlur,
    onFocus,
    onSubmit
  ] = useForm(initialValues, validationSchema);
  const fieldNames = Object.keys(initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
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
          onFocus={onFocus}
        />
        {errors && errors[field] && <span>{errors[field]}</span>}
      </>
    );
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputList}
        <button type="submit">Submit</button>
      </form>
      <pre>
        {JSON.stringify({ values, errors, touched, formValid }, null, 2)}
      </pre>
    </>
  );
}

export default Form;
