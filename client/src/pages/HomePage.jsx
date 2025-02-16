import { useLocation } from "react-router"
import Hero from "../components/Layout/Hero"
import FeaturedCollection from "../components/Products/FeaturedCollection"
import FeatureSection from "../components/Products/FeatureSection"
import GenderCollection from "../components/Products/GenderCollection"
import NewArrivals from "../components/Products/NewArrivals"
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from "../components/Products/ProductGrid"
import { useEffect } from "react"

const womenRecommendation = [
  {
    _id: 7,
    name: "Product Name 7",
    price: 120,
    images:[
      {
        url:'https://picsum.photos/1500/1500?random=9',
        altText:'Product Image'
      }
    ]
  },
  {
    _id: 8,
    name: "Product Name 3",
    price: 130,
    images:[
      {
        url:'https://picsum.photos/1500/1500?random=10',
        altText:'Product Image'
      }
    ]
    },
  {
    _id: 9,
    name: "Product Name 4",
    price: 140,
    images:[
      {
        url:'https://picsum.photos/1500/1500?random=11',
        altText:'Product Image'
      }
    ]
  },
  {
    _id: 10,
    name: "Product Name 5",
    price: 150,
    images:[
      {
        url:'https://picsum.photos/1500/1500?random=12',
        altText:'Product Image'
      }
    ]
  },
  {
    _id: 2,
    name: "Product Name 2",
    price: 120,
    images:[
      {
        url:'https://picsum.photos/1500/1500?random=13',
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
        url:'https://picsum.photos/1500/1500?random=15',
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
        url:'https://picsum.photos/1500/1500?random=16',
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
        url:'https://picsum.photos/1500/1500?random=17',
        altText:'Product Image'
      }
    ]
  },
]

const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  },[location]);
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col space-y-6 pb-6">
      <Hero/>
      <GenderCollection/>
      <NewArrivals/>

      <div className="pt-10">
        <h2 className="px-4 text-3xl font-bold text-center">Best Seller</h2>
        <ProductDetails/>
      </div>

      <div>
      <h2 className="px-4 text-3xl font-bold text-center mb-4">Top Wears for Women</h2>
      <ProductGrid products={womenRecommendation}/>
      </div>

      <FeaturedCollection/>
      <FeatureSection />
    </div>
  )
}

export default HomePage