import connectDB from "./db/connect.mjs";
import Product from "./models/product.mjs";
import ProductJSON from "./products.json" with { type: "json" };
import dotenv from "dotenv";
dotenv.config();

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        await Product.create(ProductJSON);
        console.log("SUCCESS");
    } catch (error) {
        console.log(error);
    }
};

start();
