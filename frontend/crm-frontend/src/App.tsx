import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';
import Employees from './pages/employees/Employees';
import Register from './pages/Register';
import Login from './pages/Login';
import EmployeeCreate from './pages/employees/Employee_create';
import EmployeeEdit from './pages/employees/Employee_edit';
import Roles from './pages/roles/Roles';
import RoleCreate from './pages/roles/Role_create';
import RoleEdit from './pages/roles/Role_edit';
import Departments from './pages/departments/Departments';
// import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Route path={'/'} exact component={Dashboard} />
      <Route path={'/employees'} exact component={Employees} />
      <Route path={'/employees/create'}  component={EmployeeCreate} />
      <Route path={'/employees/:id/edit'}  component={EmployeeEdit} />
      <Route path={'/register'} component={Register} />
      <Route path={'/login'} component={Login} />
      <Route path={'/roles'} exact component={Roles} />
      <Route path={'/roles/create'} exact component={RoleCreate} />
      <Route path={'/roles/:id/edit'} component={RoleEdit} />
      <Route path={'/departments'} exact component={Departments} />
    

</BrowserRouter>
    </div>
  );
}

export default App;
