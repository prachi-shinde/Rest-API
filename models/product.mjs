import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    price : {
        type : Number,
        required : [true, "Please provide a Price"]
    },
    featured : {
        type : Boolean,
        default : false
    },
    rating : {
        type : Number,
        default : 4.9
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    company : {
        type : String, 
        enum : {
            values : ["apple", "dell", "samsung","mi"],
            message : `{VALUE} is not supported`
        }
    }
})

export default mongoose.model("Product",productSchema);