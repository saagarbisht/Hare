import { useEffect, useState } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const mockOrders = [
      {
        _id: "2",
        createdAt: new Date(),
        shippingAddress: {
          city: "Bareilly",
          country: "India",
          pincode: "123455",
        },
        orderItems: [
          {
            name: "product",
            image: "https://picsum.photos/500/500?random=1",
          },
        ],
        totalPrice: 100,
        isPaid: true,
      },
      {
        _id: "3",
        createdAt: new Date(),
        shippingAddress: {
          city: "Bareilly",
          country: "India",
          pincode: "123455",
        },
        orderItems: [
          {
            name: "product3",
            image: "https://picsum.photos/500/500?random=3",
          },
        ],
        totalPrice: 530,
        isPaid: true,
      },
    ];
    new Promise(resolve => setTimeout(resolve,2000)).then(() => {setOrders(mockOrders)})
  }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold">My Orders</h1>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500 table-auto">
            <thead className="bg-gray-100 text-[12px] md:text-sm uppercase text-gray-700">
              <tr>
                <th className="py-2 px-4 sm:py-3">Image</th>
                <th className="py-2 px-4 sm:py-3">Order ID</th>
                <th className="py-2 px-4 sm:py-3">Date</th>
                <th className="py-2 px-4 sm:py-3">Address</th>
                <th className="py-2 px-4 sm:py-3">Items</th>
                <th className="py-2 px-4 sm:py-3">Price</th>
                <th className="py-2 px-4 sm:py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-base">
              {orders.length > 0 ? (
                <>
                  {orders.map((order) => (
                    <tr
                      key={order._id}
                      className="border-b hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="p-2 sm:p-4">
                        <img
                          src={order.orderItems[0].image}
                          alt={order.orderItems[0].name}
                          className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                        />
                      </td>
                      <td className="p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap">
                        #{order._id}
                      </td>
                      <td className="p-2 sm:p-4">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-2 sm:p-4 whitespace-break-spaces">
                        {order.shippingAddress ? (
                          <>
                            <p>
                              {order.shippingAddress.city},{" "}
                              {order.shippingAddress.country}{" "}
                              <span className="block text-xs">
                                Pincode : {order.shippingAddress.pincode}
                              </span>
                            </p>
                          </>
                        ) : (
                          "N/A"
                        )}
                      </td>
                      <td className="p-2 sm:p-4">{order.orderItems.length}</td>
                      <td className="p-2 sm:p-4">&#8377;{order.totalPrice}</td>
                      <td className="p-2 sm:p-4">
                        <span
                          className={`${
                            order.isPaid
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          } px-2 py-1 rounded-full text-xs sm:text-sm`}
                        >
                          {order.isPaid ? "Paid" : "Pending"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  <tr>
                    <td colSpan={7} className="p-4 text-center text-gray-500">
                      You have no orders
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
