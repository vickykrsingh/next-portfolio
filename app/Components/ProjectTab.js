import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

function ProjectTab() {
  return (
    <div className="bg-customGray w-screen min-h-[5vh] px-4 md:px-12 lg:px-16 xl:px-24 2xl:px-28 flex lg:flex-row item-center justify-between flex-col gap-3 lg:gap-0">
      {/* Project tabs section */}
      <ul className="flex items-center gap-3 text-sm lg:w-1/2 w-full">
        {/* All categories */}
        <Link
          href="/projects"
          className="text-customWhite hover:text-customGray transition-all duration-200 rounded-md lg:px-3 px-2 py-1 hover:bg-customNeon border-2"
        >
          All Categories
        </Link>
        {/* Frontend section */}
        <Link
          href="/projects/frontend"
          className="text-customWhite hover:text-customGray transition-all duration-200 rounded-md lg:px-3 px-2 py-1 hover:bg-customNeon border-2"
        >
          Frontend
        </Link>
        {/* Full stack section */}
        <Link
          href="/projects/fullstack"
          className="text-customWhite hover:text-customGray transition-all duration-200 rounded-md lg:px-3 px-2 py-1 hover:bg-customNeon border-2"
        >
          Full Stack
        </Link>
      </ul>
      {/* project searching section */}
      <section className="lg:w-1/2 w-full flex items-center justify-end">
        <form action="" className="lg:w-1/2 w-full relative">
          {/* search input section */}
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none ring-customNeon lg:w-full w-full"
          />
          {/* search button */}
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <FaSearch />
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProjectTab;
