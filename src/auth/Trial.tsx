/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router-dom";

export interface FormProps {
  name: string;
  resolvers: any;
  linkTo: string;
  buttonDes: string;
  buttonName: string;
}


const Trial = ({
  name,
  resolvers,
  linkTo,
  buttonDes,
  buttonName,
}: FormProps) => {
  const location = useLocation();
  const [inpType, setInpType] = useState("password");
  const [data, setData] = useState([]);

  const { results, loading } = useAuth(
    location.pathname === "/sign-in"
      ? "http://localhost:3000/api/user/sign-in"
      : "http://localhost:3000/api/user/sign-up",
    data
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resolvers),
  });

  const onSubmit = async (data: any) => {
    try {
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(results?.accessToken){
      localStorage.setItem("unisell-token", JSON.stringify(results?.accessToken))
    }
  }, [results]);

  const handleTogglePass = () => {
    setInpType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <form
      className="w-full flex-1 flex flex-col gap-[20px] px-4"
      onSubmit={handleSubmit(onSubmit)}
      id={name}
    >
      <div className="w-full flex flex-col gap-[5px]">
        <label htmlFor="email" className="text-[black] text-sm md:text-base">
          Email:
        </label>

        <input
          id="email"
          type="email"
          autoComplete="off"
          className="outline-none text-[black] px-2 w-full bg-[transparent] h-[50px] border border-[gray]/20 placeholder:text-[grey]"
          placeholder="johndoe@email.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-[red]/80">
            {errors.email.message as string}
          </p>
        )}
      </div>
      <div className="w-full flex flex-col gap-[5px]">
        <label htmlFor="password" className="text-[black] text-sm md:text-base">
          Password:
        </label>

        <div className="w-full flex flex-row border border-[gray]/20 h-[50px]">
          <input
            id="password"
            type={inpType}
            autoComplete="off"
            className="outline-none px-2 w-full bg-[transparent] h-[50px] placeholder:text-[grey] text-[black]"
            placeholder="*****"
            {...register("password")}
          />
          <div className="h-full flex items-center justify-center px-4">
            {inpType === "password" ? (
              <FaEyeSlash onClick={handleTogglePass} />
            ) : (
              <FaEye onClick={handleTogglePass} />
            )}
          </div>
        </div>
        {errors.password && (
          <p className="text-xs text-[red]/80">
            {errors.password.message as string}
          </p>
        )}
      </div>

      {name === "Register" && (
        <div className="w-full flex flex-col gap-[5px]">
          <label
            htmlFor="password"
            className="text-[black] text-sm md:text-base"
          >
            confirm password:
          </label>

          <div className="w-full flex flex-row border border-[gray]/20 h-[50px]">
            <input
              id="confirmPassword"
              type={inpType}
              autoComplete="off"
              className="outline-none px-2 w-full bg-[transparent] h-[50px] placeholder:text-[grey] text-[black]"
              placeholder="*****"
              {...register("confirmPassword")}
            />
            <div className="h-full flex items-center justify-center px-4">
              {inpType === "password" ? (
                <FaEyeSlash onClick={handleTogglePass} />
              ) : (
                <FaEye onClick={handleTogglePass} />
              )}
            </div>
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-[red]/80">
              {errors.confirmPassword.message as string}
            </p>
          )}
        </div>
      )}

      <div className="text-sm text-[black] space-x-4 flex flex-row">
        {name == "register" ? (
          <span>Register as:</span>
        ) : (
          <span>Login as:</span>
        )}
        <div className="flex items-center gap-2">
          <label htmlFor="seller">seller</label>
          <input type="radio" name="seller" id="seller" />
          <label htmlFor="buyer">buyer</label>
          <input type="radio" name="buyer" id="buyer" />
        </div>
      </div>

      <button
        type="submit"
        className="transition-all ease-in-out w-full h-[60px] md:h-[60px] p-4 bg-secondary items-center justify-center cursor-pointer rounded-lg flex hover:bg-[#ff9500] mt-[10px]"
      >
        <span className="font-semibold capitalize text-[white]">{name}</span>
      </button>

      <div>
        <p className="text-sm text-[black]">
          {buttonDes}
          <Link
            to={linkTo}
            className="ml-[5px] text-[#ff9500] underline text-sm"
          >
            {buttonName}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Trial;
