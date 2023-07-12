"use client";
import React, { Suspense, useContext, useState } from "react";
import Image from "next/image";
import Model from "@/app/Components/ProjectDetailModal";
import Empty from "@/app/Components/data-not-found";

function ProjectLayout({ categoryProject }) {
  return !categoryProject || categoryProject.length == 0 ? (
    <Empty />
  ) : (
    <div className="main-container w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 ">
      {!categoryProject || categoryProject?.length == 0 ? (
        <Empty />
      ) : (
        categoryProject.map((p) => (
          <div
            className="w-[250px] h-fit p-2 bg-neutral-300 rounded-md shadow-lg"
            key={p._id}
          >
            <Suspense
              fallback={<p className="text-xl text-rose-600">Loading...</p>}
            >
              <Image
                src={p.image.url}
                width={250}
                height={100}
                alt={p.title}
                className="hover:brightness-90 cursor-pointer"
              />
            </Suspense>
            <Model data={p} />
          </div>
        ))
      )}
    </div>
  );
}

export default ProjectLayout;
