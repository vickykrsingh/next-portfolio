"use client";
import React, { useEffect, useState, useContext } from "react";
import { RiHomeSmileFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdContacts, MdWork, MdSpaceDashboard } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { BsFillShieldLockFill } from "react-icons/bs";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { signOut, useSession, getProviders, signIn } from "next-auth/react";
import Profile from "./userProfile";
import Image from "next/image";
import Dropdown from "./DropdownDashboard";
import { NavContext } from "@/context/NavContext";
import {usePathname} from 'next/navigation'

function Nav({session}) {
  // Nav open&close state
  const [openNav, setOpenNav] = useContext(NavContext);
  //  Next auth providers state
  const [provider, setProvider] = useState(null);
  // after user login profile popup state
  const [profilePopUp, setProfilePopUp] = useState(false);
  // Google Sign in OnClick function
  const [isAdmin,setIsAdmin] = useState(false)
  const path = usePathname()
  const handleSignIn = async () => {
    // google sign in inbuilt function provided by next auth
    const resp = await signIn("google");
    alert("response", resp);
  };
  // console.log(userSession)
  useEffect(() => {
    // setting providers from the cookies provided by next auth after successfully login if not login then state should be null
    const setUpProvider = async () => {
      const response = await getProviders();
      setProvider(response);
    };
    setUpProvider();
    if(session?.user?.role===1){
      setIsAdmin(true)
    }
  }, [session]);

  return (
    <nav className="w-full h-[10vh] flex items-center justify-center">
      <header className="flex items-center justify-between md:px-10 px-5 w-full h-full">
        {/* logo section -> */}
        <h1 className="font-semibold text-2xl text-customNeon">
          <Link href="/">VICKY KUMAR</Link>
        </h1>
        {/* logo section <- */}
        {/* ============================================================= Large screen Nav menu ============================================================== */}
        <ul className="lg:flex items-center gap-1 justify-center hidden relative">
          {/* Nav menu section -> */}

          {/* Home section */}
          <Link
            onClick={() => setOpenNav(false)}
            href="/"
            className={`${path==='/' ? 'navLinkActive':'navLink'} duration-250`}
          >
            <span>
             
              <RiHomeSmileFill />
            </span>
            <span className="font-semibold">HOME</span>
          </Link>

          {/* About section */}
          <Link
            onClick={() => setOpenNav(false)}
            href="/about"
            className={`${path==='/about' ? 'navLinkActive':'navLink'} duration-250`}
          >
            <span>
              <FaUser />
            </span>
            <span className="font-semibold">ABOUT</span>
          </Link>

          {/* Contact section  */}
          <Link
            onClick={() => setOpenNav(false)}
            href="/contact"
            className={`${path==='/contact' ? 'navLinkActive':'navLink'} duration-250`}
          >
            <span>
              <MdContacts />
            </span>
            <span className="font-semibold">CONTACT</span>
          </Link>

          {/* Projects section */}
          <Link
            onClick={() => setOpenNav(false)}
            href="/projects/all"
            className={`${path==='/projects/all' || path==='/projects/frontend' || path==='/projects/fullstack' ? 'navLinkActive':'navLink'} duration-250`}
          >
            <span>
              <MdWork />
            </span>
            <span className="font-semibold">PROJECTS</span>
          </Link>

          {/* Dashboard section */}
          
          {
            isAdmin && <Dropdown style={`${path === '/dashboard' || path === '/dashboard/contact-info' || path === '/dashboard/project-info' ? 'navLinkActive' : 'navLink'} duration-250`} />
          }

          {/* Login/logout section */}
          {!session?.user ? (
            // login section
            <div
              onClick={() => {
                setOpenNav(false);
                handleSignIn();
              }}
              className="navLink duration-250"
            >
              <span>
                <BsFillShieldLockFill />
              </span>
              <span className="font-semibold">SignIn</span>
            </div>
          ) : (
            // logout section
            <Profile />
          )}
        </ul>
        {/* Nav menu end */}

        {/* ============================================================== Small Screen Nav Menu ============================================================= */}

        {/* Nav menu */}
        <ul
          className={`flex flex-col items-center justify-center lg:hidden absolute left-0 ${
            openNav ? "top-0" : "-top-[450px]"
          } bg-customWhite w-full h-[450px] gap-5 rounded-lg z-50 transition-all duration-200 shadow-xl`}
        >
          <Image
            src={
              session?.user?.image ||
              "https://res.cloudinary.com/dpd2t0hym/image/upload/v1687698648/unknown-avatar_cxkgts.jpg"
            }
            width={35}
            height={35}
            className="absolute top-5 left-5 rounded-full"
            alt="guest_user"
          />

          {/* Home section */}
          <Link
            onClick={() => setOpenNav(false)}
            href="/"
            className={`${path === '/' ? 'navLinkActive-sm' : 'navLink-sm'} duration-1000`}
          >
            <span>
              <RiHomeSmileFill />
            </span>
            <span className="font-semibold">HOME</span>
          </Link>

          {/* About section */}
          <Link
            onClick={() => setOpenNav(false)}
            href="/about"
            className={`${path === '/about' ? 'navLinkActive-sm' : 'navLink-sm'} duration-1000`}
          >
            <span>
              <FaUser />
            </span>
            <span className="font-semibold">ABOUT</span>
          </Link>

          {/* Contact section */}
          <Link
            onClick={() => setOpenNav(false)}
            href="/contact"
            className={`${path === '/contact' ? 'navLinkActive-sm' : 'navLink-sm'} duration-1000`}
          >
            <span>
              <MdContacts />
            </span>
            <span className="font-semibold">CONTACT</span>
          </Link>

          {/* Projects section */}
          <Link
            onClick={() => setOpenNav(false)}
            href="/projects/all"
            className={`${path==='/projects/all' || path==='/projects/frontend' || path==='/projects/fullstack' ? 'navLinkActive-sm' : 'navLink-sm'} duration-1000`}
          >
            <span>
              <MdWork />
            </span>
            <span className="font-semibold">PROJECTS</span>
          </Link>

          {/* Dashboard section */}
          <Dropdown style={`${path === '/dashboard' || path === '/dashboard/contact-info' || path === '/dashboard/project-info' ? 'navLinkActive-sm' : 'navLink-sm'} duration-1000`} />

          {/* Login / Logout section */}
          {session?.user ? (
            // logout section
            <>
              <div
                onClick={() => {
                  setOpenNav(false);
                  signOut();
                }}
                className="navLink-sm duration-1000"
              >
                <span>
                  <BsFillShieldLockFill />
                </span>
                <span className="font-semibold">LogOut</span>
              </div>

              <Link
                onClick={() => setOpenNav(false)}
                href={"/profile"}
                className="navLink-sm duration-1000"
              >
                <span>
                  <BsFillShieldLockFill />
                </span>
                <span className="font-semibold">Profile</span>
              </Link>
            </>
          ) : (
            // login section
            <div
              onClick={() => {
                setOpenNav(false);
                handleSignIn();
              }}
              className="navLink-sm duration-1000"
            >
              <span>
                <BsFillShieldLockFill />
              </span>
              <span className="font-semibold">SignIn</span>
            </div>
          )}

          {/* Nav Closing Cross section  */}
          <div
            className="p-1 text-4xl text-customGray hover:text-customNeon absolute top-5 right-5 cursor-pointer hover:scale-90 z-50"
            onClick={() => setOpenNav(false)}
          >
            <RxCrossCircled />
          </div>
        </ul>

        {/* Nav Opening Bar section */}
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
