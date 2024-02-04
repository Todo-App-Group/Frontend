'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const SignUpButton = () => {
    const router = useRouter();

    const handleSignup = () =>{
        router.push('/pages/signup');
    }

  return (
    <div>
        <div className='bg-red-800 text-white w-16 h-9 rounded-full flex justify-center items-center'>
            <button onClick={handleSignup}>Signup</button>
        </div>
    </div>
  )
}

export default SignUpButton