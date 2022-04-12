import { Router } from "express";
import { AuthenticatedUser, Login, Logout, Register, Update, UpdatePassword } from "./controllers/auth_controller";
import { CreateDepartment, DeleteDepartment, Departments, GetDepartment, UpdateDepartment } from "./controllers/department_conroller";
import { CreateEmployee, DeleteEmployee, Employees, ExportUsersCSV, GetEmployee, UpdateEmployee } from "./controllers/employee_controller";
import { CreateGoal, DeleteGoal, GetGoal, Goals, UpdateGoal } from "./controllers/goal_controller";
import { Permissions } from "./controllers/permission_controller";
import { CreateRole, DeleteRole, GetRole, Roles, UpdateRole } from "./controllers/role_controller";
import { CreateTeam, DeleteTeam, GetTeam, Teams, UpdateTeam } from "./controllers/team_controller";
import { AuthMiddleware } from "./Middleware/auth_midleware";
import { PermissionMiddleware } from "./Middleware/permission_middleware";


export const routes=(router:Router)=>{

    //routes for the individual user
    router.post('/api/register',Register),
    router.post('/api/login',Login),
    router.get('/api/user',AuthMiddleware,AuthenticatedUser)
    router.post('/api/logout',AuthMiddleware,Logout)
    router.put('/api/info',AuthMiddleware,Update)
    router.put('/api/password',AuthMiddleware,UpdatePassword)

    //routes for the employees 
    router.get('/api/employees',AuthMiddleware,PermissionMiddleware('employees'), Employees)
    router.post('/api/employees',AuthMiddleware,PermissionMiddleware('employees'),CreateEmployee)
    router.get('/api/employees/:id',AuthMiddleware,PermissionMiddleware('employees'),GetEmployee)
    router.put('/api/employees/:id',AuthMiddleware,PermissionMiddleware('employees'),UpdateEmployee)
    router.delete('/api/employees/:id',AuthMiddleware,PermissionMiddleware('employees'),DeleteEmployee)
    router.post('/api/employees/export',AuthMiddleware,ExportUsersCSV)

    //routes for permissions
    router.get('/api/permissions',AuthMiddleware,Permissions)

    //routes for roles
    router.get('/api/roles',AuthMiddleware,PermissionMiddleware('roles'),Roles)
    router.post('/api/roles',AuthMiddleware,PermissionMiddleware('roles'),CreateRole)
    router.get('/api/roles/:id',AuthMiddleware,PermissionMiddleware('roles'),GetRole)
    router.put('/api/roles/:id',AuthMiddleware,PermissionMiddleware('roles'),UpdateRole)
    router.delete('/api/roles/:id',AuthMiddleware,PermissionMiddleware('roles'),DeleteRole)

    //routes for departments
    router.get('/api/departments',AuthMiddleware,PermissionMiddleware('departments'),Departments)
    router.post('/api/departments',AuthMiddleware,PermissionMiddleware('departments'),CreateDepartment)
    router.get('/api/departments/:id',AuthMiddleware,PermissionMiddleware('departments'),GetDepartment)
    router.put('/api/departments/:id',AuthMiddleware,PermissionMiddleware('departments'),UpdateDepartment)
    router.delete('/api/departments/:id',AuthMiddleware,PermissionMiddleware('departments'),DeleteDepartment)

    //routes for teams
    router.get('/api/teams',AuthMiddleware,PermissionMiddleware('teams'),Teams)
    router.post('/api/teams',AuthMiddleware,PermissionMiddleware('teams'),CreateTeam)
    router.get('/api/teams/:id',AuthMiddleware,PermissionMiddleware('teams'),GetTeam)
    router.put('/api/teams/:id',AuthMiddleware,PermissionMiddleware('teams'),UpdateTeam)
    router.delete('/api/teams/:id',AuthMiddleware,PermissionMiddleware('teams'),DeleteTeam)    
    
    //routes for goals
    router.get('/api/goals',AuthMiddleware,PermissionMiddleware('goals'),Goals)
    router.post('/api/goals',AuthMiddleware,PermissionMiddleware('goals'),CreateGoal)
    router.get('/api/goals/:id',AuthMiddleware,PermissionMiddleware('goals'),GetGoal)
    router.put('/api/goals/:id',AuthMiddleware,PermissionMiddleware('goals'),UpdateGoal)
    router.delete('/api/goals/:id',AuthMiddleware,PermissionMiddleware('goals'),DeleteGoal)     

}
