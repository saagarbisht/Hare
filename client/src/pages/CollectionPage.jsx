import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
import { Link, useLocation } from "react-router";

const mockProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 300,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 400,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
      },
    ],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 600,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
      },
    ],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 500,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
      },
    ],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 700,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
      },
    ],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 800,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
      },
    ],
  },
];

const CollectionPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleFilterSidebar = (e) => {
    e.stopPropagation();
    setIsFilterSidebarOpen((prevState) => !prevState);
  };

  const handleClickOutside = (e) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsFilterSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
    }, 1000);
  }, []);
  useEffect(() => {
    window.scrollTo(0,0);
  },[location]);
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto">
      <button
        ref={buttonRef}
        className="lg:hidden border p-2 flex justify-center items-center"
        onClick={toggleFilterSidebar}
      >
        <FaFilter className="mr-2" /> Filters
      </button>
      <div
        ref={sidebarRef}
        className={`${
          isFilterSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 lg:w-52 bg-white overflow-y-auto transition-transform duration-200 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        <SortOptions />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockProducts.map((product, index) => (
            <Link key={index} to={`/product/${product._id}`} className="block">
              <div className="bg-white p-2 rounded-lg">
                <div className="w-full h-[340px] mb-4">
                  <img
                    src={product.images[0].url}
                    alt={product.images[0].altText || product.name}
                    className="w-full  h-full rounded-lg object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-sm mb-2">{product.name}</h3>
                <p className="text-gray-500 font-medium text-sm tracking-tighter">
                  &#8377;{product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
