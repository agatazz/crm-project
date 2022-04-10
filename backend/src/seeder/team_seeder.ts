// import { createConnection, getManager } from "typeorm";
// import { Department } from "../entity/department_entity";
// import { Permission } from "../entity/permission_entity";
// import { Role } from "../entity/role_entity";
// import { Team } from "../entity/team_entity";
// import { User } from "../entity/user_entity";

// createConnection().then(async connection=>{
//     const userRepository=getManager().getRepository(Team);
//     await userRepository.save({
//         name:"first goal",
//         manager:"1"

//     })
   
//     process.exit(0);//stops the command
// });//to seed the data: 'npm run roles:seed' in terminal-> defined in package.json