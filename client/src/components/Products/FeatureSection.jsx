import { FaBagShopping } from "react-icons/fa6";
import { HiArrowPath } from "react-icons/hi2";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
const FeatureSection = () => {
  return (
    <section className="px-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-full mb-4">
            <FaBagShopping className="text-xl"/>
            </div>
            <h4 className="tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h4>
            <p className="text-gray-600 text-sm tracking-tighter">On all order over &#8377;10,000.00 or &#36;150.00</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-full mb-4">
            <HiArrowPath  className="text-xl"/>
            </div>
            <h4 className="tracking-tighter mb-2">45 DAYS RETURN</h4>
            <p className="text-gray-600 text-sm tracking-tighter">Money back guarantee</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-full mb-4">
            <BsFillCreditCard2BackFill  className="text-xl"/>
            </div>
            <h4 className="tracking-tighter mb-2">SECURE CHECKOUT</h4>
            <p className="text-gray-600 text-sm tracking-tighter">100% secure checkout process</p>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection