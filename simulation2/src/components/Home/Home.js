import React, { Component } from 'react';
import logo from './logo.png'
import './Home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

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
    axios.post("http://localhost:3000/api/login",{username: this.state.username, password: this.state.password}).then((response) => {
        if(response){
            this.props.history.push('/dashboard')
        } else {
            this.props.history.push('/')
        }
    })
}



    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="main-content">
                        <img src={logo} alt="Houser Logo" />
                        <div className="login-fields-container">
                            <form className="login-fields">
                                <div className="input-descr">Username</div>
                                <input type="text" value ={this.state.username} onChange={(e) => this.handleUsername(e.target.value)}></input>
                                <div className="input-descr">Password</div>
                                <input type="text" value={this.state.password} onChange={(e) => this.handlePassword(e.target.value)}></input>
                            </form>
                            
                            <button type="button" className="login-button" onClick={this.handleLogin}> Login </button>
                            
                            <button type="button" className="register-button"> Register </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default LoginForm;