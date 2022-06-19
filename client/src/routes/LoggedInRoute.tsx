import * as React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectUserCurrentUser } from "../features/user/userSlice";
import AuthPage from "./AuthPage";

export interface LoggedInRouteProps {}

export default function LoggedInRoute(props: LoggedInRouteProps) {
  const user = useAppSelector(selectUserCurrentUser);
  return user ? <Outlet /> : <AuthPage />;
}
