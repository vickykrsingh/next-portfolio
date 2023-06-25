import React from 'react'
import { FaInbox , FaLinkedinIn , FaFacebookF } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

function Footer() {
  return (
    <footer class="footer-container py-3 md:py-0 border-neutral-800 flex md:flex-row flex-col items-center md:justify-between gap-2 md:gap-0 bg-customGray opacity-75">
      {/* footer left section which shows Email section */}
    <section className="flex gap-2 items-center text-neutral-800">
      <span>
        <FaInbox />
      </span>
      <span>vickykrsingh27@gmail.com</span>
    </section>
    {/* fotter right section which indicate our social icons */}
    <section className="flex gap-2 items-center">
      <span className='text-neutral-800 hover:text-customNeon transition-all duration-200 text-lg cursor-pointer'>
        <FiGithub />
      </span>
      <span className='text-neutral-800 hover:text-customNeon transition-all duration-200 text-lg cursor-pointer'>
        <FaLinkedinIn />
      </span>
      <span className='text-neutral-800 hover:text-customNeon transition-all duration-200 text-lg cursor-pointer'>
        <FaFacebookF />
      </span>
    </section>
  </footer>
  )
}

export default Footer