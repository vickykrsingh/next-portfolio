"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import {FaFingerprint} from 'react-icons/fa'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast,Toaster } from 'react-hot-toast'

function RegisterForm() {
  const [togglePass,setTogglePass] = useState(false)
  const [toggleConfirmPass,setToggleConfirmPass] = useState(false)
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post('/api/register',{
        username,
        email,
        password,
        confirmPassword
      })
      if(data.success){
        toast.success(data?.message)
        router.push('/auth/login')
      }else{
        toast.error(data?.message)
      }
    } catch (error) {
      toast.error("Something went wrong!")
    }
  }

  return (
    <section className="flex flex-col flex-grow px-5">
    <h1 className="text-center mt-10 font-bold text-2xl text-customGray">REGISTER</h1>
    <input type="text" placeholder="User Name" className="transparent-input" value={username} onChange={(e)=>setUsername(e.target.value)} />
    <input type="text" placeholder="Email" className="transparent-input" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <div className='relative'>
    <input type={`${togglePass ? 'text' : 'password'}`} placeholder="Password" className="transparent-input" value={password} onChange={(e)=>setPassword(e.target.value)} />
    <span className={`absolute cursor-pointer top-1/2 right-2 text-lg ${togglePass ? 'text-customWhite' : 'text-customGray'}`}  onClick={()=>{setTogglePass(!togglePass)}}><FaFingerprint/></span>
    </div>
    <div className='relative'>
    <input type={`${toggleConfirmPass ? 'text' : 'password'}`} placeholder="Conform Password" className="transparent-input" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
    <span className={`absolute cursor-pointer top-1/2 right-2 text-lg ${toggleConfirmPass ? 'text-customWhite' : 'text-customGray'}`}  onClick={()=>{setToggleConfirmPass(!toggleConfirmPass)}}><FaFingerprint/></span>
    </div>
    <section className="w-full text-right">
      <span className="underline underline-offset-2 font-light cursor-pointer text-customGray">Forget Password</span>
    </section>
    <button className="btn-gray p-2" onClick={(e)=>handleSubmit(e)}>Register</button>
    <p className="text-center font-semibold text-customGray my-2">or</p>
    <button className="google-login-btn">Signup with <span className="text-xl"><FcGoogle/></span></button>
    <p className="text-center my-5 text-customGray font-medium">New User ? <Link href='/auth/login' className="underline underline-offset-2 font-semibold text-customGray">signUp</Link> </p>
</section>
  )
}

export default RegisterForm