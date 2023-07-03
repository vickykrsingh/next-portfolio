
import MessageAccordion from '@/app/(site)/dashboard/dashboard-component/contact-message-accordion'
import Empty from '@/app/Components/data-not-found'
import React from 'react'

async function ContactInfo() {
  const message = await fetchMessage()
  return (
    <div className='main-container flex flex-col gap-4'>
      {
        message.messages.length==0 || !message ? <Empty/> :
        message.messages.map((m)=>(
          <MessageAccordion name={m.name} email={m.email} interest={m.interest} budget={m.budget} message={m.message} id={m._id} />
        ))
      }
    </div>

  )
}

const fetchMessage = async () => {
  let data = await fetch('http://localhost:3000/api/contact',{
    cache:'no-cache',
    method:'GET',
    headers:{
      'Content-type':'application/json'
    }
  })
  data = await data.json()
  return data;
}

export default ContactInfo


