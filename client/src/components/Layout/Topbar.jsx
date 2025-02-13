import { Link } from "react-router";
import { PiInstagramLogo, PiMetaLogoBold } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="fixed w-full bg-orange-500 text-white z-50">
      <div className="w-full max-w-7xl mx-auto sm:px-4">
        <div className="flex justify-between items-center py-2">
          <div className="hidden sm:flex items-center space-x-4">
            <Link to="#" className="hover:text-gray-300">
              <PiMetaLogoBold className="size-5"/>
            </Link>
            <Link to="#" className="hover:text-gray-300">
              <PiInstagramLogo  className="size-5"/>
            </Link>
            <Link to="#" className="hover:text-gray-300">
              <RiTwitterXFill className="size-4"/>
            </Link>
          </div>
          <div className="text-sm text-center flex-1">
            <span>
              We ship worldwide - Fast and reliable shipping!
            </span>
          </div>
          <div className="hidden text-sm sm:inline-block">
            <a href="tel:+1234567890" className="hover:text-gray-300">+1 (234) 567-890</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar