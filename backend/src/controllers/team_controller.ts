import{Request,Response} from 'express'
import { parse } from 'path';
import { getManager } from 'typeorm'
import { Role } from '../entity/role_entity';
import { Team } from '../entity/team_entity';


export const Teams=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(Team)

    const teams=await repository.find();
    res.send(teams)
}


export const CreateTeam=async(req:Request,res:Response)=>{
    const {name,department,manager,members,goals}=req.body

    const repository=getManager().getRepository(Team);
    
    const team=await repository.save({
        name,
        department,
        manager,
        members:members.map(id=>{
            return{
                id:id
            }
        }),
        goals:goals.map(id=>{
            return{
                id:id
            }
        })
       
       
    })

    res.status(201).send(team)
}

export const GetTeam=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(Team);

    res.send(await repository.findOne(req.params.id,{relations:[,'manager','members','goals','department']})
    )
}

export const UpdateTeam=async(req:Request,res:Response)=>{
    const {name,department,manager,members,goals}=req.body

    const repository=getManager().getRepository(Team);
    
    const team=await repository.save({
        id:parseInt(req.params.id),
        name,
        department,
        manager,
        members:members.map(id=>{
            return{
                id:id
            }
        }),
        goals:goals.map(id=>{
            return{
                id:id
            }
        })
       
    })

    res.status(202).send(team)
}

export const DeleteTeam=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(Team);
    await repository.delete(req.params.id)

    res.status(204).send()
}