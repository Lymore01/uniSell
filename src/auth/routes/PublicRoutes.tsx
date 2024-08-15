/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute: FC = ({ children }: any) => {
  const authData: string | null = localStorage.getItem("unisell-token");

  const user: string = authData !== null ? JSON.parse(authData) : "";

  //   validate token first


  return !user ? (
    <>
      {children}
      <Outlet />
    </>
  ) : (
    <Navigate to="/home" replace />
  );
};

export default PublicRoute;
