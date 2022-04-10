import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Role } from "../../models/role";
import { Team } from "../../models/team";

const EmployeeCreate=()=>{
    const [first_name,setFirstName]=useState('');
    const [last_name,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [role_id,setRoleId]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [office,setOffice]=useState('');
    const [position,setPosition]=useState('');
    const [team_id,setTeamId]=useState('');
    const [teams,setTeams]=useState([]);
    const [roles,setRoles]=useState([]);
    const[redirect,setRedirect]=useState(false)

    useEffect(()=>{
        (
            async()=>{
                const {data}=await axios.get('roles')
                setRoles(data)
            }
        )()
    },[]);

    useEffect(()=>{
        (
            async()=>{
                const {data}=await axios.get('teams')
                setTeams(data)
            }
        )()
    },[]);

    const submit=async(e:SyntheticEvent)=>{
        e.preventDefault();
        await axios.post('employees',{
            first_name,
            last_name,
            email,
            phoneNumber,
            office,
            position,
            team_id,
            role_id,
        })
        setRedirect(true)
    }

    if(redirect){
        return <Redirect to='/employees'/>
    }
    return(
        <Wrapper>
            <form onSubmit={submit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="first_name"
                               onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="last_name"
                               onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"
                              onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone number</label>
                        <input type="text" className="form-control" name="phoneNumber"
                              onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Office</label>
                        <input type="text" className="form-control" name="office"
                              onChange={e => setOffice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Position</label>
                        <input type="text" className="form-control" name="position"
                              onChange={e => setPosition(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Team</label>
                        <select name="teamId" className="form-control"
                                onChange={e => setTeamId(e.target.value)}
                        >
                            <option>Select Role</option>
                            {teams.map(
                                (team: Team) => {
                                    return (
                                        <option key={team.id} value={team.id}>{team.name}</option>
                                    )
                                }
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Role</label>
                        <select name="roleId" className="form-control"
                                onChange={e => setRoleId(e.target.value)}
                        >
                            <option>Select Role</option>
                            {roles.map(
                                (role: Role) => {
                                    return (
                                        <option key={role.id} value={role.id}>{role.name}</option>
                                    )
                                }
                            )}
                        </select>
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
        </Wrapper>
    )
}

export default EmployeeCreate;