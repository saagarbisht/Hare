import { Link } from "react-router"
import featured from "../../assets/featured.webp"
const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="flex flex-col-reverse lg:flex-row items-center bg-orange-100 rounded-3xl">
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Comfort and Style</h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Apprel made for your everyday life</h2>
          <p className="text-gray-600 mb-6 text-lg">Discover high-quality, comfortable clothing that effortlessly blends fashion and function. Designed to make you look and feel great everyday.</p>
          <Link to="/collections/all" className="bg-black text-white py-3 px-6 rounded-full text-lg hover:bg-gray-800">Shop Now</Link>
        </div>
        <div className="lg:w-1/2">
          <img src={featured} alt="Fatured Collection" className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"/>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection