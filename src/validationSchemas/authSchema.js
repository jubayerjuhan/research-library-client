import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .typeError("Please Select a Valid Email")
      .required("Email Is Required"),
    password: yup.string().required("Email Is Required"),
  })
  .required();

export const registerSchema = yup
  .object({
    email: yup
      .string()
      .typeError("Please Select a Valid Email")
      .required("Email Is Required"),
    password: yup.string().required("Email Is Required"),
    name: yup.string().required("Name Is Required"),
  })
  .required();

export default { loginSchema, registerSchema };
