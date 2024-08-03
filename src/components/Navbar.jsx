import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <img
            src="https://img1.pnghut.com/12/23/15/5Zd827QD0V/money-exchange-finance-currency-bank.jpg"
            className="h-8 w-8 inline-block mr-2"
          />
          AG-CONVERTER
        </div>

        <div className="text-white text-lg font-semibold">
          CURRENCY CONVERTER
        </div>

        <div className="">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mr-4 ">
            SIGN UP{" "}
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            SIGN IN{" "}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
