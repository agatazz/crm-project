import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { User } from "../../models/user";

const Employees= ()=>{
  const [employees,setEmployees]=useState([])

  useEffect(()=>{
    (
     async () => {
       const {data}=await axios.get('employees')
       setEmployees(data)
       }  
    )()
  },[]);

  const del=async (id:number)=>{
    if(window.confirm('Are you sure you want to delete this employees\'s data?')){
      await axios.delete(`employees/${id}`)

      setEmployees(employees.filter((e:User)=>e.id !==id));
    }
  }

        return(
          <Wrapper>
             <div className="pt-3 pb-2 mb-3 border-bottom">
                    <Link to='/employees/create' className="btn btn-sm btn-outline-secondary" >Add</Link>
                  </div>
            <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone number</th>
              <th scope="col">Office</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((employee:User)=>{
              return(
                <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.first_name} {employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.office}</td>
                <td>
                  <div className="btn-group mr-2">
                    <Link to={`/employees/${employee.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                  </div>
                  <div className="btn-group mr-2">
                    <a href="#" className="btn btn-sm btn-outline-secondary" onClick={()=>del(employee.id)}>Delete</a>
                  </div>
                </td>

              </tr>
             )
            
            }) || <span>No data available</span>}
          </tbody>
        </table>
      </div>
          </Wrapper>
            
        )
    }


export default Employees