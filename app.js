//import when mjs (type : module)


import express from "express";
import { config } from 'dotenv';
//import 'dotenv/config'
import {router} from "./routers/products.mjs";
import connectDB  from "./db/connect.mjs";

//config();

const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/", (req,res)=>{
//     res.send("I am live");
// })

//console.log("Process.env : ",process.env);

//To set routers
app.use(express.json());
app.use("/api/products", router);

const start = async()=>{
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server connected to port ${PORT}`);
        });
    }
    catch(error)
    {
        console.log(error);
    }
};
start();
