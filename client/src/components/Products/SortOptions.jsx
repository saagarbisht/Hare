import { useSearchParams } from "react-router";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
      searchParams.set("sortBy",sortBy);
      setSearchParams(searchParams); 
  }
  return (
    <div className="mb-4 flex items-center justify-end">
      <span className="text-lg mr-2">Sort by : </span>
      <select id="sort" className="text-sm border border-gray-300 p-2 rounded-md focus:outline-none" onChange={handleSortChange} value={searchParams.get("sortBy" ) || ""}>
        <option value="">Default</option>
        <option value="priceAsc">Price : Low to High</option>
        <option value="priceDesc">Price : High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortOptions