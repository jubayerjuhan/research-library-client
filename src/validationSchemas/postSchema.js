import * as yup from "yup";

export const postSchema = yup
  .object({
    file: yup.mixed().required("Field Is Required"),
    title: yup.string().required("Title Is Required"),
    description: yup.string().required("Description Is Required"),
    coverImage: yup.mixed().required("Field Is Required"),
  })
  .required();
