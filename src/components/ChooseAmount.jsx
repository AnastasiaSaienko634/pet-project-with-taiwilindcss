import { useState } from "react";
import { PaymentCards } from "./PaymentCards";

export function ChooseAmount() {
  const [custom, setCustom] = useState(false);
  const [customValue, setCustomValue] = useState("");
  const handleClick = () => {
    setCustom(true);
  };

  const handleAcceptClick = () => {
    if (!customValue) {
      return;
    }
    setCustom(false);
  };
  return (
    <>
      <div className="  justify-center py-1 bg-gray-100">
        <div className="bg-white">
          <h2 className="mx-5 my-1 pt-5 font-medium">Choose amount</h2>
          <ul className="grid justify-center pb-4 mx-5 gap-4 items-center flex-wrap grid-cols-3">
            <li className="flex">
              <button className="text-gray-400 cursor-pointer font-medium transition-transform duration-150 border border-gray-200  w-20 h-16 bg-white rounded-2xl hover:border-blue-400 hover:text-blue-400 hover:bg-blue-200 hover:scale-105">
                $10
              </button>
            </li>
            <li className="flex">
              <button className="text-gray-400 cursor-pointer font-medium transition-transform duration-150 border border-gray-200  w-20 h-16 bg-white rounded-2xl hover:border-blue-400 hover:text-blue-400 hover:bg-blue-200 hover:scale-105">
                $20
              </button>
            </li>
            <li>
              <button className="text-gray-400 cursor-pointer font-medium transition-transform duration-150 border border-gray-200  w-20 h-16 bg-white rounded-2xl hover:border-blue-400 hover:text-blue-400 hover:bg-blue-200 hover:scale-105">
                $50
              </button>
            </li>
            <li>
              <button className="text-gray-400 cursor-pointer font-medium transition-transform duration-150 border border-gray-200  w-20 h-16 bg-white rounded-2xl hover:border-blue-400 hover:text-blue-400 hover:bg-blue-200 hover:scale-105">
                $100
              </button>
            </li>
            <li>
              <button className="text-gray-400 cursor-pointer font-medium transition-transform duration-150 border border-gray-200  w-20 h-16 bg-white rounded-2xl hover:border-blue-400 hover:text-blue-400 hover:bg-blue-200 hover:scale-105">
                $200
              </button>
            </li>
            <li>
              <button
                className="text-gray-400 cursor-pointer font-medium transition-transform duration-150 border border-gray-200  w-20 h-16 bg-white rounded-2xl hover:border-blue-400 hover:text-blue-400 hover:bg-blue-200 hover:scale-105 focus:text-blue-400 focus:border-blue-400 focus:bg-blue-200"
                onClick={handleClick}
              >
                Custom
              </button>
            </li>
          </ul>
          {custom && (
            <label htmlFor="custom" className="block pb-2 ">
              <input
                id="custom"
                placeholder="Enter the amount..."
                className="border border-blue-200 w-40 h-10  mx-7 text-sm text-center rounded-2xl text-blue-400 outline-0 focus:border-blue-500"
                inputmode="numeric"
                name="custom"
                value={customValue}
                onChange={(e) => setCustomValue(e.target.value)}
                required
              />
              <button
                type="submit"
                onClick={handleAcceptClick}
                className="cursor-pointer text-blue-400 font-medium transition-transform duration-150 border border-gray-200  w-20 h-10 bg-white rounded-2xl hover:border-blue-200 hover:text-blue-600 hover:bg-blue-200 hover:scale-105 focus:text-blue-400 focus:border-blue-400 focus:bg-blue-200"
              >
                Accept
              </button>
            </label>
          )}
        </div>
      </div>
      <PaymentCards />
    </>
  );
}
