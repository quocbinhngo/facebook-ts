import * as React from "react";
import { Link } from "react-router-dom";

export interface HeaderIconLinkProps {
  to: string;
  Icon: React.ElementType;
  className?: string;
  active?: boolean;
}

export default function HeaderIconLink({
  to,
  active,
  Icon,
  className,
}: HeaderIconLinkProps) {
  return (
    <Link
      className={`py-3 hover:bg-gray-100 rounded-xl ${className}`}
      to={to}
    >
      <Icon
        size={28}
        className={`text-gray-500 ${active && "text-primary-blue"}`}
      />
    </Link>
  );
}
