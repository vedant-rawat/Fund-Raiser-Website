// "use server"
import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '@/model/User';
import connectDB from '@/db/connectDb';
// import Transaction from '@/model/Transaction';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_KEY_ID,
  key_secret: process.env.SECRET_ID
});

export async function POST(request) {
    const { amount } = await request.json();

    const options = {
      amount: amount*100,
      currency: 'INR',
    };

    // await collection.insertMany({name: 'Vedant', amount:amount})

    try {
      
      const order = await razorpay.orders.create(options);

      // const client = await mongoose.connect('mongodb://localhost:27017/chai')
      const client = await connectDB()
      
      const newUser = new User({
        name: 'Vedanttt',
        amount: amount
      })
      await newUser.save()

      return NextResponse.json(order)
    } catch (error) {
      console.error('Error creating order:', error);
    }
}



