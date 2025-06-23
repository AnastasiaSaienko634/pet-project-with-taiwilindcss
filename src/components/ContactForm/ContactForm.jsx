import css from "./ContactForm.module.css";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

export default function ContactForm({ handelContactFrom }) {
  const id = useId();

  const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short").max(50, "Too Long").required(),
    number: Yup.string().min(3, "Too Short").max(50, "Too Long").required(),
  });
  return (
    <>
      <Formik
        validationSchema={contactSchema}
        initialValues={{ name: "", number: "" }}
        onSubmit={handelContactFrom}
      >
        <Form className={css.form}>
          <label htmlFor={id} className={css.formlabel}>
            Name
            <Field type="text" name="name" id={id} className={css.formInput} />
            <ErrorMessage
              name="name"
              component="span"
              className={css.schemaName}
            />
          </label>
          <label htmlFor={id} className={css.formlabel}>
            Number
            <Field
              type="text"
              name="number"
              id={id}
              className={css.formInput}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.schemaNumber}
            />
          </label>
          <button type="submit" className={css.formButton}>
            Add concat
          </button>
        </Form>
      </Formik>
    </>
  );
}
