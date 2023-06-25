"use client"
import React,{useState,useTransition} from "react";
import {toast} from 'react-hot-toast'
import { useSession } from "next-auth/react";
import axios from "axios";


function ContactForm() {
  // required hooks
  const { data: session } = useSession();
  const [name,setName] = useState('');
  const [email,setEmail] = useState(session?.user?.email||'');
  const [interest,setInterest] = useState('')
  const [budget,setBudget] = useState('')
  const [message,setMessage] = useState('')
  // function to submit form data
  const submitForm = async (e) => {
    e.preventDefault()
    if(!session?.user){
      toast.error("Not logged In ! Login to send message")
      return
    }else{
      setEmail(session?.user?.email)
    }
    // if any fields are empty then return the error message
    if(!name || !interest || !budget || !message){
      console.log(name,email,interest,budget,message)
      toast.error('All fields are required')
      return 
    }
  // checking user is logged in or not if not then returning the error message
  // sending state variable value to the create message server action function 
  const myEmail = await session?.user?.email;
    try {
      let {data} = await axios.post('http://localhost:3000/api/contact/create-message',{
        name,
        email:myEmail,
        interest,
        budget,
        message
    })
    if(data?.success){
      toast.success(data.message)
      setName('')
      setInterest('')
      setBudget('')
      setMessage('')
    }else{
      toast.error(data.message)
    }
    } catch (error) {
      toast.error('something went wrong on client side')
    }
  } 
  return (
    <form className="lg:flex items-center justify-center" id="contactForm" onSubmit={(e)=>submitForm(e)}>
      <section className="flex flex-col gap-4 lg:w-[70%]">
        {/* Contact form heading */}
        <h1 className="text-lg font-semibold text-customWhite tracking-wide">
          Drop a message
        </h1>
        {/* Name input section */}
        <section className="relative">
          <input
          required
            value={name}
            onChange={(e)=>setName(e.target.value)}
            name="name"
            type="text"
            id="small_outlined"
            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-customWhite bg-transparent border-1 border-customWhite appearance-none focus:outline-none focus:ring-0 focus:border-customNeon peer"
            placeholder=" "
          />
          <label
            htmlFor="small_outlined"
            className="absolute text-sm text-customWhite dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-customGray px-2 peer-focus:px-2 peer-focus:text-customNeon peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
          >
            Your name
          </label>
        </section>
        {/* Email input section */}
        <section className="relative">
          <input
          value={session?.user?.email || email}
          onChange={(e)=>setEmail(e.target.value)}
          disabled
          name="email"
            type="text"
            id="small_outlined"
            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-customWhite bg-transparent border-1 border-customWhite appearance-none focus:outline-none focus:ring-0 focus:border-customNeon peer"
            placeholder=" "
          />
          <label
            htmlFor="small_outlined"
            className="absolute text-sm text-customWhite dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-customGray px-2 peer-focus:px-2 peer-focus:text-customNeon peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
          >
            Email
          </label>
        </section>
        {/* interested choice (select tag) section */}
        <select
        required
        value={interest}
        onChange={(e)=>setInterest(e.target.value)}
        name="interest"
          id="small"
          className="block w-full p-2 text-xs text-customWhite border border-customWhite bg-customGray focus:ring-customNeon focus:border-customNeon "
        >
          <option >What you are interested</option>
          <option value="web-designing">Web designing</option>
          <option value="Frontend-development">Frontend development</option>
          <option value="Fullstack-development">Fullstack development</option>
          <option value="Logo-Designing">Logo Designing</option>
        </select>
        {/* Budget choice (select tag) section */}
        <select
        required
        value={budget}
        onChange={(e)=>setBudget(e.target.value)}
        name="budget"
          id="small"
          className="block w-full p-2 text-xs text-customWhite border border-customWhite bg-customGray focus:ring-customNeon focus:border-customNeon "
        >
          <option>Select your budget in $</option>
          <option value="web-designing">1 to 25</option>
          <option value="25-100">25 to 100</option>
          <option value="100-200">100 to 200</option>
          <option value="200+">200 or above</option>
        </select>
        {/* text area section */}
        <textarea
        required
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        name="message"
          id="message"
          rows="4"
          className="resize-none block p-2.5 w-full text-sm text-customWhite bg-customGray border border-customWhite focus:ring-customNeon focus:border-customNeon place placeholder:text-customWhite"
          placeholder="Drop a message...."
        ></textarea>
        {/* Send button section */}
        <button className="btn-neon px-3 py-2" type="submit" >
          Send
        </button>
      </section>
    </form>
  );
}

export default ContactForm;