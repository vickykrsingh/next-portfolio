'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ProjectTab() {
  const path = usePathname()
  const projectLink = "text-customWhite hover:text-customGray transition-all duration-200 rounded-md lg:px-3 px-2 py-1 hover:bg-customNeon border-2"
  const projectActiveLink = "text-customGray transition-all duration-200 rounded-md lg:px-3 px-2 py-1 bg-customNeon border-2"

  return (
    <div className="bg-customGray w-screen min-h-[5vh] px-4 md:px-12 lg:px-16 xl:px-24 2xl:px-28 flex lg:flex-row item-center justify-between flex-col gap-3 lg:gap-0">
      {/* Project tabs section */}
      <ul className="flex items-center gap-3 text-sm lg:w-1/2 w-full">
        {/* All categories */}
        <Link
          href="/projects/all"
          className={`${path === '/projects/all' ? projectActiveLink : projectLink}`}
        >
          All Categories
        </Link>
        {/* Frontend section */}
        <Link
          href="/projects/frontend"
          className={`${path === '/projects/frontend' ? projectActiveLink : projectLink}`}
        >
          Frontend
        </Link>
        {/* Full stack section */}
        <Link
          href="/projects/fullstack"
          className={`${path === '/projects/fullstack' ? projectActiveLink : projectLink}`}
        >
          Full Stack
        </Link>
      </ul>
      {/* project searching section */}
    </div>
  );
}

export default ProjectTab;
