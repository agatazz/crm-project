import { render } from "@testing-library/react";
import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router-dom";
const Login=()=>{
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[redirect,setRedirect]=useState(false);

    const submit=async (e:SyntheticEvent)=>{
        e.preventDefault();

        const {data}=await axios.post('login',{
            email,
            password
        })
        console.log(data)
        setRedirect(true)
    }
    if(redirect){
        return<Redirect to={'/'}/>;
    };
    
    return(
        
        <div className="container">
            <form className="form-signin" onSubmit={submit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                       onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                       onChange={e => setPassword(e.target.value)}
                       required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>
    )
} 

export default Login