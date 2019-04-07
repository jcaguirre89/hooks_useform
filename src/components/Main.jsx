import React from "react";
import Form from "./Form";

import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: ""
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email()
    .required("Required"),
  password: Yup.string()
});

function Main() {
  return (
    <Form initialValues={initialValues} validationSchema={validationSchema} />
  );
}

export default Main;
