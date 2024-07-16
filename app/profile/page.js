import React from 'react'
import Payment from '@/components/Payment'

const Profile = (props) => {
  return (
    <>
        <div className="container mx-auto p-5 gap-5 text-xl flex flex-col justify-center items-center bg-blue-950 text-white">
          <div>Welcome <span className='font-bold text-xl'>{props.name}</span></div>
          <div>Your Email is : <span className='font-bold text-xl'>{props.user}</span></div>

          <Payment />
        </div>
        
    </>
    
  )
}

export default Profile