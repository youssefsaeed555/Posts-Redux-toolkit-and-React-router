import * as Yup from "yup";

//initialize outside component to not reevaluate
export const formSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short Title!")
    .max(50, "Too Long Title!")
    .required("Title is Required"),
  description: Yup.string()
    .min(2, "Too Short Description!")
    .max(50, "Too Long Description!")
    .required("Description is Required"),
});
