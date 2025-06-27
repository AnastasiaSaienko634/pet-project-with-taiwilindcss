import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Formik, Field, Form } from "formik";
import { PaymentCards } from "./PaymentCards";
export function AddCard({ setIsOpen }) {
  const handleClick = () => {
    setIsOpen(false);
  };

  const [cards, setCard] = useState([]);

  const handleSubmit = (values) => {
    setIsOpen(false);
    setCard((prevCard) => [...prevCard, values]);
  };

  return (
    <div className="fixed pb-99  bg-black/20  inset-0 flex items-center justify-center bg-opacity-30 z-50">
      <div className=" px-1 bg-white rounded-2xl shadow-lg justify-center  pb-10 ">
        <button
          onClick={handleClick}
          className="block text-red-600 cursor-pointer h-5 w-5 mt-4 ml-auto pr-10 pt-4 "
        >
          <IoMdClose />
        </button>

        <p className="mx-4 mb-3 mt-5">Personal Details</p>
        <Formik
          initialValues={{
            name: "",
            country: "",
            street: "",
            cardNumber: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="block  ">
            <Field
              className=" border block p-2 w-72  mx-4 rounded-sm text-sm border-gray-300"
              name="name"
              type="text"
              placeholder="Full name"
            />
            <Field
              className="border block mx-4 mt-2 p-2 w-72 rounded-sm text-sm  border-gray-300"
              name="country"
              type="text"
              placeholder="Your Country"
            />
            <Field
              className="border block mx-4 mt-2 p-2 w-72 rounded-sm text-sm  border-gray-300"
              name="street"
              type="text"
              placeholder="Street adress"
            />
            <p className="mx-4 mb-3 mt-4">Card details</p>
            <Field
              className="border block mx-4 mt-2 p-2 w-72 rounded-sm text-sm  border-gray-300"
              name="cardNumber"
              type="text"
              placeholder="Card Number"
            />
            <Field
              className="border flex mx-4 mt-2 p-2 w-20 text-center rounded-sm text-sm  border-gray-300"
              name="street"
              type="text"
              placeholder="cvc"
            />

            <button
              className="cursor-pointer block px-5  mx-4 my-5 p-1 border rounded-sm border-blue-200 bg-blue-200/50 hover:border-blue-400 hover:bg-blue-400"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
