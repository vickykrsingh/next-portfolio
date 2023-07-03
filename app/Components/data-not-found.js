import Image from 'next/image'
import React from 'react'
import EmptyImg from '../assests/empty.svg'

export default function Empty() {
  return (
    <div className='w-full h-[80vh] !flex items-center justify-center flex-col gap-8'>
      <Image src={EmptyImg} width={200} height={200} alt='no data found' />
      <h3 className='text-2xl font-semibold text-neutral-400'>No data found</h3>
    </div>
  )
}
