import React from "react";
import Form from "./Form";

import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  age: ""
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email()
    .required("Required"),
  age: Yup.number()
    .typeError("Invalid number")
    .positive("Must be a positive number")
    .required("Required"),
  password: Yup.string()
});

function Main() {
  return (
    <>
      <Form initialValues={initialValues} validationSchema={validationSchema} />
    </>
  );
}

export default Main;
