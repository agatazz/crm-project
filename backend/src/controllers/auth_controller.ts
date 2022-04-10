import { Request,Response } from "express"
import { RegiserValdiation } from "../validation/register_validation";
import { getManager, Repository } from "typeorm";
import { User } from "../entity/user_entity";
import bcryptjs from 'bcryptjs'
import { sign, verify } from "jsonwebtoken";
export const Register=async (req:Request,res:Response)=>{
    const body=req.body;

    const {error}=RegiserValdiation.validate(body);
    if(error){
        return res.status(400).send(error.details);
    }
    if(body.password!==body.password_confirm){
        return res.status(400).send({
            message:'passwords do not match'
        });
    }//checks if passwords provided in password and password_confirm match

    const repository=getManager().getRepository(User);

    const {password,...user}=await repository.save({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        password:await bcryptjs.hash(body.password,10)//hashes the password

    })

    
    res.send(user)
}

export const Login=async (req:Request,res:Response)=>{
    const repository=getManager().getRepository(User);

    const user=await repository.findOne({email:req.body.email});
    if(!user){
        return res.status(404).send({
            message:'invalid credentials'
        })
    }
    if(!await bcryptjs.compare(req.body.password,user.password)){
        return res.status(404).send({
            message:'invalid credentials'
        })
    }
    //token created based on the user id
    const token=sign({
        id:user.id
    },process.env.SECRET_KEY);
    //sets cookie and determines its lifespan
    res.cookie('jwt',token,{
        httpOnly:true,
        maxAge:24*60*60*1000//1 day
    })
    res.send({
        message:'success'
    })
}

export const AuthenticatedUser=async (req:Request,res:Response)=>{
    const {password,...user}=req['user'];//destructures password from user object to not have it in the response
    //request user(req['user']) is available in controllers that have the auth_middleware declared in their routes

    res.send(user)
   
}

export const Logout=async (req:Request,res:Response)=>{
    res.cookie('jwt','',{
        maxAge:0
    })//to logout it returns an expired cookie
    res.send({
        message:'success'
    })
}

export const Update=async (req:Request,res:Response)=>{
    const user=req['user']
    const repository=getManager().getRepository(User);

    await repository.update(user.id,req.body);//updates the user(by user.id) with request data

    const {password,...data}=await repository.findOne(user.id)
    res.send(data)
}
export const UpdatePassword=async (req:Request,res:Response)=>{
    const user=req['user']

    if(req.body.password!==req.body.password_confirm){
        return res.status(400).send({
            message:'passwords do not match'
        });
    }//same as in the register, checks of the passwords provided in password and password_confirm match
    const repository=getManager().getRepository(User);

    await repository.update(user.id,{
        password:await bcryptjs.hash(req.body.password,10)
    });//hashes the new password

    const {password,...data}=user;
    res.send(data)
}