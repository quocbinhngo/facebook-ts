import * as React from "react";
import { leftSidebarHomeData } from "../../data/home.data";
import UserMenuItem from "../userMenu/UserMenuItem";
import SidebarHomeItem from "../home/SidebarHomeItem";

export default function LeftSidebarHome() {
  return (
    <div className="fixed max-h-screen lg:w-[16vw] divide-x p-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-rounded">
      {/* Top */}
      <div>
        <SidebarHomeItem
          text="Ngo Quoc Binh"
          img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          left
        />
        {leftSidebarHomeData.map((item) => (
          <SidebarHomeItem
            text={item.text}
            img={`./assets/images/leftMenuIcons/${item.img}.png`}
            notification={item?.notification}
            key={item.text}
            left
          />
        ))}
      </div>

      {/* Bottom */}
      <div></div>
    </div>
  );
}
