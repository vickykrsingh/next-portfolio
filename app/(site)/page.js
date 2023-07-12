import Image from "next/image";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Suspense } from "react";

export const metadata  = {
  title:"Vicky | Home",
  description : "Vicky kumar home page"
}

export default async function Home() {
  return (
    <main className="main-container flex flex-col lg:flex-row lg:items-center lg:justify-between justify-center pb-10 lg:pb-0">
      <section className="order-2 lg:order-1 gap-2">
        <h3 className="text-lg lg:text-xl font-semibold text-customWhite">
          Hey , There !
        </h3>
        <header className="text-4xl lg:text-5xl font-bold text-customWhite">
          I'M <span className="text-customNeon">VICKY KUMAR</span>
        </header>
        <p className="text-md lg:text-xl font-semibold text-customWhite">
          A full stack <span>MERN</span> web app developer & a UI & UX designer.
        </p>
        <button className="btn-neon px-4 py-2 rounded-lg mt-5 flex gap-2 items-center justify-center hover:scale-95">
          Resume{" "}
          <span className="text-2xl">
            <MdOutlineNavigateNext />
          </span>
        </button>
      </section>
      <section className="mx-auto lg:m-0 order-1 lg:order-2 relative">
        <Suspense fallback="loading">
          <Image
            src="https://res.cloudinary.com/dpd2t0hym/image/upload/v1686824301/main_uixvyf.jpg"
            width={500}
            height={500}
            alt="profile-image"
          />
        </Suspense>
        <div className="w-40 h-28 absolute top-10 -left-20 bg-customNeon text-customGray rounded-tl-[50px] rounded-br-[50px] auth-cont-box-shadow hidden md:flex items-center justify-center flex-col text-lg border-2 border-customNeon hover:bg-customGray hover:scale-95 hover:text-customNeon transition-all duration-200 cursor-pointer">
          <span className="font-semibold">MERN</span>
          <span>Developer</span>
        </div>
        <div className="w-40 h-28 absolute bottom-10 -right-20 bg-customNeon text-customGray rounded-tl-[50px] rounded-br-[50px] auth-cont-box-shadow hidden md:flex items-center justify-center flex-col text-lg border-2 border-customNeon hover:bg-customGray hover:scale-95 hover:text-customNeon transition-all duration-200 cursor-pointer">
          <span>UI & UX</span>
          <span>Designer</span>
        </div>
      </section>
    </main>
  );
}
