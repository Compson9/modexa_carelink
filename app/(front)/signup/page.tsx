// import LoginForm from '@/components/Auth/LoginForm'
import SignupForm from '@/components/Auth/SignupForm'
import Image from 'next/image'
import React from 'react'

export default function page() {
 
  return (
    <div className=' min-h-screen '>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full
       max-w-5xl mx-auto bg-white border dark:bg-slate-950 border-gray-200 rounded-lg shadow 
      dark:border-gray-500 overflow-hidden ">
        <div className="hidden md:flex  linear-bg">
          {/* Image */}
          <Image alt='doctor' height={223} width={2200} src="/login2.jpg" />

        </div>
        <div className="">
          {/* Sign Up form component from Auth page */}
          <SignupForm />
        </div>
      </div>
    </div>
  )
}
