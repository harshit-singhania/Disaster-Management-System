import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {Users} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // create user object - create entry in db
    // return res

    const {name, email, message} = req.body
    //console.log("email: ", email);

    if (
        [name, email, message].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await Users.create({
        name,
        email, 
        message,
    })

    return res.status(201).json(
        new ApiResponse(200,user, "User registered Successfully")
    )

})

export {registerUser}