import React, { Component } from 'react';
import logo from './logo.png'
import './Home.css'
import {Link} from 'react-router-dom'

class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="main-content">
                        <img src={logo} alt="Houser Logo" />
                        <div className="login-fields-container">
                            <form className="login-fields">
                                <div class="input-descr">Username</div>
                                <input type="text"></input>
                                <div class="input-descr">Password</div>
                                <input type="text"></input>
                            </form>
                            <Link   to="/dashboard"><button type="button" className="login-button"> Login </button></Link>
                            <button type="button" className="register-button"> Register </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default LoginForm;