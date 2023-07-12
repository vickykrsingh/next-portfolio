"use client";
import { NavContext } from "@/context/NavContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function Dropdown({ style }) {
  const [openNav, setOpenNav] = useContext(NavContext);
  const [openModal, setOpenModal] = useState(false);
  const path = usePathname()
  const dashboardLink = 'hover:bg-customNeon w-full py-1 rounded-md px-3 hover:text-customGray font-semibold text-customNeon'
  const dashboardActiveLink = 'bg-customNeon w-full py-1 rounded-md px-3 text-customGray font-semibold'
  return (
    // <div className="fixed top-16 w-56 text-right">
    <main as="div" className="relative inline-block text-left">
      <div>
        <button
          onClick={() => {
            setOpenModal(openModal ? false : true);
          }}
          className={`font-semibold flex items-center justify-center ${style}`}
        >
          <span className="text-2xl font-thin order-2">
            <RiArrowDropDownLine />
          </span>
          <span className="font-semibold order-1">DASHBOARD</span>
        </button>
      </div>
      <section
        className={`absolute right-0 mt-2 w-56 z-50 origin-top-right divide-y divide-gray-100 rounded-md bg-neutral-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          openModal ? "" : "hidden"
        }`}
      >
        <div className="px-1 py-1 flex flex-col gap-2 items-center justify-center">
          <div
            onClick={() => {
              setOpenModal(false);
              setOpenNav(false);
            }}
            className={
              `${path === '/dashboard' ? dashboardActiveLink : dashboardLink}`
            }
          >
            <Link href={"/dashboard"}>Dashboard</Link>
          </div>
          <div
            onClick={() => {
              setOpenModal(false);
              setOpenNav(false);
            }}
            className={
              `${path === '/dashboard/contact-info' ? dashboardActiveLink : dashboardLink}`
            }
          >
            <Link href={"/dashboard/contact-info"}>Contact</Link>
          </div>
          <div
            onClick={() => {
              setOpenModal(false);
              setOpenNav(false);
            }}
            className={
              `${path === '/dashboard/project-info' ? dashboardActiveLink : dashboardLink}`
            }
          >
            <Link href={"/dashboard/project-info"}>Projects</Link>
          </div>
        </div>
      </section>
    </main>
    // </div>
  );
}
