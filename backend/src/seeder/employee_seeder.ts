import { createConnection, getManager } from "typeorm";
import { User } from "../entity/user_entity";

createConnection().then(async connection=>{
    const userRepository=getManager().getRepository(User);
    await userRepository.save({
        first_name:"Admin",
        last_name:"Admin",
        email:"admin@admin.com",
        phoneNumber:"+48000000000",
        office:"Wroclaw",
        position:"Admin",
        role_id:"1",
        team_id:1
        
    });
    await userRepository.save({
        first_name:"Editor",
        last_name:"Editor",
        email:"editor@editor.com",
        phoneNumber:"+48000000000",
        office:"Wroclaw",
        position:"Editor",
        role_id:"2",
        team_id:1
        
    });
    await userRepository.save({
        first_name:"Viewer",
        last_name:"Viewer",
        email:"viewer@viewer.com",
        phoneNumber:"+48000000000",
        office:"Wroclaw",
        position:"Viewver",
        role_id:"3",
        team_id:1
        
    })
   
    process.exit(0);
});