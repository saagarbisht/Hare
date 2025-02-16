import { IoIosArrowDropleft } from "react-icons/io";
import { Link } from "react-router";

const MobileNavbar = ({ drawerOpen, toggleDrawer }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full sm:w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        drawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-6   bg-white text-orange-600">
        <div className="flex items-center justify-between w-full border-b border-b-orange-500 py-4">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button onClick={toggleDrawer}>
          <IoIosArrowDropleft className="text-2xl cursor-pointer hover:text-orange-400 transition-all duration-150" />
        </button>
        </div>
      </div>
      <div className="px-6 py-4">
        <nav className="space-y-6">
          <Link
            to="/"
            className="block text-gray-600 hover:text-orange-500 text-xl font-medium border-b border-b-gray-200 hover:border-b-orange-500 transition-all duration-200"
            onClick={toggleDrawer}
          >
            Men
          </Link>
          <Link
            to="/"
            className="block text-gray-600 hover:text-orange-500 text-xl font-medium border-b border-b-gray-200 hover:border-b-orange-500 transition-all duration-200"
            onClick={toggleDrawer}
          >
            Women
          </Link>
          <Link
            to="/"
            className="block text-gray-600 hover:text-orange-500 text-xl font-medium border-b border-b-gray-200 hover:border-b-orange-500 transition-all duration-200"
            onClick={toggleDrawer}
          >
            Top wear
          </Link>
          <Link
            to="/"
            className="block text-gray-600 hover:text-orange-500 text-xl font-medium border-b border-b-gray-200 hover:border-b-orange-500 transition-all duration-200"
            onClick={toggleDrawer}
          >
            Bottom wear
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
