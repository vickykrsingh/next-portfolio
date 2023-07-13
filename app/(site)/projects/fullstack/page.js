import React from "react";
import ProjectLayout from "@/app/Components/projectLayout";

export const metadata = {
  title:"Vicky | Fullstack projects",
  description:"All fullstack projects of vicky kumar"
}


async function FullStack() {
  let resp = await fetch(
    "https://next-portfolio-e9y8cj8t6-vickykrsingh.vercel.app/api/project?category=fullstack",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  resp = await resp.json();
  const categoryProject = resp?.project;

  return <ProjectLayout categoryProject={categoryProject} />;
}

export default FullStack;
