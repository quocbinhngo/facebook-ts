import * as React from "react";
import { AiOutlineSearch, AiOutlineVideoCamera } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import SidebarHomeItem from "../home/SidebarHomeItem";
import RightSidebarHomeIcon from "./RightSidebarHomeIcon";

export interface RightSidebarHomeProps {}

export default function RightSidebarHome(props: RightSidebarHomeProps) {
  return (
    <div className="fixed top-14 lg:w-[17vw] max-h-screen overflow-y-scroll right-0 divide-y pr-4 scollbar-thin scrollbar-thumb-gray-300">
      {/* Top */}
      <div className="py-4">
        <h3 className="text-gray-500 font-semibold">Sponsored</h3>
      </div>

      {/* Bottom */}
      <div className="py-4">
        {/* Contact header */}
        <div className="flex space-x-12 items-center mb-3">
          <h3 className="text-gray-500 font-semibold">Contacts</h3>
          {/* Icon container */}
          <div className="hidden lg:flex space-x-4">
            <RightSidebarHomeIcon Icon={AiOutlineVideoCamera} />
            <RightSidebarHomeIcon Icon={AiOutlineSearch} />
            <RightSidebarHomeIcon Icon={BsThreeDots} />
          </div>
        </div>

        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          hover
        />
      </div>
    </div>
  );
}
