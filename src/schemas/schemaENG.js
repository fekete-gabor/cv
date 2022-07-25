import * as yup from "yup";

const schemaENG = yup.object().shape({
  name: yup.string().required("Required field!"),
  email: yup
    .string()
    .email("Please enter a valid email address!")
    .required("Required field!"),
  message: yup.string().required("Required field!"),
});

export default schemaENG;
