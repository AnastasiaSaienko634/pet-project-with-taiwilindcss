import { SlArrowLeft } from "react-icons/sl";
import { Balance } from "../components/Balance";
import { PaymentCards } from "../components/PaymentCards";

export function Home() {
  return (
    <>
      {" "}
      <div className="container bg-white w-80 h-160 mx-auto mt-10 sm:mt:2 rounded-2xl  ">
        <header className=" flex h-16 bg-white rounded-t-2xl">
          <button className=" flex px-5 py-5 items-center text-25 font-medium cursor-pointer">
            <SlArrowLeft className="w-5 h-5 mx-2 fill-gray-400 cursor-pointer " />
            Wallet
          </button>
        </header>
        <Balance />
        <PaymentCards />
      </div>
    </>
  );
}
