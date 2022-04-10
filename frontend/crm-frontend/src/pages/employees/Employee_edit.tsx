import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Role } from "../../models/role";
import { Team } from "../../models/team";

const EmployeeEdit=(props:any)=>{
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
    const[redirect,setRedirect]=useState(false);

    useEffect(()=>{
        (
            async()=>{
                const response=await axios.get('roles')
                setRoles(response.data);
                const responseTeam=await axios.get('teams')
                setTeams(responseTeam.data)
                const {data}=await axios.get(`employees/${props.match.params.id}`);
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setEmail(data.email);
                setPhoneNumber(data.phoneNumber);
                setOffice(data.office);
                setPosition(data.position)
                setTeamId(data.team_id);
                setRoleId(data.role_id);

            }
        )()
    },[]);



    const submit=async(e:SyntheticEvent)=>{
        e.preventDefault();
        await axios.put(`employees/${props.match.params.id}`,{
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
                        <input className="form-control" 
                            defaultValue={first_name}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="last_name"
                                defaultValue={last_name}
                               onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"
                            defaultValue={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone number</label>
                        <input type="text" className="form-control" name="phoneNumber"
                        defaultValue={phoneNumber}
                              onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Office</label>
                        <input type="text" className="form-control" name="office"
                        defaultValue={office}
                              onChange={e => setOffice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Position</label>
                        <input type="text" className="form-control" name="position"
                        defaultValue={position}
                              onChange={e => setPosition(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Team</label>
                        <select name="teamId" className="form-control"
                        value={team_id}
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
                                defaultValue={role_id}
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

export default EmployeeEdit;