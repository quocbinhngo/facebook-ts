import { ElementType } from "react";

export interface RightSidebarHomeIconProps {
  Icon: ElementType;
}

export default function RightSidebarHomeIcon({
  Icon,
}: RightSidebarHomeIconProps) {
  return (
    <div className="cursor-pointer">
      <Icon className="text-gray-500" size={20} />
    </div>
  );
}
