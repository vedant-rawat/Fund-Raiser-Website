import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const colSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
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
  },
});

let Col;
try {
  // Check if the model is already defined
  Col = mongoose.model('col');
} catch (e) {
  // Define the model if it's not defined
  Col = mongoose.model('col', colSchema);
}

export default Col;
