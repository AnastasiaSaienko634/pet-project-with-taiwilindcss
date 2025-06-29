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
    expirationdate: "",
  };

  const addCardShema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[A-Za-z]+$/, "Name must contain only letters")
      .required("Required"),
    country: Yup.string()
      .oneOf(["Germany", "USA", "Ukraine, Bolgaria"], "Invalid country")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    street: Yup.string()
      .min(3, "Street Name is too Short!")
      .max(50, "Street Name is too Long!")
      .required("Required"),
    cardNumber: Yup.string()
      .matches(/^\d{16}$/, "Card number must be 16 digits")
      .required("Required"),
    cvc: Yup.string()
      .matches(/^\d{3,4}$/, "CVC must be 3 or 4 digits")
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

        <p className="mx-4 mb-3 mt-1 font-bold">Personal Details</p>
        <Formik
          initialValues={initialValues}
          validationSchema={addCardShema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="block  ">
              <label className="mx-4 " htmlFor="name">
                Full Name
                <Field
                  id="name"
                  className="border block p-2 w-72  mx-4 rounded-sm text-sm border-gray-300"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                />
                {errors.name && touched.name ? (
                  <div className="pl-5 pt-1 text-red-500">{errors.name}</div>
                ) : null}
              </label>

              <label className="mx-1" htmlFor="country">
                Country
                <Field
                  className="border block mx-4 p-2 w-72 rounded-sm text-sm  border-gray-300"
                  name="country"
                  type="text"
                  placeholder="Your Country"
                  id="country"
                />
                {errors.country && touched.country ? (
                  <div className="pl-5 pt-1 text-red-500">{errors.country}</div>
                ) : null}
              </label>
              <label className="mx-4" htmlFor="street">
                Street
                <Field
                  className="border block mx-4  p-2 w-72 rounded-sm text-sm  border-gray-300"
                  name="street"
                  type="text"
                  placeholder="Your Street adress"
                  id="street"
                />
                {errors.street && touched.street ? (
                  <div className="pl-5 pt-1 text-red-500">{errors.street}</div>
                ) : null}
              </label>
              <p className="mx-4 mb-3 mt-4 font-bold">Card details</p>
              <label className="mx-4" htmlFor="cardNumber">
                Card Number
                <Field
                  className="border block mx-4  p-2 w-72 rounded-sm text-sm  border-gray-300"
                  name="cardNumber"
                  type="text"
                  placeholder="Your Card Number"
                  inputmode="numeric"
                  id="cardNumber"
                />
                {errors.cardNumber && touched.cardNumber ? (
                  <div className="pl-5 pt-1 text-red-500">
                    {errors.cardNumber}
                  </div>
                ) : null}
              </label>
              <div className="flex ">
                <label className="text-center mb-5" htmlFor="cvc">
                  <Field
                    className="border flex ml-5 mr-2 p-2 w-20 text-center rounded-sm text-sm  border-gray-300"
                    name="cvc"
                    type="text"
                    placeholder="cvc"
                    inputmode="numeric"
                    id="cvc"
                  />
                  {errors.cvc && touched.cvc ? (
                    <div className="pl-5 pt-1 text-red-500">{errors.cvc}</div>
                  ) : null}
                </label>
                <label htmlFor="expirationdate">
                  <Field
                    className="border flex mx-2  p-2 w-20 text-center rounded-sm text-sm  border-gray-300"
                    name="expirationdate"
                    type="text"
                    placeholder="MM/YY"
                    id="expirationdate"
                  />
                </label>
              </div>
              <button
                className="cursor-pointer block px-5  mx-4 my-1 p-1 border rounded-sm border-blue-200 bg-blue-200/50 hover:border-blue-400 hover:bg-blue-400"
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
