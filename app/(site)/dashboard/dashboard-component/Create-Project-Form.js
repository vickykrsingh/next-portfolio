"use client";
import { useState } from "react";
import ProjectForm from "./ProjectForm";
import axios from "axios";
import { toast } from "react-hot-toast";

function CreateProject({setProject}) {
  // state to store project all fields
  const [fields, setFields] = useState({
    title: "",
    description: "",
    redirect: "",
    github: "",
    category: "",
    technology: "",
  });
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // onChange handler for all input fields
  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const imageUploadResponse = await imageUpload(image);
    if (imageUploadResponse.success) {
      // store other data to the database
      try {
        let { data } = await axios.post("http://localhost:3000/api/project", {
          ...fields,
          signature: imageUploadResponse.signature,
          secure_url: imageUploadResponse.secure_url,
          public_id: imageUploadResponse.public_id,
        });
        setIsLoading(false);
        if (data?.success) {
          const resp = await axios.get('http://localhost:3000/api/project/get-all')
          setProject(resp?.data?.project)
          // setFields({
          //   title:'',
          //   description:'',
          //   redirect:'',
          //   github:'',
          //   category:'',
          //   technology:''
          // })
          toast.success(data?.message);
        } else {
          toast.error(data?.message);
        }
      } catch (error) {
        toast.error("Something went wrong.");
      }
    }
  };

  //================================================= main return =====================================================
  return (
    <ProjectForm
      fields={fields}
      image={image}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      setFields={setFields}
      setImage={setImage}
      isLoading={isLoading}
      actionName={'Create'}
    />
  );
}

export default CreateProject;

// function to upload image using cloudinary
export const imageUpload = async (myImg) => {
  const cloudinaryPreset = "vickykrsingh_portfolio";
  const cloudinaryFolderName = "portfolio";
  const cloudinaryName = "dpd2t0hym";
  // instance of image input value

  // create a new formData object
  let imgData = new FormData();
  // appending user selected image on imgData which is instance of form data
  imgData.append("file", myImg);
  // appending upload_preset , cloud_name and folder value in formData
  imgData.append("upload_preset", cloudinaryPreset);
  imgData.append("cloud_name", cloudinaryName);
  imgData.append("folder", cloudinaryFolderName);
  // fetching unsigned upload url provided by cloudinary to upload image and pass the imgData inside the body
  let resp = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`,
    {
      method: "POST",
      body: imgData,
    }
  );
  // waiting for response of cloudinary
  resp = await resp.json();

  if (!resp?.public_id || !resp?.signature || !resp?.secure_url) {
    return {
      success: false,
      message: "Something went wrong while uploading image on cloudinary",
    };
  }


  return {
    signature: resp?.signature,
    secure_url: resp?.secure_url,
    public_id: resp?.public_id,
    success: true,
  };
};
