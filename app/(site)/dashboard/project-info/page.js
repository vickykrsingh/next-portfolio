"use client";
import CreateProject from "@/app/(site)/dashboard/dashboard-component/Create-Project-Form";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Spinner from "../../../assests/spinner.svg";


function ProjectInfo() {
  const [loading, setIsLoading] = useState(false);
  const [projectLoading, setProjectLoading] = useState(false);
  const [project, setProject] = useState([]);
  const deleteProject = async (e, id) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/project?id=${id}`
      );
      if (data?.success) {
        toast.success(data?.message);
        getAllProduct();
      } else {
        toast.error(data?.message);
      }
      setIsLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const getAllProduct = async () => {
    setProjectLoading(true);
    const { data } = await axios.get(
      "http://localhost:3000/api/project/get-all"
    );
    setProject(data?.project);
    setProjectLoading(false);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <main className="main-container flex flex-col gap-5 pb-20">
      <h2 className="text-customNeon text-2xl font-semibold">Create Project</h2>
      <section className="lg:w-[70%] xl:w-[60%]  w-full">
        <CreateProject setProject={setProject} />
      </section>
      {projectLoading ? (
        <div className="w-full flex items-center justify-center">
          <Image src={Spinner} width={50} height={50} alt="Loading..." />
        </div>
      ) : (
        project.map((d) => (
          <div
            className="w-full flex sm:flex-row flex-col gap-2 bg-neutral-500 rounded-md p-2"
            key={d._id}
          >
            <Image
              src={d.image.url || d.image.secure_url}
              width={200}
              height={80}
            />
            <div className="flex-grow text-customWhite flex flex-col gap-2">
              <h3 className="font-semibold">{d.title.substring(0, 60)}</h3>
              <p className="text-xs">{d.description.substring(0, 120)}...</p>
              <div className="flex gap-3">
                <button
                  disabled={loading}
                  className="w-20 text-xs px-3 py-1 rounded-xl text-customGray bg-customNeon hover:text-customNeon hover:bg-customGray hover:border-customNeon border-2 border-customNeon disabled:cursor-not-allowed flex items-center justify-center disabled:hover:bg-customNeon disabled:hover:text-customGray"
                  onClick={(e) => deleteProject(e, d._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </main>
  );
}

export default ProjectInfo;
