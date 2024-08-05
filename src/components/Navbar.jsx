import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-between items-center relative">
        <div className="text-white font-bold text-xl">
          <img
            src="https://img1.pnghut.com/12/23/15/5Zd827QD0V/money-exchange-finance-currency-bank.jpg"
            className="h-8 w-8 inline-block mr-2"
          />
          AG-CONVERTER
        </div>

        <div className="text-white text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
          CURRENCY CONVERTER
        </div>
      </nav>
    </>
  );
};

export default Navbar;
