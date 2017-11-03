import React, { Component } from 'react';
import './Header.css';
import logo2 from './houser-nav-logo.png'

class Header extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <div className='header-child'>
                        <div className='header-left'>
                            <img src={logo2} alt="Houser Logo" className="header-logo" />
                            <span className="houser">Houser</span> Dashboard
                        </div>
                        <div className='header-right'>
                            Logout
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;