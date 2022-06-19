import {
  AiFillQuestionCircle,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import UserMenuItem from "./UserMenuItem";

export interface UserMenuMainProps {
  setUserMenuMode: any;
}

export default function UserMenuMain({ setUserMenuMode }: UserMenuMainProps) {
  return (
    <div className="flex flex-col divide-y">
      <div className="py-1">
        <div className="p-1 flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-lg">
          <div>
            <img
              className="w-16 h-16 object-cover object-center rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
          <div>
            <Link className="text-sm" to="/">
              See your profile
            </Link>
          </div>
        </div>
      </div>
      <div className="py-1">
        <UserMenuItem
          Icon={FaCommentAlt}
          name="Give Us Feedback"
          description="Help us improve Facebook"
          hover
        />
      </div>
      <div className="py-1">
        <UserMenuItem
          Icon={AiFillSetting}
          name="Settings & privacy"
          setUserMenuMode={setUserMenuMode}
          menuModeVal="setting"
          more
          hover
        />
        <UserMenuItem
          Icon={AiFillQuestionCircle}
          name="Help & support"
          setUserMenuMode={setUserMenuMode}
          menuModeVal="support"
          more
          hover
        />
        <UserMenuItem
          Icon={BsFillMoonFill}
          name="Display & Accessibility"
          setUserMenuMode={setUserMenuMode}
          menuModeVal="display"
          more
          hover
        />
        <UserMenuItem Icon={AiOutlineLogout} name="Logout" hover />
      </div>
    </div>
  );
}
