import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    // required: true
  },
  orderId: {
    type: String,
    // required: true
  },
  razorpaySignature: {
    type: String,
    // required: true
  }
});

export default mongoose.models.Transaction || model("Transaction", userSchema)
