"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Profile from '../profile/page'
import './page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from '@/components/MyCarousel'
import { Button } from 'react-bootstrap'

const page = () => {
    const { data: session } = useSession()
    if(session) {
        return <>
        {console.log(session.user)}
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <Profile user = {session.user.email} name = {session.user.name} />
            <br />
            
            
            <div>
              <MyCarousel/>
            </div>

            <div className='flex items-center justify-center'>
              <Button onClick={()=>{signOut()}}>Sign Out</Button>
            </div>
        </div>
        
        
        
        </>
    }
  return (
    <>
        <div className="bg-blue-800 opacity-80 flex justify-center items-center flex-col p-16 text-white">
          <div className='font-bold text-3xl mb-5' style={{'font-family': "Montserrat, sans-serif"}}>Sign in</div>
          <div className="flex flex-col">
            
            <button onClick={()=>{signIn('google')}} className='w-64 gap-8 px-2 p-1 my-3 rounded-lg flex items-center border border-white'><img src='pics/google.png' height={20} width={35} alt='google' />Continue with Google</button>
            <button onClick={()=>{signIn('github')}} className='w-64 gap-8 px-2 p-1 my-3 rounded-lg flex items-center border border-white'><img src='pics/github.png' height={20} width={35} alt='github' />Continue with Github</button>
          </div>
          
        </div>
        
        
    </>
  )
}

export default page