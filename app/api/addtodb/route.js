// "use server"
import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/db/connectDb';
import Transaction from '@/model/Transaction';


export async function POST(request) {
    const data = await request.json();

    console.log(data)


    try {
      
      const client = await connectDB()
      
      const newUser = new Transaction({
        name: 'Vedanttt',
        // amount: 12500,
        paymentId: data.razorpay_payment_id,
        orderId: data.razorpay_order_id,
        razorpaySignature: data.razorpay_signature
      })
      await newUser.save()

      return NextResponse.json('added to database')
    } catch (error) {
      console.error('Error creating order:', error);
    }
}



