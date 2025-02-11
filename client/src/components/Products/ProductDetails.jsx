import { useEffect, useState } from "react";

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
const ProductDetails = () => {
  const [selectedImage, setSectedImage] = useState("");
  const [userSelected, setUserSelected] = useState({
    size: "",
    color: "",
    quantity: 1,
  });
  useEffect(() => {
    if (selectedProduct.images.length > 0) {
      setSectedImage(selectedProduct.images[0]?.url);
    }
  }, [selectedProduct.images]);
  return (
    <div className="p-6">
      <div className="max-w-6xl auto bgwhite p-4 sm:p-8 rounded-lg">
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
            <button className="bg-black text-white py-2 px-6 rounded w-full mb-4 cursor-pointer">
              ADD TO CART
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
      </div>
    </div>
  );
};

export default ProductDetails;
