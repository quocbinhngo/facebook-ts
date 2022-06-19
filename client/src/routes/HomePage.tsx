import * as React from "react";

import Header from "../components/header/Header";
import Home from "../components/home/Home";
import LeftSidebarHome from "../components/leftSidebarHome/LeftSidebarHome";
import RightSidebarHome from "../components/rightSidebarHome/RightSidebarHome";

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-100 overflow-y-auto">
      <Header />
      <div>
        <LeftSidebarHome />
        <Home />
        <RightSidebarHome />
      </div>
    </div>
  );
}
