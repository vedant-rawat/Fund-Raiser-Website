import React from "react";
import Link from "next/link";
// import Payment from '@/components/Payment'

const page = () => {
  return (
    <>
      {/* <div className='text-center w-full h-screen bg-cover flex justify-center items-start' style={{ backgroundImage: "url('/pics/backkk.jpg')" }}> */}
      {/* <Link className='mt-14 border border-white px-2 py-1 rounded-lg bg-blue-700 text-2xl' href="/login">Login</Link> */}

      {/* </div> */}
      <div className="flex items-center min-h-screen bg-cover" style={{ backgroundImage: "url('/pics/backkk.jpg')"}}>
        <div className="mx-11 text-xl">
            <div className="p-4 font-bold text-2xl">
              Pay to Your Favourite Creators
            </div>
            <div className="flex gap-8 p-4 items-center justify-between">
              <img src="/pics/arijit.jpeg" className="w-16 rounded-full" alt="arijit" />
              <div>Arijit Singh</div>
              <Link className='border border-white rounded-lg bg-blue-600 px-2' href="/login">Click</Link>
            </div>
            <div className="flex gap-8 p-4 items-center justify-between">
              <img src="/pics/arijit.jpeg" className="w-16 rounded-full" alt="arijit" />
              <div>Ankit Tiwari</div>
              <Link className='border border-white rounded-lg bg-blue-600 px-2' href="/login">Click</Link>
            </div>
            <div className="flex gap-8 p-4 items-center justify-between">
              <img src="/pics/arijit.jpeg" className="w-16 rounded-full" alt="arijit" />
              <div>Manoj Pal</div>
              <Link className='border border-white rounded-lg bg-blue-600 px-2' href="/login">Click</Link>
            </div>
            <div className="flex gap-8 p-4 items-center justify-between">
              <img src="/pics/arijit.jpeg" className="w-16 rounded-full" alt="arijit" />
              <div>Udit Narayan</div>
              <Link className='border border-white rounded-lg bg-blue-600 px-2' href="/login">Click</Link>
            </div>
            <div className="flex gap-8 p-4 items-center justify-between">
              <img src="/pics/arijit.jpeg" className="w-16 rounded-full" alt="arijit" />
              <div>Sonu Nigam</div>
              <Link className='border border-white rounded-lg bg-blue-600 px-2' href="/login">Click</Link>
            </div>
            
            
          </div>
      </div>
    </>
  );
};

export default page;
