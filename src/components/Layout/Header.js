import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sign from "../../pages/Sign";
import Logo from "./Logo";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className="text-gray-600 body-font bg-indigo-500 p-2">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex items-center w-full md:w-auto justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex title-font font-medium items-center text-gray-900 md:mb-0"
              >
                <Logo />
                <span className="ml-3 text-xl font-bold text-xl text-white">
                  Portfolio Survey
                </span>
              </Link>
            </div>
            <button
              className=" md:hidden focus:outline-none mr-2 "
              onClick={toggleMenu}
            >
              <FaBars className="text-white text-2xl" />
            </button>
          </div>
          <nav
            className={`md:ml-auto md:flex justify-center w-full md:w-auto ${
              showMenu ? "flex" : "hidden"
            }`}
          >
            <Link to="/first-link" className="nav-link">
              First Link
            </Link>
            <Link to="/second-link" className="nav-link">
              Second Link
            </Link>
            <span onClick={toggleModal} className="nav-link cursor-pointer">
              <span className="items-center bg-white border-0 p-1 focus:outline-none hover:bg-gray-200 rounded text-base">
                <span className="text-indigo-500 font-bold">Sign In</span>
              </span>
            </span>
          </nav>
        </div>
      </header>
      {showModal && <Sign close={toggleModal} />}
    </>
  );
}

export default Header;
