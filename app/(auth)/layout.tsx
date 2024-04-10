import React from "react";
import authPic from "@/public/images/auth-banner.png";
import Image from "next/image";
interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className=" flex w-full h-screen justify-between items-center ">
      <div className=" w-1/2 hidden md:block">
        <Image
          src={authPic}
          alt="auth-pic"
          quality={100}
          className=" w-full h-full object-contain"
        />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
