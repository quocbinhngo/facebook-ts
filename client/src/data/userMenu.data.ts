import {
  AiFillLock,
  AiFillQuestionCircle,
  AiFillSetting,
  AiFillUnlock,
  AiFillWarning,
  AiOutlineFontSize,
  AiOutlineGlobal,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import {
  BsFillEnvelopeFill,
  BsFillKeyboardFill,
  BsFillMoonFill,
  BsNewspaper,
} from "react-icons/bs";

export const settingMenuData = {
  title: "Settings & privacy",
  items: [
    {
      Icon: AiFillSetting,
      name: "Settings",
    },
    {
      Icon: AiFillUnlock,
      name: "Privacy Checkup",
    },
    {
      Icon: AiFillLock,
      name: "Privacy Shortcuts",
    },
    {
      Icon: AiOutlineUnorderedList,
      name: "Activity Log",
    },
    {
      Icon: BsNewspaper,
      name: "News Feed Preferences",
    },
    {
      Icon: AiOutlineGlobal,
      name: "Language",
    },
  ],
};

export const supportMenuData = {
  title: "Help & Support",
  items: [
    {
      Icon: AiFillQuestionCircle,
      name: "Help Center",
    },
    {
      Icon: BsFillEnvelopeFill,
      name: "Support Inbox",
    },
    {
      Icon: AiFillWarning,
      name: "Report a Problem",
    },
  ],
};

export const displayMenuData = {
  title: "Display & Accessibility",
  items: [
    {
      Icon: BsFillMoonFill,
      name: "Dark Mode",
      description:
        "Adjust the appearance of Facebook to reduce glare and give your eyes a break.",
      onOff: true,
    },
    {
      Icon: AiOutlineFontSize,
      name: "Compact Mode",
      description:
        "Make your font size smaller so more content can fit on the screen.",
      onOff: true,
    },
    {
      Icon: BsFillKeyboardFill,
      name: "Keyboard",
      more: true,
    },
  ],
};
