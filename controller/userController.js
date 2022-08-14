import userModel from "../model/user.js";
import mongoose from "mongoose";

export const signupUser = async(req,res) =>{
    try {
        const name = req.body.name;
        const userName = req.body.userName;
        const password = req.body.password;
        const User = await userModel.findOne({userName:userName})
            if(User){
                res.json({message:"user already exist"})
            }
            else{
                userModel.create({
                    name:name,
                    userName:userName,
                    password:password
                }).then(()=>res.json({message:"Signup Successfully",name,userName})) 
            }

    } catch (err) {
        res.json({message:"error in sending the data to database"})
    }
}

export const loginUser = async(req,res) => {
        const userName = req.body.userName;
        const password = req.body.password;
        const temp = await userModel.findOne({userName:userName});
        if(temp)
        {
            if(password==temp.password)
            {
                res.json({message: "logged in",user:temp});
            }
            else{
                res.json({message:"please enter valid password"});
            }
        }
        else{
            res.json({message:"user not found"});
        }
        
}