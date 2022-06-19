import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const languagesList = [
  "English(UK)",
  "Français(FR)",
  "汉语",
  "Español",
  "العربية الفصحى",
  "Português",
  "Русский язык",
  "日本語",
  "한국어",
  "italiano",
  "Deutsch",
];

const navigationList = [
  "Sign Up",
  "Log in",
  "Messenger",
  "Facebook Lite",
  "Watch",
  "Places",
  "Games",
  "Marketplace",
  "Facebook Pay",
  "Oculus",
  "Portal",
  "Instagram",
  " Bulletin",
  "Local",
  "Fundraisers",
  "Services",
  "Voting Information Centre",
  "Groups",
  "About",
  "Create ad",
  "Create Page",
  "Developers",
  "Careers",
  "Privacy",
  "Cookies",
  "AdChoices",
  "Terms",
  "Help",
];

export default function AuthFooter() {
  return (
    <div className="flex px-2">
      <div className="flex flex-col bg-white pt-6 pb-4 space-y-3 mx-auto max-w-sm md:max-w-2xl">
        {/* Languages */}
        <div className="">
          <div className="flex gap-x-2 gap-y-1 flex-wrap mb-3">
            {languagesList.map((language: string) => (
              <Link
                className="text-xs text-gray-500 whitespace-nowrap hover:text-gray-600"
                to="/"
                key={language}
              >
                {language}
              </Link>
            ))}
            <Link to="/">
              <AiOutlinePlusSquare size={16} />
            </Link>
          </div>
          <hr className="border-t-[1px] solid border-gray-300 w-full" />
        </div>

        {/* Navigation */}
        <div className="mx-auto flex flex-wrap gap-x-2 gap-y-1">
          {navigationList.map((navigation: string) => (
            <Link
              className="text-xs text-gray-500 whitespace-nowrap hover:text-gray-600"
              to="/"
              key={navigation}
            >
              {navigation}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div>
          <p className="text-xs text-gray-500">
            Meta &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
