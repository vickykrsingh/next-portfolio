import React from 'react'
import Image from 'next/image'
import banner from '../assests/welcome-banner.jpg'

function layout({children}) {
  return (
    <main className="auth-container grid place-items-center px-2 md:px-0 h-[90vh] overflow-hidden">
        {/* <div className='mesh-blur-top'></div>
        <div className='mesh-blur-bottom'></div> */}
        <section className="md:w-[700px] w-full h-[500px] flex bg-customNeon rounded-lg auth-cont-box-shadow overflow-hidden z-10">
          {/* Auth left section */}
          <Image src={banner} width={370} height={700} alt='login-banner' className='hidden md:block' />
          {/* Auth Right Section */}
          {children}
        </section>
      </main>
  )
}

export default layout