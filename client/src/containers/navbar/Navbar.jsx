import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-600 h-14 py-4 sm:px-4 md:px-72 flex  sm:gap-4 md:gap-6 justify-evenly ">
      <div className="logo">
        <span
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            padding: "0px",
            color: "#fff",
          }}
        >
          Cute Cart
        </span>
      </div>
      <div className="search flex flex-1">
        <input
          type="text"
          className="search_box flex-1
        "
        />
      </div>
      <div class="flex space-x-2 justify-center">
        <button
          type="button"
          class="inline-block px-4  bg-gray-300 text-blue-700 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
