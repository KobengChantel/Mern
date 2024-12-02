import mongoose from 'mongoose'

const connectToMongoDB = async () =>
{
  try{
    await mongoose.connect("mongodb+srv://note:note@noteapp.juw7m.mongodb.net/?retryWrites=true&w=majority&appName=noteApp");
    console.log("Connected to MongoDB");
  }catch(error){ 
  console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;