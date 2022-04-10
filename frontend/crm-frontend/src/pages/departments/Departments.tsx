import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Department } from "../../models/department";
import { Team } from "../../models/team";

const Departments=()=>{
    const[departments,setDepartments]=useState([])
    const[teams,setTeams]=useState([])

    useEffect(()=>{
      (async()=>{
        const {data}=await axios.get('departments')

        setDepartments(data)
      })();
    },[]);

    useEffect(()=>{
      (async()=>{
        const {data}=await axios.get('teams')

        setTeams(data)
      })();
    },[]);

    const hide={
      maxHight:0
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
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              departments.map((d:Department)=>{
                return(
                  <>
                  <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.description}</td>
                    <td> 
                      <div className="btn-group mr-2">
                          <Link to={`/departments/${d.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                      </div>
                    </td>
                    
                  </tr>
                     <tr>
                       <td colSpan={5}>
                         <div className="overflow-hidden">
                           <table className="table table-sm">
                             
                               
                                  <thead>
                                    <tr>
                                  <th>Name</th>
                                  <th>Description</th>
                                  <th>Manger</th>
                                
                                  </tr>
                                  </thead>
                                  <tbody>
                                    {d.team.map((t:Team)=>{
                                     
                                      return(
                                        <>
                                        <tr key={t.id}>
                                          <td>{t.id}</td>
                                          <td>{t.name}</td>
                                          
                                        </tr>
                                        </>
                                      )
                                    })}
                                  </tbody>
                          
                              
                           </table>
                         </div>
                     </td>
                     </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </Wrapper>
)
}
export default Departments;