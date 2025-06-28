import { GoPlus } from "react-icons/go";
import { PiCoins } from "react-icons/pi";
import { NavLink } from "react-router-dom";
export function Balance() {
  return (
    <>
      <div className=" flex bg-gray-100 w-full m-0 p-0  ">
        <div className="mx-auto w-70 h-40 justify-center m-10 bg-white rounded-2xl">
          <h2 className="text-gray-500 font-middle px-6 pt-4">Your Balance</h2>
          <h3 className="flex  gap-3 py-3 px-6 text-2xl font-bold">
            <PiCoins className="fill-amber-400 w-8 h-8 " />
            $10.000.000
          </h3>
          <NavLink
            className="flex items-center text-white cursor-pointer  mx-auto justify-center py-2 w-55 h-11 bg-blue-600 rounded-2xl  ease-in-out hover:bg-blue-900 hover:scale-105"
            to="/credits"
          >
            <GoPlus className="fill-white w-5 h-5 justify-center mx-2" /> Buy
            credits
          </NavLink>
        </div>
      </div>
    </>
  );
}
