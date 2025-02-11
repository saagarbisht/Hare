import { useEffect, useState } from "react";
import {toast} from 'sonner';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  _id: 1,
  name: "Product Name",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  price: 100,
  originalPrice: 140,
  brand: "Product Brand",
  material: "Product Material",
  sizes: ["s", "m", "l", "xl"],
  colors: ["red", "blue", "green"],
  images: [
    {
      url: "https://picsum.photos/1500/1500?random=2",
      altText: "Product Image",
    },
    {
      url: "https://picsum.photos/1500/1500?random=3",
      altText: "Product Image2",
    },
  ],
};
const similarProducts = [
  {
    _id: 2,
    name: "Product Name 2",
    price: 120,
    images:[
      {
        url:'https://picsum.photos/1500/1500?random=4',
        altText:'Product Image'
      }
    ]
  },
  {
    _id: 3,
    name: "Product Name 3",
    price: 130,
    images:[
      {
        url:'https://picsum.photos/1500/1500?random=5',
        altText:'Product Image'
      }
    ]
    },
  {
    _id: 4,
    name: "Product Name 4",
    price: 140,
    images:[
      {
        url:'https://picsum.photos/1500/1500?random=6',
        altText:'Product Image'
      }
    ]
  },
  {
    _id: 5,
    name: "Product Name 5",
    price: 150,
    images:[
      {
        url:'https://picsum.photos/1500/1500?random=7',
        altText:'Product Image'
      }
    ]
  },
]
const ProductDetails = () => {
  const [selectedImage, setSectedImage] = useState(null);
  const [addingToCart,setAddingToCart] = useState(false);
  const [userSelected, setUserSelected] = useState({
    size: "",
    color: "",
    quantity: 1,
  });
  const handleAddToCart = () => {
    if (!userSelected.color) {
      toast.error("Please select color before adding",{duration: 1000});
      return;
    };
    if (!userSelected.size) {
      toast.error("Please select size before adding",{duration: 1000});
      return;
    };
    new Promise((resolve) => {
      setAddingToCart(true);
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      setAddingToCart(false);
      toast.success("Product added to cart",{duration: 1000});
    });
  }
  useEffect(() => {
    if (selectedProduct.images.length > 0) {
      setSectedImage(selectedProduct.images[0]?.url);
    }
  }, [selectedProduct.images]);
  return (
    <div className="p-6 mx-auto">
      <div className="bg-white p-4 sm:p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                alt={image.altText || selectedProduct.name}
                key={index}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  selectedImage === image.url
                    ? "border-black"
                    : "border-gray-300"
                }`}
                onClick={() => setSectedImage(image.url)}
              />
            ))}
          </div>
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:hidden flex overscroll-x-auto space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                alt={image.altText || selectedProduct.name}
                key={index}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  selectedImage === image.url
                    ? "border-black"
                    : "border-gray-300"
                }`}
                onClick={() => setSectedImage(image.url)}
              />
            ))}
          </div>
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 ">
              <span className="line-through">
                &#8377;{selectedProduct?.originalPrice.toFixed(2)}
              </span>
              <span className="text-xs text-black font-medium">
                {" "}
                Original Price
              </span>
            </p>
            <p className="text-xl text-gray-500 mb-2">
              &#8377;{selectedProduct.price.toFixed(2)}
              <span className="text-sm text-green-500">
                {" "}
                {(
                  (selectedProduct.price / selectedProduct.originalPrice) *
                  100
                ).toFixed(2)}
                % off{" "}
              </span>
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="mb-4 ">
              <p className="text-gray-700 mb-2">Color:</p>
              <div className="flex gap-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    onClick={() =>
                      setUserSelected({ ...userSelected, color: color })
                    }
                    key={color}
                    className={`w-8 h-8 rounded-full cursor-pointer ${
                      userSelected.color === color
                        ? "border-4 border-black"
                        : "border-gray-200"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.7)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4 ">
              <p className="text-gray-700 mb-2">Size:</p>
              <div className="flex gap-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    onClick={() =>
                      setUserSelected({ ...userSelected, size: size })
                    }
                    key={size}
                    className={`px-4 py-2 rounded border text-gray-500 border-gray-500 cursor-pointer ${
                      userSelected.size === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size.toLocaleUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-xl"
                  onClick={() =>
                    setUserSelected({
                      ...userSelected,
                      quantity:
                        userSelected.quantity > 1
                          ? userSelected.quantity - 1
                          : 1,
                    })
                  }
                >
                  -
                </button>
                <span className="text-lg">{userSelected.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-xl"
                  onClick={() =>
                    setUserSelected({
                      ...userSelected,
                      quantity: userSelected.quantity + 1,
                    })
                  }
                >
                  +
                </button>
              </div>
            </div>
            <button disabled={addingToCart} className={`bg-black text-white py-2 px-6 rounded w-full mb-4 cursor-pointer ${addingToCart&&"bg-black/50 cursor-not-allowed"}`} onClick={handleAddToCart}>
              {addingToCart ?
              (
                <span className="flex items-center justify-center gap-2">
                  <AiOutlineLoading3Quarters className="animate-spin"/> Adding to cart
                </span>
              ) :
              <span>
              Add to cart
              </span>
              }
            </button>
            <div className="mt-6 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
          <ProductGrid products={similarProducts}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
