import React, { useState,useEffect } from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Wrapper =(props:any)=>{
    const [redirect,setRedirect]=useState(false)
    useEffect(()=>{
        (
            async()=>{
                try{
                    const {data}=await axios.get('user');
                }
                catch(e){
                    setRedirect(true)
                }
                
            }
        )();
       
    },[]);

    if(redirect){
        return <Redirect to="/login"></Redirect>
    }
  
        return(
            <>
                <Nav></Nav>

                <div className="container-fluid">
            <div className="row">
            <Menu></Menu>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                {props.children}
     
                </main>
                </div>
                </div>
            </>
        )

}

export default Wrapper