import React, { Component } from 'react';
import logo from './logo.png'
import './Home.css'

class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <img src={logo} alt="Houser Logo" />
                    <div className="login-fields-container">
                        <form className="login-fields">
                            <div class="input-descr">Username</div>
                            <input type="text"></input>
                            <div class="input-descr">Password</div>
                            <input type="text"></input>
                        </form>
                        <button type="button"> Login </button>
                        <button type="button"> Register </button>
                    </div>
                </div>
            </div >
        );
    }
}

export default LoginForm;