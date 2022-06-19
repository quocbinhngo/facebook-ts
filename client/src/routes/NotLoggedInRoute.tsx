import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectUserCurrentUser } from "../features/user/userSlice";

export interface NotLoggedInRouteProps {}

export default function NotLoggedInRoute(props: NotLoggedInRouteProps) {
  const user = useAppSelector(selectUserCurrentUser);
  return user ? <Navigate to="/" /> : <Outlet />;
}
