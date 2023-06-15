import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
async function Contact() {
  const session = await getServerSession(authOptions);
  return (
    <div className='w-full min-h-screen text-white'>
      hello world contact page
      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}

export default Contact