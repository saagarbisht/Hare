import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  
  const handleSearch = (e) => {
    e.preventDefault();
    if(searchTerm.length === 0) return;
    console.log(searchTerm);
    setSearchTerm('');
    setIsOpen(false);
  };

  const handleSearchIconClick = () => {
    setIsOpen(true);
  };

  const handleCloseIconClick = () => {
    setIsOpen(false);
    setSearchTerm('');
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  return (
    <div
      className={`flex items-end justify-center w-full transition-all duration-150 ${
        isOpen ? " absolute top-0 left-0  bg-white  h-[90px] z-50" : " w-auto "
      }`}
    >
      {isOpen ? (
        <form className="relative w-full" onSubmit={handleSearch}>
          <div className="flex items-center justify-center space-x-3">
            <div className="relative min-w-64 w-1/2">
              <input
                type="text"
                ref={inputRef}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                className="bg-gray-100 px-4 py-2.5 pl-4 pr-12 rounded-lg focus:outline-none w-full"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                <IoSearch className="w-[22px] h-[22px]" />
              </button>
            </div>
            <button
              type="button"
              className="cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-full"
              onClick={handleCloseIconClick}
            >
              <RxCross2 className="w-[22px] h-[22px]" />
            </button>
          </div>
        </form>
      ) : (
        <button
          className="text-gray-600 hover:text-black cursor-pointer"
          onClick={handleSearchIconClick}
        >
          <IoSearch className="w-[22px] h-[22px]" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
