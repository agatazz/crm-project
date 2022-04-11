import { createConnection, getManager } from "typeorm";
import { Permission } from "../entity/permission_entity";
import { Role } from "../entity/role_entity";

createConnection().then(async connection=>{
    const permissionRepository=getManager().getRepository(Permission);
    const permission_types=['view_user','edit_user','view_roles','edit_roles','view_teams','edit_teams','view_goals','edit_goals','view_departments','edit_departments']//defines the types of the permissions 
    let permissions=[];//so it can later be used when assigning permissions to roles
    for(let i=0;i<permission_types.length;i++){
        permissions.push(await permissionRepository.save({
            name:permission_types[i]
        }))
    }//populates the Permission table with data provided in permission_types
    
    const roleRepository=getManager().getRepository(Role)
    //adds permisions to Admin role
    await roleRepository.save({
        name:'Admin',
        permissions//Admin role has all the permission
    })

    delete permissions[3];//Only Admin can edit roles so this role won't be available to the editor
    //adds permisions to Editor role
    await roleRepository.save({
        name:'Editor',
        permissions
    })

    delete permissions[1];
    delete permissions[5];
    delete permissions[7];
    delete permissions[9];
    //Only Admin can edit roles so this role won't be available to the editor
    //adds permisions to Viewer role
    await roleRepository.save({
        name:'Viewer',
        permissions
    })

    process.exit(0);//stops the command
});//to seed the data: 'npm run roles:seed' in terminal-> defined in package.json



