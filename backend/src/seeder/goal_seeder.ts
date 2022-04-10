import { createConnection, getManager } from "typeorm";
import { Goals } from "../controllers/goal_controller";
import { Goal } from "../entity/goal_enitity";
import { Permission } from "../entity/permission_entity";
import { Role } from "../entity/role_entity";
import { User } from "../entity/user_entity";

createConnection().then(async connection=>{
    const userRepository=getManager().getRepository(Goal);
    await userRepository.save({
        name:"first goal",
        startDate:"2022-02-07",
        stopDate:"2023-02-03",
        description:"new goal"
    })
           
        
   
    process.exit(0);//stops the command
});//to seed the data: 'npm run roles:seed' in terminal-> defined in package.json