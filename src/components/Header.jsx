import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="fixed top-0 z-40 w-full bg-white">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between py-3 items-center">
          <div className="md:hidden block">
            <FaBars className="text-3xl text-[#a4a59f]" role="button" />
          </div>
          <div className="md:w-1/2">
            <Link to="/" className="text-xl font-semibold">
              Vasify
            </Link>
          </div>
          <div className="md:hidden block">
            <button className="bg-[#0119b7] text-white px-2 py-1 rounded-sm">
              Get App
            </button>
          </div>
          <div className="w-1/2 hidden md:block">
            <ul className="flex">
              <li className="mr-6">
                <Link to="/" className="underline text-lg">
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link to="#" className="text-lg">
                  Features
                </Link>
              </li>
              <li className="mr-4">
                <Link to="#" className="text-lg">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-lg">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
