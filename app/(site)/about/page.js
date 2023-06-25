import React from "react";
import Image from "next/image";
import { SiBlockchaindotcom } from "react-icons/si";
import { Suspense } from "react";

function about() {
  return (
    <main className="main-container pb-5">
      {/* About heading */}
      <header className="w-full text-2xl font-semibold text-customNeon lg:my-4 flex items-center justify-center  my-8">
        <h1>ABOUT US</h1>
      </header>
      {/* About hero Image section  */}
      <section className="lg:flex-row flex flex-col items-center justify-between gap-8 lg:gap-8">
        <section className="w-full flex items-center justify-center">
          <figure className="w-full flex items-center lg:justify-start justify-center px-4 md:px-0">
            <Suspense fallback="Loading">
              <Image
                src="https://res.cloudinary.com/dpd2t0hym/image/upload/v1686824283/about_kph8ih.jpg"
                alt="hero_image"
                width={500}
                height={500}
                className="about-profile-img-container"
              />
            </Suspense>
          </figure>
        </section>
        {/* ========================================================= About right  =================================================================*/}
        <article className="flex flex-col gap-1 text-customWhite">
          {/* About sub heading  */}
          <h3 className="text-lg font-light text-customWhite">Hi , I am</h3>
          <h1 className="text-2xl md:text-4xl font-semibold text-customNeon">
            Vicky Kumar
          </h1>
          <p className="font-light text-sm ">
            A full stack MERN stack web app developer & A UI & UX Designer. i
            developed a lot of web app using MERN as well as Next.js for the
            frontend as well as backend.{" "}
          </p>
          {/* Certificate */}
          <button className="btn-neon p-2 my-4 hover:scale-95">
            Certificate
          </button>
          {/* Education section */}
          <article className="my-4">
            <h1 className="font-semibold text-2xl text-customNeon">
              Education
            </h1>
            {/* BCA */}
            <section className="ml-5">
              <h2 className="text-xl font-medium  flex items-center gap-2">
                <span className="text-lg">
                  <SiBlockchaindotcom />
                </span>
                BCA <span className="text-sm font-light">(passed out)</span>
              </h2>
              <li className="text-sm ml-5 list-disc">
                <span>
                  i completed my graduation in computer application from LN
                  College and obtained 77% marks
                </span>
              </li>
            </section>
            {/* MCA */}
            <section className="ml-5">
              <h2 className="text-xl font-medium  flex items-center gap-2">
                <span className="text-lg">
                  <SiBlockchaindotcom />
                </span>
                MCA <span className="text-sm font-light">(Appearing)</span>
              </h2>
              <li className="text-sm ml-5 list-disc">
                <span>
                  Currently i am doing MCA from Galgotiya university Greated
                  Noida (UP)
                </span>
              </li>
            </section>
          </article>
          {/* Skills section */}
          <article>
            <h1 className="font-semibold text-2xl text-customNeon">SKILLS</h1>
            <section className="ml-5">
              <h2 className="text-xl font-medium  flex items-center gap-2">
                <span className="text-lg">
                  <SiBlockchaindotcom />
                </span>
                Frontend
              </h2>
              <ul className="flex gap-10 ml-10 list-disc">
                <li className="text-sm">HTML</li>
                <li className="text-sm">CSS</li>
                <li className="text-sm">JAVASCRIPT</li>
              </ul>
            </section>
            <section className="ml-5">
              <h2 className="text-xl font-medium  flex items-center gap-2">
                <span className="text-lg">
                  <SiBlockchaindotcom />
                </span>
                Libraries & Framework
              </h2>
              <ul className="flex gap-10 ml-10 list-disc">
                <li className="text-sm">React.js</li>
                <li className="text-sm">Node.js</li>
                <li className="text-sm">Next.js</li>
              </ul>
            </section>
            <section className="ml-5">
              <h2 className="text-xl font-medium  flex items-center gap-2">
                <span className="text-lg">
                  <SiBlockchaindotcom />
                </span>
                Databases
              </h2>
              <ul className="flex gap-10 ml-10 list-disc">
                <li className="text-sm">Mongodb</li>
                <li className="text-sm">MySQL</li>
              </ul>
            </section>
            <section className="ml-5">
              <h2 className="text-xl font-medium flex items-center gap-2">
                <span className="text-lg">
                  <SiBlockchaindotcom />
                </span>{" "}
                Additional
              </h2>
              <ul className="flex gap-10 ml-10 list-disc">
                <li className="text-sm">Git</li>
                <li className="text-sm">Figma</li>
                <li className="text-sm">Photoshop</li>
              </ul>
            </section>
          </article>
        </article>
      </section>
    </main>
  );
}

export default about;
