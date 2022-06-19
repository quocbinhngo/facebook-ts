import { ElementType } from "react";

export interface HeaderIconButtonProps {
  size?: number;
  padding?: number;
  Icon: ElementType;
  className?: string;
  onClick?: any;
  ref?: any;
}

export default function HeaderIconButton({
  size,
  Icon,
  className,
  onClick,
  ref,
}: HeaderIconButtonProps) {
  return (
    <button
      className={`w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 ${className}`}
      ref={ref}
      onClick={onClick}
    >
      {<Icon size={size ? size : 18} />}
    </button>
  );
}
