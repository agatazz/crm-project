import {Request,Response} from 'express'
import { getManager } from 'typeorm'
import { User } from '../entity/user_entity'
import bcryptjs from 'bcryptjs'
import { Parser } from 'json2csv'
import { findSourceMap } from 'module'
import { read } from 'fs'

export const Employees=async(req:Request,res:Response)=>{
    const repository=getManager().getRepository(User)

    const employees=await repository.find({
        relations:['role','team']//exposes role  on User entity
    });

    res.send(employees.map(e=>{
        const {password,...data}=e;
        return data;
    }))//removes the password from the response
    
}


export const CreateEmployee=async(req:Request,res:Response)=>{
    const {team_id,role_id,...body}=req.body
    const hashedPassword=await bcryptjs.hash('xyz123FirstPass',10);//sets the default password for the added employees->can be changed later by them

    const repository=getManager().getRepository(User)
    const {password,...employee}=await repository.save({
        ...body,
        password:hashedPassword,
        role:{
            id:role_id//assigns role id to employee
        },
        team:{
            id:team_id

        }
    })
    res.status(201).send(employee)
}

export const GetEmployee=async(req:Request,res:Response)=>{
    

    const repository=getManager().getRepository(User)
    const {password,...employee}=await repository.findOne(req.params.id,{relations:['role','team']});
    res.send(employee)


}

export const UpdateEmployee=async(req:Request,res:Response)=>{
    
    const {role_id,team_id,...body}=req.body

    const repository=getManager().getRepository(User)
    
    await repository.update(req.params.id,{
        ...body,
        role:{
            id:role_id
        },
        team:{
            team:team_id
        }
    });
    const {password, ...employee} = await repository.findOne(req.params.id, {relations: ['role','team']});


    res.status(202).send(employee);

    

}

export const DeleteEmployee=async(req:Request,res:Response)=>{
    
    
    const repository=getManager().getRepository(User);
    
    await repository.delete(req.params.id);
    res.status(204).send(null);

}

// export const ExportUsersCSV=async(req:Request,res:Response)=>{
//     const parser=new Parser({
//         fields:['ID','Fist name','Last name','Email','Phone number','Office','Department','Team','Position']
//     })

//     const repository=getManager().getRepository(User);
//     const employees=await repository.find({relations:['role','department','team']})

//     const json=[];
//     employees.forEach((employee:User)=>{
//         json.push({
//             ID:employee.id,
//             FirstName:employee.first_name,
//             LastName:employee.last_name,
//             Email:employee.email,
//             PhoneNumber:employee.phoneNumber,
//             Offcie:employee.office,
//             Department:employee.department,
//             Team:employee.team,
//             Position:employee.position

//         })
//     })
//     const csv=parser.parse(json)
//     res.header('Content-Type','text/csv');
//     res.attachment('Employee-export.csv')
//     res.send(csv)
// }