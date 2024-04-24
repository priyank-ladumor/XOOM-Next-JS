import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center' >
      <SignIn />
    </div>
  )
}

export default SignInPage
