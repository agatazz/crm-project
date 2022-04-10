import React,{ Component } from "react";
import '../styles/Login.css'

class Register extends Component{
    render(){
        return(
           
        <main className="form-signin">
             <form>
                
                <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>

            
        )
    }
}
export default Register