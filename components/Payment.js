"use client"
import { useState, useEffect } from 'react';
import {Button, ButtonGroup} from "@nextui-org/button";
// import connectDB from '@/mongodb/mongo';
// import Col from '@/mongodb/colModel';
// import User from '@/model/User';
// import connectDB from '@/db/connectDb';
// import Transaction from '@/model/Transaction';

const Payment = () => {
  const [amount, setAmount] = useState();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log('Razorpay script loaded');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {

    const parsedAmount = parseInt(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    const res = await fetch('/api/createOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ amount: parsedAmount, currency: 'INR' }),
      body: JSON.stringify({amount: parsedAmount})
    });


    const data = await res.json();
    console.log(data)



    if (data) {
      const options = {
        key: process.env.NEXT_PUBLIC_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: 'Your Company Name',
        description: 'Test Transaction',
        order_id: data.id,
        handler: async (response)=> {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);
          alert(`Razorpay Signature: ${response.razorpay_signature}`);
          console.log(response)

          const ans = fetch('/api/addtodb', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ amount: parsedAmount, currency: 'INR' }),
            
            body: JSON.stringify(response) 
          });


          // const client = await connectDB()
          // const newUser = new User({
          //   name: 'Vedanttt',
          //   amount: amount
          // })
          // await newUser.save()

          // await connectDB();
          // const newData = new Col({
          //   name: 'Vedanttt',
          //   amount: amount,
          //   paymentId: response.razorpay_payment_id,
          //   orderId: response.razorpay_order_id,
          //   razorpaySignature: response.razorpay_signature
          // })
          // const savedData = await newData.save();
          // console.log('Data saved successfully:');

          // saveToMongoDB(response)
        },
        prefill: {
          name: 'Vedant Rawat',
          email: 'email@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open(); 

    }     

  };

  // const saveToMongoDB = async (response) => {
  //   try {
  //     await connectDB();
  //     const newData = new Col({
  //       name: 'Vedant',
  //       amount: amount,
  //       paymentId: response.razorpay_payment_id,
  //       orderId: response.razorpay_order_id,
  //       razorpaySignature: response.razorpay_signature,
  //     });
  //     const savedData = await newData.save();
  //     console.log('Data saved successfully:', savedData);
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //     // Handle error saving to MongoDB
  //   }
  // };

  return (
    <div className='flex gap-5'>
      <input className='text-black'
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
      />
      <Button color="primary" isLoading>Pay Now</Button>
    </div>
  );
};

export default Payment;
