import React, { useState } from "react";
import yup from "yup";

function useForm(initialValues, validationSchema) {
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
    validationSchema
      .validate(values)
      .then(valid => console.log(values))
      .catch(err => {
        setErrors({
          ...errors,
          [err.path]: err.errors
        });
      });
  };

  return [values, errors, touched, onChange, onBlur, onFocus, onSubmit];
}

export default useForm;
