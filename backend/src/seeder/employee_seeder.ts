import { createConnection, getManager } from "typeorm";
import { User } from "../entity/user_entity";
import bcryptjs from 'bcryptjs'

createConnection().then(async connection=>{
    const userRepository=getManager().getRepository(User);
    const hashedPassword=await bcryptjs.hash('xyz123FirstPass',10);
    await userRepository.save({
        first_name:"Admin",
        last_name:"Admin",
        email:"admin@admin.com",
        password:hashedPassword,
        phoneNumber:"+48000000000",
        office:"Wroclaw",
        position:"Admin",
        role_id:1,
        team_id:2
        
    });
    await userRepository.save({
        first_name:"Editor",
        last_name:"Editor",
        email:"editor@editor.com",
        password:hashedPassword,
        phoneNumber:"+48000000000",
        office:"Wroclaw",
        position:"Editor",
        role_id:2,
        team_id:1
        
    });
    await userRepository.save({
        first_name:"Viewer",
        last_name:"Viewer",
        email:"viewer@viewer.com",
        password:hashedPassword,
        phoneNumber:"+48000000000",
        office:"Wroclaw",
        position:"Viewer",
        role_id:3,
        team_id:1
        
    })
   
    process.exit(0);
});