import { GoPlus } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";
import image from "../img/images.png";
import image2 from "../img/mastercard-novo-logo-destaque.jpg";
import { useState } from "react";
import { AddCard } from "./AddCard";
export function PaymentCards() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="flex justify-between px-6 mt-4 mb-4">
        <h2 className="font-bold">Payment cards</h2>
        <button
          onClick={handleClick}
          className="cursor-pointer flex gap-1.5 items-center font-bold text-blue-600 transition-colors ease-in-out duration-150 hover:text-blue-900 hover:scale-105"
        >
          <GoPlus className="w-5 h-5 " /> Add card
        </button>
      </div>
      <div className="px-6 flex">
        <img className="w-[60px] h-10 rounded-lg" src={image} alt="Visa" />
        <h2 className="flex px-5 gap-x-2 items-center flex-wrap w-[200px] ">
          Domen Visa
          <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 rounded-3xl">
            Primary
          </span>{" "}
          <span className="text-sm font-bold text-gray-500">****6775</span>
        </h2>
        <p></p>
      </div>
      <div className="px-6 flex py-6">
        <img className="w-15 h-10 rounded-lg" src={image2} alt="Master Card" />
        <h2 className="flex px-5 gap-x-2 items-center flex-wrap ">
          Domen MC
          <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 rounded-3xl">
            Primary
          </span>{" "}
          <span className="text-sm font-bold text-gray-500">****93271</span>
        </h2>
      </div>
      <p className="flex gap-2 items-center mx-6   py-3 px-2 text-sm bg-green-200 rounded-lg animate-pulse duration-1000">
        <MdOutlineSecurity className="flex w-15 h-13 fill-green-700" />
        We're fully compliant with the Payment Card Industry Data Security
        Standards.
      </p>

      {isOpen && <AddCard isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
