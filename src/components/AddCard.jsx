import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
export function AddCard({ setIsOpen }) {
  const [cards, setCard] = useState([]);

  const initialValues = {
    name: "",
    country: "",
    street: "",
    cardNumber: "",
    cvc: "",
  };

  const addCardShema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    country: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    street: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    cardNumber: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    cvc: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleClick = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClick();
    }
  };

  const handleSubmit = (values) => {
    setIsOpen(false);
    setCard((prevCard) => [...prevCard, values]);
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed pb-99  bg-black/20  inset-0 flex items-center justify-center bg-opacity-30 z-50"
    >
      <div className=" px-1 mt-90  bg-white rounded-2xl shadow-lg  pb-10 ">
        <button
          onClick={handleClick}
          className="block text-red-600 cursor-pointer  mt-5 ml-auto p-1 mr-4"
        >
          <IoMdClose className="w-6 h-6 " />
        </button>

        <p className="mx-4 mb-3 mt-1">Personal Details</p>
        <Formik
          initialValues={initialValues}
          validationSchema={addCardShema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="block  ">
              <Field
                className=" border block p-2 w-72  mx-4 rounded-sm text-sm border-gray-300"
                name="name"
                type="text"
                placeholder="Full name"
              />
              {errors.name && touched.name ? (
                <div className="pl-5 pt-1 text-red-500">{errors.name}</div>
              ) : null}
              <Field
                className="border block mx-4 mt-2 p-2 w-72 rounded-sm text-sm  border-gray-300"
                name="country"
                type="text"
                placeholder="Your Country"
              />
              {errors.country && touched.country ? (
                <div className="pl-5 pt-1 text-red-500">{errors.country}</div>
              ) : null}
              <Field
                className="border block mx-4 mt-2 p-2 w-72 rounded-sm text-sm  border-gray-300"
                name="street"
                type="text"
                placeholder="Street adress"
              />
              {errors.street && touched.street ? (
                <div className="pl-5 pt-1 text-red-500">{errors.street}</div>
              ) : null}
              <p className="mx-4 mb-3 mt-4">Card details</p>
              <Field
                className="border block mx-4 mt-2 p-2 w-72 rounded-sm text-sm  border-gray-300"
                name="cardNumber"
                type="text"
                placeholder="Card Number"
                inputmode="numeric"
              />
              {errors.cardNumber && touched.cardNumber ? (
                <div className="pl-5 pt-1 text-red-500">
                  {errors.cardNumber}
                </div>
              ) : null}
              <Field
                className="border flex mx-4 mt-2 p-2 w-20 text-center rounded-sm text-sm  border-gray-300"
                name="cvc"
                type="text"
                placeholder="cvc"
                inputmode="numeric"
              />
              {errors.cvc && touched.cvc ? (
                <div className="pl-5 pt-1 text-red-500">{errors.cvc}</div>
              ) : null}

              <button
                className="cursor-pointer block px-5  mx-4 my-5 p-1 border rounded-sm border-blue-200 bg-blue-200/50 hover:border-blue-400 hover:bg-blue-400"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
