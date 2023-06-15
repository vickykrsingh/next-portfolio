"use client";
import React, { useState } from "react";
import { RiHomeSmileFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import {
  MdContacts,
  MdWork,
  MdSpaceDashboard,
  MdDashboard,
} from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { BsFillShieldLockFill } from "react-icons/bs";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const session = useSession()

  console.log(session)

  return (
    <nav className="w-full h-[10vh] flex items-center justify-center">
      <header className="flex items-center justify-between md:px-10 px-5 w-full h-full">
        <h1 className="font-semibold text-2xl text-customNeon">
          <Link href="/">VICKY KUMAR</Link>
        </h1>
        <ul className="lg:flex items-center justify-center hidden">
          <Link onClick={() => setOpenNav(false)} href='/' className="navLink duration-250">
            <span>
              <RiHomeSmileFill />
            </span>
            <span className="font-semibold">HOME</span>
          </Link>
          <Link onClick={() => setOpenNav(false)} href='/about' className="navLink duration-250">
            <span>
              <FaUser />
            </span>
            <span className="font-semibold">ABOUT</span>
          </Link>
          <Link onClick={() => setOpenNav(false)} href='/contact' className="navLink duration-250">
            <span>
              <MdContacts />
            </span>
            <span className="font-semibold">CONTACT</span>
          </Link>
          <Link onClick={() => setOpenNav(false)} href='/projects' className="navLink duration-250">
            <span>
              <MdWork />
            </span>
            <span className="font-semibold">PROJECTS</span>
          </Link>
          <Link onClick={() => setOpenNav(false)} href='/dashboard' className="navLink duration-250">
            <span>
              <MdSpaceDashboard />
            </span>
            <span className="font-semibold">DASHBOARD</span>
          </Link>
          {!session?.data?.user ? <Link onClick={() => setOpenNav(false)} href='/auth/login' className="navLink duration-250">
            <span>
              <BsFillShieldLockFill />
            </span>
            <span className="font-semibold">SignIn</span>
          </Link> : <div className="navLink duration-250">
          <span>
              <BsFillShieldLockFill />
            </span>
          <span className="font-semibold" onClick={()=>signOut()}>Sign Out</span>
            </div>}
        </ul>
        <ul
          className={`flex flex-col items-center justify-center lg:hidden absolute left-0 ${
            openNav ? "top-0" : "-top-[450px]"
          } bg-customWhite w-full h-[400px] gap-5 rounded-lg z-50 transition-all duration-200 shadow-xl`}
        >
          <Link onClick={() => setOpenNav(false)} href='/' className="navLink-sm duration-1000">
            <span>
              <RiHomeSmileFill />
            </span>
            <span className="font-semibold">HOME</span>
          </Link>
          <Link onClick={() => setOpenNav(false)} href='/about' className="navLink-sm duration-1000">
            <span>
              <FaUser />
            </span>
            <span className="font-semibold">ABOUT</span>
          </Link>
          <Link onClick={() => setOpenNav(false)} href='/contact' className="navLink-sm duration-1000">
            <span>
              <MdContacts />
            </span>
            <span className="font-semibold">CONTACT</span>
          </Link>
          <Link onClick={() => setOpenNav(false)} href='/projects' className="navLink-sm duration-1000">
            <span>
              <MdWork />
            </span>
            <span className="font-semibold">PROJECTS</span>
          </Link>
          <Link onClick={() => setOpenNav(false)} href='/dashboard' className="navLink-sm duration-1000">
            <span>
              <MdSpaceDashboard />
            </span>
            <span className="font-semibold">DASHBOARD</span>
          </Link>
          <Link onClick={() => setOpenNav(false)} href='/auth/login' className="navLink-sm duration-1000">
            <span>
              <BsFillShieldLockFill />
            </span>
            <span className="font-semibold">SignIn</span>
          </Link>
          <div
            className="p-1 text-4xl text-customGray hover:text-customNeon absolute top-5 right-5 cursor-pointer hover:scale-90 z-50"
            onClick={() => setOpenNav(false)}
          >
            <RxCrossCircled />
          </div>
        </ul>
        <div
          className="p-1 z-0 text-customNeon text-2xl cursor-pointer lg:hidden block"
          onClick={() => setOpenNav(true)}
        >
          <FaBars />
        </div>
      </header>
    </nav>
  );
}

export default Nav;
