
import mongoose from "mongoose";

const uri = "mongodb+srv://prachishinde_17:YCfHM351iDxBagPL@myfirstcluster.e7h8izw.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstCluster"
const connectDB = async () => {
   //console.log("ConnectDB");
   try {
       await mongoose.connect(uri);
       console.log("Connected to MongoDB");
   } catch (error) {
       console.error("Error connecting to MongoDB:", error.message);
   }
};
export default connectDB;

//module.exports = connectDB;