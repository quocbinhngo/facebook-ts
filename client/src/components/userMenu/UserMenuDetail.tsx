import { ElementType } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import UserMenuItem from "./UserMenuItem";

export interface UserMenuDetailProps {
  title: string;
  items: Array<{
    name: string;
    Icon: ElementType;
    description?: string;
    onOff?: boolean;
    more?: boolean;
    hover?: boolean;
  }>;
  setUserMenuMode: any;
}

export default function UserMenuDetail({
  title,
  items,
  setUserMenuMode,
}: UserMenuDetailProps) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center space-x-2">
        {/* Back button */}
        <button
          className="h-10 w-10 hover:bg-gray-200 flex items-center justify-center rounded-full"
          onClick={() => setUserMenuMode("main")}
        >
          <AiOutlineArrowLeft size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {/* Items */}
      <div>
        {items.map(({ name, Icon, description, onOff, more, hover }) => (
          <UserMenuItem
            name={name}
            Icon={Icon}
            description={description}
            onOff={onOff}
            more={more}
            hover={hover}
            key={name}
          />
        ))}
      </div>
    </div>
  );
}
