import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import { FaSearch, FaShoppingBasket, FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";
import userImg from "../assets/userImg.png";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, setUser, navigate, search, setSearch, setShowUserLogin, getCartItemCount } = useContext(ShopContext);
  const dropdownRef = useRef();

  const toggleMenu = () => setMenuOpened(!menuOpened);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <header className="bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-tertiary font-pop text-3xl font-bold uppercase">
          ShopEasy.
        </Link>

        <nav className="hidden lg:flex">
          <Navbar setMenuOpened={setMenuOpened} />
        </nav>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden sm:flex items-center border border-gray-300 rounded-full px-2 py-2 shadow-sm">
            <input
              type="search"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent w-40 sm:w-56 outline-none text-sm text-tertiary"
            />
            <FaSearch className="text-black-500 ml-2 cursor-pointer" />
          </div>

          <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
            <FaShoppingBasket size={24} className="text-tertiary" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {getCartItemCount()}
              </span>
            )}
          </div>

          {user ? (
            <div className="relative group" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="flex items-center gap-2">
                <img
                  src={user.photoURL || userImg} 
                  alt="user"
                  className="w-8 h-8 rounded-full object-cover cursor-pointer"
                />
              </button>
        
              <span className="absolute left-1/2 -translate-x-1/2 top-12 px-3 py-1 text-sm text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {user?.name || "User"}
              </span>
          
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-200 border-gray-200 font-semibold shadow-lg rounded-md py-2 z-50">
                  <ul className="flex flex-col text-sm">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => { navigate('/my-orders'); setDropdownOpen(false); }}
                    >
                      Orders
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowUserLogin(true)}
              className="bg-black text-white cursor-pointer text-sm font-medium px-4 py-1.5 md:ml-4 rounded-full shadow hover:bg-primary transition duration-200"
            >
              Login
            </button>
          )}


          <div className="lg:hidden">
            {menuOpened ? (
              <FaBarsStaggered onClick={toggleMenu} className="text-xl cursor-pointer text-tertiary" />
            ) : (
              <FaBars onClick={toggleMenu} className="text-xl cursor-pointer text-tertiary" />
            )}
          </div>
        </div>
      </div>

      {menuOpened && (
        <div className="lg:hidden bg-white shadow-md px-4 py-3">
          <ul className="flex flex-col gap-2">
            {[{ path: '/', title: "Home" }, { path: '/Collection', title: "Collections" }, { path: '/UserExperiences', title: "User Experiences" }, { path: '/Contact', title: "Contact" }].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpened(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md font-semibold uppercase tracking-wide ${
                      isActive ? 'text-black-600 underline' : 'text-gray-700 hover:text-gray-500'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
