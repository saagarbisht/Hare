import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router";
import Slider from "react-slick";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useRef } from "react";
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
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container pt-10">
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Explore New Arrivals
        </h2>
        <p className="text-gray-600 font-medium text-sm">
          Discover the latest syles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {newArrivals.map((product) => (
            <Link key={product._id} className="product-card px-1 sm:px-2" to={`/product/${product._id}`}>
              <img
                src={product.images[0].url}
                alt={product.images[0].altText}
                className="w-full h-96 object-cover aspect-square"
              />
              <div className="py-2 px-4 border border-gray-200 flex  items-center">
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm font-medium">&#8377;{product.price}</p>
                </div>
                <div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
        <div>
          <button
            onClick={previous}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 border p-2 rounded-full"
          >
            <FaChevronLeft className="size-6" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 border p-2 rounded-full"
          >
            <FaChevronRight className="size-6" />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NewArrivals;
