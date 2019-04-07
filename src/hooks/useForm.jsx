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

  const onBlur = e => {
    const name = e.target.name;
    const value = e.target.value;
    setTouched({
      ...touched,
      [name]: true
    });
    validate(name, value);
  };

  const validate = (name, value) => {
    validationSchema.fields[name]
      .validate(value)
      .then(valid => console.log(valid))
      .catch(err =>
        setErrors({
          ...errors,
          [name]: err.errors
        })
      );
  };

  return [values, onChange, onBlur];
}

export default useForm;
