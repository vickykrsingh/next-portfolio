import React from "react";
import ProjectLayout from "@/app/Components/projectLayout";

export const metadata = {
  title:"Vicky | Frontend projects",
  description:"all frontend projects of vicky kumar"
}

async function Frontend() {
  let resp = await fetch(
    "https://next-portfolio-e9y8cj8t6-vickykrsingh.vercel.app/api/project?category=frontend",
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

export default Frontend;
