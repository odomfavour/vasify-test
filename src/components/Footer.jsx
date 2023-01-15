import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-wrap justify-between py-7">
        <div className="md:w-1/4 w-full mb-5 md:mb-3">
          <h4 className="text-xl font-semibold mb-6">Vasify</h4>
          <p className="text-base mb-5">
            Track and monitor your vaccination and medication anywhere
          </p>
          <div className="flex mt-4">
            <BsInstagram className="text-3xl mr-3"/>
            <BsTwitter className="text-3xl mr-3"/>
          </div>
        </div>
        <div className="md:w-1/5 w-1/2 mb-5 md:mb-3">
          <h4 className="text-xl font-semibold mb-6">Explore</h4>
          <ul>
            <li className="mb-4">
              <Link to="#" className="text-base">
                Features
              </Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="text-base">
                About Us
              </Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="text-base">
                FAQS
              </Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="text-base">
                Content
              </Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="text-base">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/5 w-1/2 mb-5 md:mb-3">
          <h4 className="text-xl font-semibold mb-6">Legal</h4>
          <ul>
            <li className="mb-4">
              <Link to="#" className="text-base">
                Privacy policy
              </Link>
            </li>
            <li className="mb-4">
              <Link to="#" className="text-base">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4 w-full mb-5 md:mb-3">
          <h4 className="text-xl font-semibold mb-6">Subscribe</h4>
          <p>Subscribe to get the latest news and stories from us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
