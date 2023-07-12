"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

function Profile() {
  const [openModal, setOpenModal] = useState(false);
  // fetching session data from use session hook provided by next auth
  const { data: session } = useSession();

  return (
    // headless ui component
    // modal that is shown when in small screen it is displayed by clicking on user profile image icon provided by google
    <section className="relative flex items-center justify-center">
      {/* pop over button  */}
      <button
        className={"outline-none border-none"}
        onClick={() => setOpenModal(openModal ? false : true)}
      >
        {/* user image provided by google if not then default image is showed  */}
        <Image
          src={
            session?.user?.image ||
            "https://res.cloudinary.com/dpd2t0hym/image/upload/v1687698648/unknown-avatar_cxkgts.jpg"
          }
          width={30}
          height={30}
          className="rounded-full"
          alt="guest_user"
        />
      </button>
      {/* modal content */}
      <section
        className={`absolute z-10 top-[6vh] right-0 ${
          openModal ? "" : "hidden"
        }`}
      >
        <ul className="p-8 flex flex-col items-center justify-center shadow-lg rounded-lg text-customWhite bg-customNeon gap-2 font-semibold">
          <Link
            href={"/profile"}
            className="hover:text-customGray transition-all duration-150"
          >
            Profile
          </Link>
          <span
            className="hover:text-customGray transition-all duration-150 cursor-pointer"
            onClick={()=>signOut('google')}
          >
            Logout
          </span>
        </ul>
      </section>
    </section>
  );
}
export default Profile;
