import { IoIosArrowDropright } from "react-icons/io";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-92 bg-white shadow-lg z-50 transform transition-transform duration-200 flex flex-col ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between  items-center px-4 py-3 border-b border-b-gray-200">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={toggleDrawer}>
          <IoIosArrowDropright className="size-6 cursor-pointer" />
        </button>
      </div>
      <div className="flex-grow px-4 overflow-y-auto">
        <CartContent />
      </div>
      <div className="sticky bottom-0 w-full px-4 py-2 bg-white">
        <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition">
          Checkout
        </button>
        <p className="text-[12px] sm:text-sm tracking-tighter text-gray-500 mt-2 r">
          Shipping, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
