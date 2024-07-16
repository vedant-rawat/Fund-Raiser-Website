import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/chai', {
        useNewUrlParser: true
    });
    console.log('Connected to MongoDB');
    } catch (error) {
    console.error('Error aa gaya ', error.message);
  }
};

export default connectDB;
