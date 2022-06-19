import * as React from "react";

export interface MenuItemProps {
  menuItem: { name: string; Icon: string; description: string };
}

export default function MenuItem({ menuItem }: MenuItemProps) {
  const { name, Icon, description } = menuItem;

  return (
    <div className="flex items-center gap-x-2 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
      <img
        className="h-8 w-8"
        src={`./assets/images/leftMenuIcons/${Icon}.png`}
        alt=""
      />
      <div>
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}
