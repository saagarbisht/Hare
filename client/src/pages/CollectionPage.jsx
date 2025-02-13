import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

const CollectionPage = () => {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    const mockProducts = [
      {
        _id:1,
        name:'Product 1',
        price:100,
        images:[
          {
            url:"https://picsum.photos/500/500?random=1"
          }
        ]
      },
      {
        _id:2,
        name:'Product 2',
        price:200,
        images:[
          {
            url:"https://picsum.photos/500/500?random=2"
          }
        ]
      },
      {
        _id:3,
        name:'Product 3',
        price:300,
        images:[
          {
            url:"https://picsum.photos/500/500?random=3"
          }
        ]
      },
      {
        _id:4,
        name:'Product 4',
        price:400,
        images:[
          {
            url:"https://picsum.photos/500/500?random=4"
          }
        ]
      },
      {
        _id:6,
        name:'Product 6',
        price:600,
        images:[
          {
            url:"https://picsum.photos/500/500?random=6"
          }
        ]
      },
      {
        _id:5,
        name:'Product 5',
        price:500,
        images:[
          {
            url:"https://picsum.photos/500/500?random=5"
          }
        ]
      },
      {
        _id:7,
        name:'Product 7',
        price:700,
        images:[
          {
            url:"https://picsum.photos/500/500?random=7"
          }
        ]
      },
      {
        _id:8,
        name:'Product 8',
        price:800,
        images:[
          {
            url:"https://picsum.photos/500/500?random=8"
          }
        ]
      },
    ];
    setTimeout(() => {setProducts(mockProducts)},1000);
  },[]);
  return (
    <div className="flex flex-col lg:flex-col">
      <button className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="mr-2"/>
      </button>
      <div></div>
    </div>
  )
}

export default CollectionPage