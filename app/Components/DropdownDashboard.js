import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {RiArrowDropDownLine} from 'react-icons/ri'

export default function Dropdown({style}) {
  return (
    // <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className={`${style} font-semibold`}>
          <span className='text-2xl font-thin order-2'>
              <RiArrowDropDownLine />
            </span>
            <span className="font-semibold order-1">DASHBOARD</span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 z-50 origin-top-right divide-y divide-gray-100 rounded-md bg-neutral-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className='px-1 py-1 flex flex-col gap-2 items-center justify-center'>
                <Menu.Item className={'hover:bg-customNeon w-full py-1 rounded-md px-3 hover:text-customGray font-semibold text-customNeon'}>
                <Link href={'/dashboard'} >Dashboard</Link>
                </Menu.Item>
                <Menu.Item className={'hover:bg-customNeon w-full py-1 rounded-md px-3 hover:text-customGray font-semibold text-customNeon'}>
                <Link href={'/dashboard/contact-info'} >Contact</Link>
                </Menu.Item>
                <Menu.Item className={'hover:bg-customNeon w-full py-1 rounded-md px-3 hover:text-customGray font-semibold text-customNeon'}>
                <Link href={'/dashboard/project-info'} >Projects</Link>
                </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    // </div>
  )
}

