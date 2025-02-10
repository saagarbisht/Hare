import { PiInstagramLogo, PiMetaLogoBold } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { MdLocalPhone } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t py-8 bg-gray-50 border-t-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg text-gray-800 font-semibold">Newsletter</h3>
            <p className="text-gray-500 leading-tight">
              Be the first to hear about new products, exclusive events, and
              online offers.
            </p>
            <p className="font-medium text-gray-600">
              Signup and get 10% off your first
            </p>
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  className="w-full p-3 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-none focus:border-gray-600 transition-all"
                  placeholder="Enter your email"
                  required
                />
                <button
                  className="text-sm bg-orange-500 text-white py-[13.15px] px-4  rounded-r-md hover:bg-orange-400 transition"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-gray-800">Shop</h3>
            <ul className="space-y-2 text-gray-500">
                <li>
                  <Link to="#" className="hover:text-black transition-colors">
                    Men's Top wear
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-black transition-colors">
                    Men's Bottom wear
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-black transition-colors">
                    Women's Top wear
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-black transition-colors">
                    Women's Bottom wear
                  </Link>
                </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-gray-800">Support</h3>
            <ul className="space-y-2 text-gray-500">
                <li>
                  <Link to="#" className="hover:text-black transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-black transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-black transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-black transition-colors">
                    Features
                  </Link>
                </li>
            </ul>
          </div>
          <div className="text-gray-500 space-y-4">
            <h3 className="text-lg text-gray-800">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <PiMetaLogoBold className="size-5"/>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <PiInstagramLogo  className="size-5"/>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <RiTwitterXFill className="size-4"/>
              </a>
            </div>
            <div className="space-y-2">
            <p className="text-gray-500">Call Us</p>
            <p className="flex items-center gap-2"><MdLocalPhone className="inline-block size-5"/>0123-456-789</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 mt-12 border-t border-gray-200">
        <p className="text-center text-gray-500 text-sm tracking-tight pt-6">&copy 2025, CompileTab. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
