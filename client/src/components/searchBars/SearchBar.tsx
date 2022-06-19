import { BsSearch } from "react-icons/bs";

export interface SearchBarProps {
  placeholder: string;
  onClick?: any;
}

export default function SearchBar({ placeholder, onClick }: SearchBarProps) {
  return (
    <div
      className="flex items-center py-1 px-3 rounded-full bg-gray-100 space-x-2 flex-1 h-10"
      onClick={() => onClick()}
    >
      <BsSearch className="text-gray-500 font-semibold" />
      <input
        className="outline-none bg-transparent placeholder-gray-500 hidden xl:block"
        placeholder={placeholder}
      />
    </div>
  );
}
