import React, { useState } from "react";
import yup from "yup";

function useForm(initialValues, validationSchema) {
  const [formValid, setFormValid] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value
    });
  };

  const onFocus = e => {
    const name = e.target.name;
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const onBlur = e => {
    const name = e.target.name;
    const value = e.target.value;
    validate(name, value);
  };

  const validate = (name, value) => {
    validationSchema.fields[name]
      .validate(value)
      .then(valid => {
        let newErrors = Object.assign({}, errors);
        delete newErrors[name];
        setErrors(newErrors);
      })
      .catch(err =>
        setErrors({
          ...errors,
          [name]: err.errors
        })
      );
  };

  const onSubmit = () => {
    // Validate all fields
    validationSchema.validate(values).catch(err => {
      setFormValid(false);
      console.log(err);
      setErrors({
        ...errors,
        [err.path]: err.errors
      });
    });
    !formValid || Object.keys(errors).length > 0
      ? console.log("There are errors in the form")
      : console.log(values);
  };

  return [
    values,
    errors,
    touched,
    formValid,
    onChange,
    onBlur,
    onFocus,
    onSubmit
  ];
}

export default useForm;
