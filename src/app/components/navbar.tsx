import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[rgba(37,43,66,1)] text-white flex justify-between items-center p-2">
      <div className="text-2xl font-bold">BrandName</div>
      <div className="space-x-4"   style={{paddingRight: "0px", }}>
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">Product</a>
        <a href="#" className="hover:text-gray-400">Pricing</a>
        <a href="#" className="hover:text-gray-400">Contact</a>
       
        <a href="#" className="hover:text-gray-400">Login</a>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
          JOIN US
        </a>
        </div>
    </nav>
  );
};

export default Navbar;
