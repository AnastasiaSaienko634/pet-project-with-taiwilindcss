import { NavLink } from "react-router-dom";
import { ChooseAmount } from "../components/ChooseAmount";
import { SlArrowLeft } from "react-icons/sl";
export function ShopCredit() {
  return (
    <>
      <div className="container bg-white w-80 h-160 mx-auto mt-10 sm:mt:2 rounded-2xl ">
        <header className=" flex h-16 bg-white rounded-t-2xl">
          <h1 className="flex px-5 py-5 text-25 font-medium ">
            <NavLink to="/" className="flex items-center">
              <button>
                <SlArrowLeft className="w-5 h-5 mx-2 fill-gray-400 " />
              </button>
              Wallet
            </NavLink>
          </h1>
        </header>
        <ChooseAmount />
      </div>
    </>
  );
}
