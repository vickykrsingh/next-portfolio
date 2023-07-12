import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import Image from "next/image";
import pageNotFoundImage from "./assests/notfound.png";

function notFound() {
  return (
    <main className="lg:flex flex-col lg:flex-row main-container justify-between items-center">
      <header className="flex flex-col">
        <h3 className="text-md font-semibold text-customWhite">
          The page you are trying to access is does not exists.
        </h3>
        <h1 className="text-8xl font-semibold text-customNeon">404</h1>
        <h2 className="text-4xl font-semibold text-customWhite">
          Page Not Found
        </h2>
        <button className="w-96 py-2 font-semibold flex items-center justify-center text-customWhite bg-customNeon rounded-lg mt-5 gap-3 border-2 border-customNeon hover:bg-transparent transition-all duration-200">
          {" "}
          <span>Go back to Home</span>{" "}
          <span className="text-2xl">
            <MdKeyboardBackspace />
          </span>
        </button>
      </header>
      <figure className="flex items-center justify-center">
        <Image src={pageNotFoundImage} width={500} height={500} />
      </figure>
    </main>
  );
}

export default notFound;
