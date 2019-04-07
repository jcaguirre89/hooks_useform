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

const initialValuesB = {
  Country: "",
  Age: ""
};

const validationSchemaB = Yup.object().shape({
  Country: Yup.string().required("Required"),
  Age: Yup.number("Must be a number")
    .positive("Must be positve")
    .required("Required")
});

function Main() {
  return (
    <>
      <Form initialValues={initialValues} validationSchema={validationSchema} />
      <Form
        initialValues={initialValuesB}
        validationSchema={validationSchemaB}
      />
    </>
  );
}

export default Main;
