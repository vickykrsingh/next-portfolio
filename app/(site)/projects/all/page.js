import React from "react";
import ProjectLayout from "@/app/Components/projectLayout";

export const metadata = {
  title:"Vicky | All projects",
  description:"All project of vicky kumar"
}

async function AllProjects() {
  let resp = await fetch("https://next-portfolio-e9y8cj8t6-vickykrsingh.vercel.app/api/project?category=all", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  resp = await resp.json();
  const categoryProject = resp?.project;

  return <ProjectLayout categoryProject={categoryProject} />;
}

export default AllProjects;
