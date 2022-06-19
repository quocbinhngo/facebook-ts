import * as React from "react";

export interface SidebarHomeItemProps {
  text: string;
  img: string;
  notification?: string;
  hover?: boolean;
  left?: boolean;
}

export default function SidebarHomeItem({
  text,
  img,
  notification,
  hover,
  left,
}: SidebarHomeItemProps) {
  return (
    <div
      className={`flex cursor-pointer gap-x-3 items-center py-2 px-1 rounded-lg ${
        hover && "hover:bg-gray-200"
      }`}
    >
      {/* Image */}
      <div>
        <img
          className="w-10 h-10 object-cover object-center rounded-full"
          src={img}
          alt=""
        />
      </div>

      {/* Text */}
      <div className={`hidden ${left ? "lg:block" : "md:block"}  `}>
        <h3 className="text-sm font-medium">{text}</h3>
        {notification && (
          <div className="flex items-center space-x-1">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <p className="text-xs text-blue-500">{notification}</p>
          </div>
        )}
      </div>
    </div>
  );
}
