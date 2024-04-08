import mongoose,{Schema, model} from "mongoose"

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
},{timestamps:true})


export const Users=model("Users",userSchema)