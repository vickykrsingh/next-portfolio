import React from "react";
import loading from "@/app/assests/spinner.svg";
import Image from "next/image";

function ProjectForm({
  fields,
  image,
  handleSubmit,
  handleInputChange,
  setFields,
  setImage,
  isLoading,
  actionName,
}) {
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => handleSubmit(e)}>
      <section className="relative">
        <input
          accept="image/*"
          className="hidden"
          id="file_input"
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label
          htmlFor="file_input"
          className="flex items-center justify-center text-opacity-75 w-full outline-none h-10 text-sm text-neutral-400 border border-gray-300 cursor-pointer bg-customGray"
        >
          {image?.name ? image?.name : "Upload Image..."}
        </label>
      </section>
      <ProjectInputField
        name={"title"}
        value={fields.title}
        label={"Project title"}
        onChangeHandler={handleInputChange}
      />
      <ProjectInputField
        name={"technology"}
        value={fields.technology}
        label={"Technology used"}
        onChangeHandler={handleInputChange}
      />
      <ProjectInputField
        name={"redirect"}
        value={fields.redirect}
        label={"Redirect URL"}
        onChangeHandler={handleInputChange}
      />
      <ProjectInputField
        name={"github"}
        value={fields.github}
        label={"Github URL"}
        onChangeHandler={handleInputChange}
      />

      <select
        required
        name={"category"}
        value={fields.category}
        onChange={handleInputChange}
        id="small"
        className="block w-full p-2 outline-none text-xs text-customWhite border border-customWhite bg-customGray focus:ring-customNeon focus:border-customNeon "
      >
        <option>Select Project category</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Fullstack</option>
        <option value="logo">Logo</option>
      </select>

      <textarea
        name={"description"}
        required
        value={fields.description}
        onChange={handleInputChange}
        id="description"
        rows="4"
        className="resize-none block p-2.5 outline-none w-full text-sm text-customWhite bg-customGray border border-customWhite focus:ring-customNeon focus:border-customNeon place placeholder:text-customWhite"
        placeholder="Write description for this project"
      ></textarea>
      {/* Send button section */}
      <button
        disabled={isLoading}
        className="btn-neon px-3 py-2 disabled:cursor-not-allowed flex items-center justify-center"
        type="submit"
      >
        {isLoading ? (
          <Image src={loading} width={30} height={30} alt="Loading" />
        ) : (
          actionName
        )}
      </button>
    </form>
  );
}

// input field reusable component
const ProjectInputField = ({ value, onChangeHandler, label, name }) => {
  return (
    <section className="relative">
      <input
        name={name}
        required
        value={value}
        onChange={(e) => onChangeHandler(e)}
        type="text"
        id="small_outlined"
        className="block border-[1px] px-2.5 pb-1.5 pt-3 w-full text-sm text-customWhite bg-transparent border-1 border-customWhite appearance-none focus:outline-none focus:ring-0 focus:border-customNeon peer"
        placeholder=" "
      />
      <label
        htmlFor="small_outlined"
        className="absolute text-sm text-customWhite dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-customGray px-2 peer-focus:px-2 peer-focus:text-customNeon peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
      >
        {label}
      </label>
    </section>
  );
};

export default ProjectForm;
