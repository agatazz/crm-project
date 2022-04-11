import { createConnection, getManager } from "typeorm";
import { Team } from "../entity/team_entity";

createConnection().then(async connection=>{
    const userRepository=getManager().getRepository(Team);
    await userRepository.save({
        name:"first team",
        members:[],
        goals:[]
        
    });
    await userRepository.save({
        name:"second team",
        members:[],
        goals:[]
        
    });
    await userRepository.save({
        name:"third team",
        members:[],
        goals:[]
        
    })
   
    process.exit(0);
});