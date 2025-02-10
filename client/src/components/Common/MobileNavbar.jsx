import { IoIosArrowDropleft } from "react-icons/io";
import { Link } from "react-router";

const MobileNavbar = ({ drawerOpen, toggleDrawer }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full sm:w-80 bg-white shadow-lg z-50 transform transition-transform duration-200 flex flex-col ${
        drawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between  items-center px-4 py-3 border-b border-b-gray-200">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button onClick={toggleDrawer}>
          <IoIosArrowDropleft className="size-6 cursor-pointer" />
        </button>
      </div>
      <div className="px-4 py-3">
        <nav className="space-y-5">
          <Link
            to="/"
            className="block text-gray-600 hover:text-black text-xl font-medium border-b border-b-gray-200 hover:border-b-black "
            onClick={toggleDrawer}
          >
            Men
          </Link>
          <Link
            to="/"
            className="block text-gray-600 hover:text-black text-xl font-medium border-b border-b-gray-200 hover:border-b-black "
            onClick={toggleDrawer}
          >
            Women
          </Link>
          <Link
            to="/"
            className="block text-gray-600 hover:text-black text-xl font-medium border-b border-b-gray-200 hover:border-b-black "
            onClick={toggleDrawer}
          >
            Top wear
          </Link>
          <Link
            to="/"
            className="block text-gray-600 hover:text-black text-xl font-medium border-b border-b-gray-200 hover:border-b-black "
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
