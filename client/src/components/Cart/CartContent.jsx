import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const cartProducts = [
  {
    id: 1,
    name: "Product Name",
    price: 100,
    quantity: 1,
    image:'https://picsum.photos/200?radom=1',
    size:"M",
    color:"black"
  },
  {
    id: 2,
    name: "Product Name",
    price: 100,
    quantity: 1,
    image:'https://picsum.photos/200?radom=2',
    size:"L",
    color:"blue"
  },
  {
    id: 3,
    name: "Product Name",
    price: 100,
    quantity: 1,
    image:'https://picsum.photos/200?radom=3',
    size:"M",
    color:"black"
  },
  {
    id: 4,
    name: "Product Name",
    price: 100,
    quantity: 1,
    image:'https://picsum.photos/200?radom=4',
    size:"L",
    color:"blue"
  },
  {
    id: 5,
    name: "Product Name",
    price: 100,
    quantity: 1,
    image:'https://picsum.photos/200?radom=5',
    size:"M",
    color:"black"
  },
  {
    id: 6,
    name: "Product Name",
    price: 100,
    quantity: 1,
    image:'https://picsum.photos/200?radom=6',
    size:"L",
    color:"blue"
  },

]
const CartContent = () => {
  return (
    <div>
      {cartProducts.map((product) => (
        <div key={product.id} className="flex items-start justify-between py-4 border-b border-gray-100">
          <div className="flex items-start space-x-3">
            <img src={product.image} alt={product.name} className="w-15 h-18 object-cover rounded" />
            <div>
              <h3 className="text-sm font-semibold">{product.name.slice(0,14)}</h3>
              <p className="text-sm text-gray-500">{product.size} | color : {product.color}</p>
              <div className="flex items-center space-x-4 mt-1">
                <button className="border rounded px-2 py-1">
                  <FaMinus className="size-2.5" />
                </button>
                <span>{product.quantity}</span>
                <button className="border rounded px-2 py-1">
                  <FaPlus className="size-2.5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <div className="text-base font-semibold">&#8377;{product.price}</div>
            <button className="text-xs text-orange-600 hover:text-orange-500">
              <AiOutlineDelete className="size-5"/>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartContent