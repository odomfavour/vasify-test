import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-wrap justify-between py-7">
        <div className="md:w-1/4 w-full mb-5 md:mb-3">
          <h4 className="text-xl font-semibold mb-6 md:text-left text-center">Vasify</h4>
          <p className="text-base font-light mb-5">
            Track and monitor your vaccination and medication anywhere
          </p>
          <div className="flex mt-4">
            <BsInstagram className="text-3xl mr-3" />
            <BsTwitter className="text-3xl mr-3" />
          </div>
        </div>
        <div className="md:w-1/5 w-1/2 mb-5 md:mb-3">
          <h4 className="text-xl font-semibold mb-6">Explore</h4>
          <ul>
            <li className="mb-4">
              <Link to="#" className="text-base font-light">
                Features
              </Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="text-base font-light">
                About Us
              </Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="text-base font-light">
                FAQS
              </Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="text-base font-light">
                Content
              </Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="text-base font-light">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/5 w-1/2 mb-5 md:mb-3">
          <h4 className="text-xl font-semibold mb-6">Legal</h4>
          <ul>
            <li className="mb-4">
              <Link to="#" className="text-base font-light">
                Privacy policy
              </Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="text-base font-light">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4 w-full mb-5 md:mb-3">
          <h4 className="text-xl font-semibold mb-6 md:text-left text-center">Subscribe</h4>
          <p className="text-base font-light mb-3 md:text-left text-center">Subscribe to get the latest news and stories from us</p>
          <div className="flex">
            <input type="text" className="border border-blue-300"/>
            <button className="bg-[#addde9] text-black px-2 font-semibold">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
