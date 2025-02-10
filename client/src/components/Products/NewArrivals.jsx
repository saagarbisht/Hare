import { HiChevronDoubleRight } from "react-icons/hi2";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { Link } from "react-router";
import { useRef, useState } from "react";
const newArrivals = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Product 1",
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
        altText: "Product 2",
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
        altText: "Product 3",
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
        altText: "Product 4",
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
        altText: "Product 5",
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
        altText: "Product 6",
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
        altText: "Product 7",
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
        altText: "Product 8",
      },
    ],
  },

];
const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  return <section className="relative">
    <h2 className="text-3xl font-bold mb-4 text-center">Explore New Arrivals</h2>
    <p className="text-lg text-gray-600 mb-8 text-center">
      Disover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion. 
    </p>
    <div className="absolute right-4 top-0  flex space-x-4">
      <button className="p-2 rounded border bg-white text-black">
      <HiOutlineChevronDoubleLeft className="size-5"/>
      </button>
      <button className="p-2 rounded border bg-white text-black">
      <HiChevronDoubleRight className="size-5"/>
      </button>
    </div>
    <div ref={scrollRef} className="mx-auto overflow-x-scroll flex space-x-6 relative px-4">
      {newArrivals.map(product => (
        <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img src={product.images[0]?.url} alt={product.images?.altText || product.name} className="w-full h-[420px] object-cover rounded-lg"/>
            <div className="absolute bottom-0 left-0 right-0 bg-white/50 p-4 backdrop-blur-md text-white rounded-b-lg">
              <Link to={`/product/${product._id}`}>
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">&#8377;{product.price}</p>
              </Link>
            </div>
        </div>
      ))}
    </div>
  </section>;
};

export default NewArrivals;
