import { Link } from "react-router";
import mensCollection from "../../assets/mens-collection.webp";
import wommensCollection from "../../assets/womens-collection.webp";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const GenderCollection = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative flex-1">
          <img
            src={wommensCollection}
            alt="womens-collection"
            className="object-cover w-full h-[340px] sm:h-[470px] md:h-[540px]"
          />
          <div className="absolute bottom-0 left-0 w-full bg-slate-200/70 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=women"
              className="text-black flex items-center justify-center hover:bg-white/80 hover:border-white transition gap-2 border border-black p-1.5 rounded-full w-36 mx-auto"
            >
              Shop Now <MdKeyboardDoubleArrowRight />
            </Link>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            src={mensCollection}
            alt="mens-collection"
            className="object-cover w-full h-[340px] sm:h-[440px] md:h-[540px]"
          />
          <div className="absolute bottom-0 left-0 w-full bg-slate-200/70 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=men"
              className="text-black flex items-center justify-center hover:bg-white/80 hover:border-white transition gap-2 border border-black p-1.5 rounded-full w-36 mx-auto"
            >
              Shop Now <MdKeyboardDoubleArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
