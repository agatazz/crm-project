import {Request,Response} from 'express'
import { getManager } from 'typeorm'
import { User } from '../entity/user_entity'
import bcryptjs from 'bcryptjs'
import { Department } from '../entity/department_entity'
import { Goal } from '../entity/goal_enitity'

export const Goals=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(Goal)

    const goals=await repository.find();

    res.send(goals)//removes the password from the response
    
}

export const CreateGoal=async(req:Request,res:Response)=>{

    const repository=getManager().getRepository(Goal);
    const goal=await repository.save(req.body)
    
    res.status(201).send(goal)
}

export const GetGoal=async(req:Request,res:Response)=>{
    

    const repository=getManager().getRepository(Goal)
    
    res.send(await repository.findOne(req.params.id))


}

export const UpdateGoal=async(req:Request,res:Response)=>{

    const repository=getManager().getRepository(Goal)
    
    await repository.update(req.params.id,req.body);

    res.status(202).send(await repository.findOne(req.params.id));

}

export const DeleteGoal=async(req:Request,res:Response)=>{
    
    
    const repository=getManager().getRepository(Goal);
    
    await repository.delete(req.params.id);
    res.status(204).send(null);

}