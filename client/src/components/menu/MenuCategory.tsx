import * as React from "react";
import MenuItem from "./MenuItem";

export interface MenuCategoryProps {
  menuCategory: { category: string; items: Array<any> };
}

export default function MenuCategory({ menuCategory }: MenuCategoryProps) {
  const { category, items } = menuCategory;

  return (
    <div>
      <h3 className="font-semibold cursor-pointer">{category}</h3>
      <div className="py-2">
        {items.map((item) => (
          <MenuItem menuItem={item} key={item.name} />
        ))}
      </div>
      <hr className="border-t-[1px] solid border-gray-300 w-full" />
    </div>
  );
}
