import { Suspense } from "react"
import OrdersPage from "./OrdersPage"
import Loader from "../components/Common/Loader"

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-7xl mx-auto">
      <div className="flex-grow p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6 space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
                <p className="text-lg text-gray-600">john@example.com</p>
                <button className="w-full bg-orange-500 text-white py-2 px-4 hover:bg-orange-600">Log Out</button>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4">
            <Suspense fallback={<Loader/>}>
              <OrdersPage/>
            </Suspense>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default Profile