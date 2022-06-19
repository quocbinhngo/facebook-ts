import * as React from "react";
import { AiOutlineRight } from "react-icons/ai";
import UserMenuRadioButtons from "../inputs/UserMenuRadioButtons";

export interface UserMenuItemProps {
  Icon: React.ElementType;
  name: string;
  setUserMenuMode?: any;
  menuModeVal?: string;
  description?: string;
  more?: boolean;
  onOff?: boolean;
  hover?: boolean;
}

export default function UserMenuItem({
  Icon,
  name,
  more,
  menuModeVal,
  setUserMenuMode,
  description,
  hover,
  onOff,
}: UserMenuItemProps) {
  return (
    <div
      onClick={() => {
        if (menuModeVal) {
          setUserMenuMode(menuModeVal);
        }
      }}
    >
      <div
        className={`p-2 text-left w-full cursor-pointer flex items-center justify-between rounded-lg ${
          hover && "hover:bg-gray-100"
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 p-2 flex items-center justify-center bg-gray-200 rounded-full">
            <Icon size={20} />
          </div>
          <div>
            {description ? (
              <>
                <h3 className="text-sm font-semibold">{name}</h3>
                <p className="text-xs">{description}</p>
              </>
            ) : (
              <h3 className="font-medium text-sm">{name}</h3>
            )}
          </div>
        </div>
        {more && (
          <div>
            <AiOutlineRight className="text-gray-500" size={20} />
          </div>
        )}
      </div>
      {onOff && (
        <div className="flex space-x-2 items-">
          {/* The left padding */}
          <div className="w-10 h-10"></div>
          {/* On off buttron */}
          <div className="w-full">
            <UserMenuRadioButtons values={["On", "Off"]} />
          </div>
        </div>
      )}
    </div>
  );
}

