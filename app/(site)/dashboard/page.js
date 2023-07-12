"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Spinner from "../../assests/spinner.svg";
import Image from "next/image";

export const metadata = {
  title:"Admin | dashboard",
  description:"dashboard home page of vicky kumar admin"
}

function Dashboard() {
  const session = useSession();
  return session?.status === "loading" ? (
    <div className="main-container flex items-center justify-center">
      <Image src={Spinner} width={40} height={40} alt="loading.." />
    </div>
  ) : (
    <div className="main-container mt-5">
      <div className="w-full h-auto flex gap-2 items-center">
        <div className="order-2">
          <p className="text-xs font-light text-customNeon">Welcome, Admin</p>
          <h1 className="text-xl font-semibold text-customNeon">
            {session?.data?.user?.name}
          </h1>
          <h2 className="text-xl text-customNeon">
            {session?.data?.user?.email}
          </h2>
        </div>
        <div className="order-1">
          <Image
            src={session?.data?.user?.image}
            width={50}
            height={50}
            className="rounded-full"
            alt="Profile image"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
