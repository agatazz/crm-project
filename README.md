# crm-project
A simple server side appliaction for managing departemnts,teams and employeees in an organisation. There are three type of user available with different permissions: Admin, Editor and Viewer. 

## Setup
* add a .env file and assign a value to a variable SECRET_KEY
* npm install
* create an empty msql database ([Mysql community server download](https://dev.mysql.com/downloads/)). Then in ormconfig.json 
you can set the username, password and database name you chose


## Start
npm start
also seed the database with available seeders:
* npm run roles:seed 
* npm run npm run goals:seed
* department:seed
* npm run team:seed
* npm run employees:seed

## Funcionality
### As Admin user you:
* Have full User CRUD
* Have full Organisation CRUD(Departments, Teams, Goals)
* Have full Permissions and Roles CRUD 

### As Editor user you:
* Have full User CRUD
* Have full Organisation CRUD(Departments, Teams, Goals)
* Can only view the roles

### As Viewer user you :
* Can view the Users and Organisation data


## Tech stack
* TypeScript v.4.6.3
* Express v.4.17.3
* TypeORM 0.2.40
* ts-node 10.7.0

