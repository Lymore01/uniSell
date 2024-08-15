/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute:FC = ({children}:any) => {
  const authData: string | null = localStorage.getItem("unisell-token");

  const user: string = authData !== null ? JSON.parse(authData) : "";
  
  return user? (
  <>
    {children}
    <Outlet />
  </>
) : (
  <Navigate to="/sign-in" replace /> 
);
};

export default PrivateRoute;
