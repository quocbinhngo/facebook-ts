import { Link } from "react-router-dom";

import { leftMenuData, rightMenuData } from "../../data/menu.data";
import SearchBar from "../searchBars/SearchBar";
import MenuCategory from "./MenuCategory";

export interface MenuProps {}

export default function Menu() {
  return (
    <div className="bg-gray-100 py-2 px-4 rounded-lg shadow-xl overflow-y-scoll z-50">
      {/* Header */}
      <h2 className="font-bold text-2xl mb-3">Menu</h2>

      {/* Menu */}
      <div className="flex items-start space-x-6">
        {/* Left Menu */}
        <div className="p-4 bg-white w-48 sm:w-80 rounded-lg">
          <SearchBar placeholder="Search Menu" />
          <div className="py-4 flex flex-col gap-y-4">
            {leftMenuData.map((menuCategory) => (
              <MenuCategory
                menuCategory={menuCategory}
                key={menuCategory.category}
              />
            ))}
          </div>
        </div>

        {/* Right Menu */}
        <div className="p-4 bg-white rounded-lg hidden xs:block">
          <h3 className="font-bold text-lg mb-2">Create</h3>
          <div>
            {rightMenuData.map(({ name, Icon }) => (
              <div className="flex items-center space-x-2 px-1 py-2 rounded-lg hover:bg-gray-100 w-40">
                <div className="p-2 bg-gray-200 rounded-full flex items-center justify-center">
                  <Icon size={24} />
                </div>

                <Link className="font-semibold" to="/">
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
