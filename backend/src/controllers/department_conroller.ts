import {Request,Response} from 'express'
import { getManager } from 'typeorm'
import { User } from '../entity/user_entity'
import bcryptjs from 'bcryptjs'
import { Department } from '../entity/department_entity'

export const Departments=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(Department)

    const departments=await repository.find();
    res.send(departments)
    
}

export const CreateDepartment=async(req:Request,res:Response)=>{

    const {name,description,teams}=req.body

    const repository=getManager().getRepository(Department);
    
    const department=await repository.save({
        name,
        description,
        teams:teams.map(id=>{
            return{
                id:id
            }
        })
    })
    
    res.status(201).send(department)
}

export const GetDepartment=async(req:Request,res:Response)=>{
    
    const repository=getManager().getRepository(Department);

    res.send(await repository.findOne(req.params.id,{relations:['teams']})
    )

}

export const UpdateDepartment=async(req:Request,res:Response)=>{

    const {name,description,teams}=req.body

    const repository=getManager().getRepository(Department);
    
    const department=await repository.save({
        id:parseInt(req.params.id),
        name,
        description,
        teams:teams.map(id=>{
            return{
                id:id
            }
        })
    })

    res.status(202).send(department)

}

export const DeleteDepartment=async(req:Request,res:Response)=>{
    
    
    const repository=getManager().getRepository(Department);
    
    await repository.delete(req.params.id);
    res.status(204).send(null);

}