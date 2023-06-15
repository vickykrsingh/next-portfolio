import React from 'react'
import LoginForm from '@/app/Components/loginForm'
import { getSession } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'


function Login(props) {
  return (
    <LoginForm/>
  )
}

export async function getServerSideProps() {
  console.log("hello -----------------hey")
  return{
    props:{}
  }
}

export default Login

// export async function getServerSideProps({req}){
//   const session = await getSession({req})

//   if(!session){
//     return{
//       redirect:{
//         destination:'/projects',
//         permanent:false
//       }
//     }
//   }
//   return{
//     props:{session}
//   }
// }


