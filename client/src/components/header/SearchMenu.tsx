import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

import SearchBar from "../searchBars/SearchBar";

export interface SearchMenuProps {
  setShowSearchMenu: any;
}

export default function SearchMenu({ setShowSearchMenu }: SearchMenuProps) {
  return (
    <div className="w-80 h-96 absolute z-50 py-2 px-4 bg-white top-0 left-0 shadow-xl flex flex-col gap-y-2 rounded-xl">
      {/* Search bar */}
      <div className="flex items-center space-x-2">
        <div
          className="h-10 flex items-center justify-center"
          onClick={() => setShowSearchMenu(false)}
        >
          <BiArrowBack className="text-gray-500 cursor-pointer" size={20} />
        </div>
        <SearchBar placeholder="Search Facebook" />
      </div>

      {/* Header */}
      <div className="flex justify-between">
        <h3 className="font-semibold">Recent searches</h3>
        <Link className="text-sm text-blue-500" to="/">
          Edit
        </Link>
      </div>
    </div>
  );
}
