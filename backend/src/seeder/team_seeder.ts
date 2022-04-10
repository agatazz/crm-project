import { createConnection, getManager } from "typeorm";
import { Team } from "../entity/team_entity";

createConnection().then(async connection=>{
    const userRepository=getManager().getRepository(Team);
    await userRepository.save({
        name:"first team",
        members:[],
        goals:[]
        
    })
   
    process.exit(0);
});