import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 10000,
  });
  const [priceRange, setPriceRange] = useState([0,10000]);
  const categories = ["top wear", "bottom wear"];
  const colors = [
    "red",
    "blue",
    "black",
    "green",
    "yellow",
    "gray",
    "white",
    "pink",
  ];
  const sizes = ["xs", "s", "m", "l", "xl", "xxl"];
  const materials = [
    "cotton",
    "wool",
    "denim",
    "polysters",
    "silk",
    "linen",
    "viscose",
    "fleece",
  ];
  const brands = [
    "urban threads",
    "modern fit",
    "street style",
    "beach breeze",
    "fashionista",
    "chicstyle",
  ];
  const genders = ["men", "women"];

  const titleCase = (word) => {
    const titleCaseWord = word
      .split(" ")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(" ");
    return titleCaseWord;
  };

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0,newPrice]);
    const newFilters = {...filters,minPrice:0, maxPrice:newPrice};
    setFilters(newFilters);
    updateURLParams(newFilters);;
  }

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key] && newFilters[key].length)) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key].length > 0) {
        params.append(key, newFilters[key]);
      }else{
        return;
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };


  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size && params.size.length ? params.size.split(",") : [],
      material:
        params.material && params.material.length
          ? params.material.split(",")
          : [],
      brand: params.brand && params.brand.length ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 10000,
    });
    setPriceRange([0, params.maxPrice || 10000]);
  }, [searchParams]);
  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              id={category}
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <label
              className="text-gray-700 text-sm select-none"
              htmlFor={category}
            >
              {titleCase(category)}
            </label>
          </div>
        ))}
      </div>

      {/* Gender filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              id={gender}
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <label
              className="text-gray-700 text-sm select-none"
              htmlFor={gender}
            >
              {titleCase(gender)}
            </label>
          </div>
        ))}
      </div>

      {/* Color filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`w-7 h-7 rounded-full bordercursor-pointer border-2 border-gray-300 transition hover:scale-105 ${
                filters.color === color ? "ring-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              id={size}
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <label className="text-gray-700 text-sm select-none" htmlFor={size}>
              {size.toUpperCase()}
            </label>
          </div>
        ))}
      </div>

      {/* Material filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              id={material}
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <label
              className="text-gray-700 text-sm select-none"
              htmlFor={material}
            >
              {titleCase(material)}
            </label>
          </div>
        ))}
      </div>

      {/* Brand filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              id={brand}
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <label
              className="text-gray-700 text-sm select-none"
              htmlFor={brand}
            >
              {titleCase(brand)}
            </label>
          </div>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={10000}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>&#8377;0</span>
          <span>&#8377;{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
