import Hero from "../components/Layout/Hero"
import GenderCollection from "../components/Products/GenderCollection"
import NewArrivals from "../components/Products/NewArrivals"
import ProductDetails from "../components/Products/ProductDetails"

const HomePage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col space-y-12 pb-6">
      <Hero/>
      <GenderCollection/>
      <NewArrivals/>

      <div>
        <h2 className="px-4 text-3xl font-bold text-center">Best Seller</h2>
        <ProductDetails/>
      </div>
    </div>
  )
}

export default HomePage