import React, { Component } from 'react';
import logo from './logo.png'
import './Home.css'
import {Link} from 'react-router-dom'
import axios from 'react'

class LoginForm extends Component {
    constructor(props){

    
    super(props)
    this.state = {
        username: "",
        password: ""
    }

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
}

handleUsername(value){
    this.setState({username: value})
}

handlePassword(value){
    this.setState({password: value})
}


handleLogin(){
    axios.post("http://localhost:3000/api/login",{username: this.state.username, password: this.state.password}).then((response) => console.log(response)).catch(console.log)
}



    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="main-content">
                        <img src={logo} alt="Houser Logo" />
                        <div className="login-fields-container">
                            <form className="login-fields">
                                <div class="input-descr">Username</div>
                                <input type="text" onChange={(e) => this.handleLogin(e.target.value)}></input>
                                <div class="input-descr" onChange={(e) => this.handlePassword(e.target.value)}>Password</div>
                                <input type="text"></input>
                            </form>
                            <Link to="/dashboard" ><button type="button" className="login-button" onClick={this.handleLogin}> Login </button></Link>
                            <button type="button" className="register-button"> Register </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default LoginForm;