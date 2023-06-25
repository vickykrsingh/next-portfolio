"use client"
import { Popover } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

function Profile() {
    // fetching session data from use session hook provided by next auth
    const {data : session} = useSession()
    
  return (
    // headless ui component
    // modal that is shown when in small screen it is displayed by clicking on user profile image icon provided by google
    <Popover className="relative flex items-center justify-center">
      {/* pop over button  */}
      <Popover.Button className={'outline-none border-none'}>
        {/* user image provided by google  */}
        <Image src={session?.user?.image || 'https://res.cloudinary.com/dpd2t0hym/image/upload/v1687698648/unknown-avatar_cxkgts.jpg'} width={30} height={30} className='rounded-full' alt='guest_user' />
      </Popover.Button>
      {/* modal content */}
      <Popover.Panel className="absolute z-10 top-[6vh] right-0">
        <ul className='p-8 flex flex-col items-center justify-center shadow-lg rounded-lg text-customWhite bg-customNeon gap-2 font-semibold'>
            <Link href={'/profile'} className='hover:text-customGray transition-all duration-150'>Profile</Link>
            <div className='hover:text-customGray transition-all duration-150 cursor-pointer' onClick={()=>signOut('google')}>Logout</div>
        </ul>
      </Popover.Panel>
    </Popover>
  )
}
export default Profile