import React from 'react'
import Link from 'next/link'
// import Payment from '@/components/Payment'

const page = () => {
  return (
    <>
    <div className='text-center mt-12'>
      <div className='m-5'>Helloooo</div>
      <Link className='border border-white p-1' href="/login">Login</Link>
    </div>
      
    </>
    
  )
}

export default page