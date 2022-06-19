import { useRef, useState } from "react";
import { AiOutlineHome, AiOutlineShop } from "react-icons/ai";
import {
  BsCaretDownFill,
  BsDisplay,
  BsGrid3X3GapFill,
  BsMessenger,
  BsPeople,
} from "react-icons/bs";
import { IoGameControllerOutline, IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside.hook";

import Menu from "../menu/Menu";
import SearchBar from "../searchBars/SearchBar";
import UserMenu from "../userMenu/UserMenu";
import HeaderIconButton from "./HeaderIconButton";
import HeaderIconLink from "./HeaderIconLink";
import SearchMenu from "./SearchMenu";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const userMenuRef = useRef(null);
  const menuRef = useRef(null);

  useClickOutside(userMenuRef, () => {
    setShowUserMenu(false);
  });

  useClickOutside(menuRef, () => {
    setShowMenu(false);
  });

  return (
    <header className="flex py-1 px-4 shadow-md items-center relative">
      {/* Header left */}
      <div className="flex gap-x-2 mr-2 xs:mr-20">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-10 object-cover object-center"
            src="./assets/svg/facebook-logo.svg"
            alt="logo"
          />
        </Link>

        {/* Search bar */}
        <SearchBar
          placeholder="Search Facebook"
          onClick={() => setShowSearchMenu(true)}
        />
        {showSearchMenu && <SearchMenu setShowSearchMenu={setShowSearchMenu} />}
      </div>
      {/* Header center */}
      <div className="flex space-x-2 flex-grow">
        <HeaderIconLink
          to="/"
          Icon={AiOutlineHome}
          active
          className="px-8 hidden sm:flex"
        />
        <HeaderIconLink to="/" Icon={BsPeople} className="px-2 sm:px-8" />
        <div className="relative hidden md:flex ">
          <HeaderIconLink to="/" Icon={BsDisplay} className="px-8" />
          <span className="absolute top-[-1px] right-8 py-[0.5px] px-1 bg-red-600 text-white rounded-3xl text-sm">
            9+
          </span>
        </div>

        <HeaderIconLink
          to="/"
          Icon={AiOutlineShop}
          className="px-8 hidden md:flex"
        />
        <HeaderIconLink
          to="/"
          Icon={IoGameControllerOutline}
          className="px-8 hidden lg:flex"
        />
      </div>

      {/* Header right */}
      <div className="flex space-x-2 justify-end text-xl">
        <img
          className="w-10 h-10 object-cover object-center rounded-full cursor-pointer"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <HeaderIconButton
          Icon={BsGrid3X3GapFill}
          ref={menuRef}
          onClick={() => setShowMenu(!showMenu)}
        />
        <HeaderIconButton Icon={BsMessenger} className="hidden xs:flex" />
        <div className="relative">
          <HeaderIconButton Icon={IoNotifications} />
          <div className="absolute top-[-4px] right-[-2px] bg-red-600 rounded-full p-2 h-5 w-5 flex items-center justify-center">
            <span className="text-white text-sm">6</span>
          </div>
        </div>
        <HeaderIconButton
          Icon={BsCaretDownFill}
          ref={userMenuRef}
          onClick={() => setShowUserMenu(!showUserMenu)}
        />
      </div>

      {/* Menu */}
      <div className="absolute top-16 right-4">
        {showMenu && <Menu />}
        {showUserMenu && <UserMenu />}
      </div>
    </header>
  );
}
