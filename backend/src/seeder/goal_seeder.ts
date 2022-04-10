import { createConnection, getManager } from "typeorm";
import { Goal } from "../entity/goal_enitity";

createConnection().then(async connection=>{
    const userRepository=getManager().getRepository(Goal);
    await userRepository.save({
        name:"first goal",
        startDate:"2022-02-07",
        stopDate:"2023-02-03",
        description:"new goal"
    })
           
        
   
    process.exit(0);
});