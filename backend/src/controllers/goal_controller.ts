import {Request,Response} from 'express'
import { getManager } from 'typeorm'
import { Goal } from '../entity/goal_enitity'

export const Goals=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(Goal)
    const goals=await repository.find();
    res.send(goals);
    
}

export const CreateGoal=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(Goal);
    const goal=await repository.save(req.body);
    res.status(201).send(goal);
}

export const GetGoal=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(Goal);
    res.send(await repository.findOne(req.params.id));
}

export const UpdateGoal=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(Goal);
    await repository.update(req.params.id,req.body);
    res.status(202).send(await repository.findOne(req.params.id));
}

export const DeleteGoal=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(Goal);
    await repository.delete(req.params.id);
    res.status(204).send(null);

}