import { GiRabbit } from "react-icons/gi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState, useRef, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const mobileNavRef = useRef(null); // Create a ref for the MobileNavbar
  const menuButtonRef = useRef(null); // Create a ref for the menu button
  const cartDrawerRef = useRef(null); // Create a ref for the CartDrawer
  const cartButtonRef = useRef(null); // Create a ref for the cart button

  const toggleCartDrawer = () => {
    setCartDrawerOpen((prev) => !prev);
  };

  const toggleNavDrawer = () => {
    setNavDrawerOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    
    if (
      mobileNavRef.current && !mobileNavRef.current.contains(e.target) &&
      menuButtonRef.current && !menuButtonRef.current.contains(e.target)
    ) {
      setNavDrawerOpen(false);
    }
    
    if (
      cartDrawerRef.current && !cartDrawerRef.current.contains(e.target) &&
      cartButtonRef.current && !cartButtonRef.current.contains(e.target)
    ) {
      setCartDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 mt-9">
        <nav className="flex justify-between items-center py-3">
          <div>
            <Link
              to="/"
              className="flex items-end text-orange-600 hover:text-orange-500 transition-all duration-100"
            >
              <GiRabbit className="size-10" />
              <span className="text-xs font-bold">Hare_</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/collections/all?gender=men"
              className="text-gray-600 hover:text-black text-base font-medium "
            >
              Men
            </Link>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-600 hover:text-black text-base font-medium "
            >
              Women
            </Link>
            <Link
              to="/collections/all?category=top+wear"
              className="text-gray-600 hover:text-black text-base font-medium "
            >
              Top wear
            </Link>
            <Link
              to="/collections/all?category=bottom+wear"
              className="text-gray-600 hover:text-black text-base font-medium "
            >
              Bottom wear
            </Link>
          </div>
          <div className="flex items-center space-x-5">
            <Link to="/profile">
              <FaRegUser className="size-5 text-gray-600 hover:text-black" />
            </Link>
            <button
              ref={cartButtonRef}
              className="relative cursor-pointer"
              onClick={toggleCartDrawer}
            >
              <RiShoppingBag4Line className="w-[22px] h-[22px] text-gray-600 hover:text-black" />
              <span className="absolute text-[10px] h-4 w-4 flex items-center justify-center rounded-full bg-orange-500 text-white -top-1 -right-2">
                1
              </span>
            </button>
            <div className="overflow-hidden">
              <SearchBar />
            </div>
            <button
              ref={menuButtonRef} 
              className="md:hidden text-gray-600 hover:text-black cursor-pointer"
              onClick={toggleNavDrawer}
            >
              <MdMenuOpen className="size-6.5" />
            </button>
          </div>
        </nav>
      </div>
      
      <div ref={cartDrawerRef}>
        <CartDrawer drawerOpen={cartDrawerOpen} toggleDrawer={toggleCartDrawer} />
      </div>
      <div ref={mobileNavRef}>
        <MobileNavbar drawerOpen={navDrawerOpen} toggleDrawer={toggleNavDrawer} />
      </div>
    </>
  );
};

export default Navbar;
