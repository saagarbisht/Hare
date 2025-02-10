import Hero from "../components/Layout/Hero"
import GenderCollection from "../components/Products/GenderCollection"
import NewArrivals from "../components/Products/NewArrivals"

const HomePage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col space-y-10 pb-6">
      <Hero/>
      <GenderCollection/>
      <NewArrivals/>
    </div>
  )
}

export default HomePage