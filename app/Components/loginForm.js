"use client";
import React,{useState,useEffect} from 'react'
import {FcGoogle} from 'react-icons/fc'
import Link from 'next/link'
import axios from 'axios';
import {FaFingerprint} from 'react-icons/fa'
import { getSession, signIn , useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';





function LoginForm() {
  const [togglePass,setTogglePass] = useState(false)
  const session = useSession()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const router = useRouter()
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn('credentials',{
        redirect:false,
        email:email,
        password:password,
        callbackUrl:'/'
      })
      console.log('User is ',user)
      console.log('Session is',session)
      if(user.error===null){
        toast.success("user registered Successfully")
        router.push('/')
      }else{
        toast.error("something went wrong!")
        console.log(user)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  // useEffect(()=>{
  //   if(session?.data?.user){
  //     router.push('/')
  //   }
  // },[])
  return (
    <>
          <section className="flex flex-col gap-2 flex-grow px-5">
            <h1 className="text-center mt-10 mb-5 font-bold text-2xl text-customGray">LOGIN</h1>
            <input type="text" placeholder="Email" className="transparent-input" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <div className='relative'>
            <input type={`${togglePass ? 'text' : 'password'}`} placeholder="Password" className="transparent-input" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <span className={`absolute cursor-pointer top-1/2 right-2 text-lg ${togglePass ? 'text-customWhite' : 'text-customGray'}`}  onClick={()=>{setTogglePass(!togglePass)}}><FaFingerprint/></span>
            </div>
            <section className="w-full text-right">
              <span className="underline underline-offset-2 font-light cursor-pointer text-customGray">Forget Password</span>
            </section>
            <button className="btn-gray p-2" onClick={(e)=>submitHandler(e)} >Login</button>
            <p className="text-center font-semibold text-customGray">or</p>
            <button className="google-login-btn" onClick={()=> signIn('google')} >Login with <span className="text-xl"><FcGoogle/></span></button>
            <p className="text-center my-5 text-customGray font-medium">New User ? <Link href='/auth/register' className="underline underline-offset-2 font-semibold text-customGray">signUp</Link> </p>
        </section>
    </>
  )
}

export default LoginForm;

