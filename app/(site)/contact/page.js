import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { ToastContainer } from "react-toastify";
import { FaInbox } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import ContactForm from "@/app/Components/ContactForm";
import contactImg from "../../assests/contact.svg";
import Image from "next/image";
async function Contact() {
  // const session = await getServerSession(authOptions);
  return (
    <>
      <main className="main-container flex flex-col gap-5 lg:flex-row items-center lg:justify-between py-6">
        <header className="text-customNeon font-semibold lg:text-3xl text-2xl tracking-wider w-full lg:w-1/2 flex flex-col items-between justify-center gap-10">
          {/* Contact heading */}
          <h1>
            Love to hear from you,{" "}
            <div className="flex items-center gap-2">
              Get in touch{" "}
              <span className="text-customNeonLight9">
                <MdWavingHand />
              </span>
            </div>{" "}
          </h1>
          {/* Contact Image section */}
          <div className="relative">
            <Image
              src={contactImg}
              width={500}
              height={500}
              alt="business_deal"
            />
            <div className="absolute top-0 left-0 gap-2 bg-customNeon text-customGray rounded-tl-[50px] rounded-br-[50px] auth-cont-box-shadow flex items-center justify-center md:text-xs text-[0.50rem] md:leading-3 py-1 leading-[0.50rem] px-4 tracking-tight border-2 border-customNeon hover:bg-customGray hover:scale-95 hover:text-customNeon transition-all duration-200 cursor-pointer">
              <span>
                <FaInbox />
              </span>
              <span>vickykrsingh27@gmail.com</span>
            </div>
          </div>
        </header>
        {/* Contact Form section */}
        <section className="w-full lg:w-1/2">
          <ContactForm />
        </section>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
    </>
  );
}

export default Contact;
