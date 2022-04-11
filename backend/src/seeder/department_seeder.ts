import { createConnection, getManager } from "typeorm";
import { Department } from "../entity/department_entity";

createConnection().then(async connection=>{
    const userRepository=getManager().getRepository(Department);
    await userRepository.save({
        name:"first department",
        description:"new department"
    })
    await userRepository.save({
        name:"second department",
        description:"new department 2"
    })
    await userRepository.save({
        name:"third department",
        description:"new department 3"
    })
   
    process.exit(0);//stops the command
});//to seed the data: 'npm run roles:seed' in terminal-> defined in package.json