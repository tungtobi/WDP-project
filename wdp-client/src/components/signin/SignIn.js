import React, { Component } from 'react';
import { withRouter, BrowserRouter, Route } from 'react-router-dom';

import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';

import Auth from '../../Authenticate';
import axios from 'axios';
import Home from '../home/Home';
import Background from '../background/Background';
import '@fortawesome/fontawesome-free/js/all';
import './style.css';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserDrop: false,
            email: null,
            displayName: null,
        }
    }

    handSignIn() {
        
        Auth.signin(() => {
            this.props.history.push('/home');
        });
    }

    returnHome() {
        this.props.history.push('/home');
    }
    openSignUp() {
        this.props.history.push('/signup');
    }
    render() {
        return (
            <div className="signin">
                <Background width = '100%' />
                <div className="header">
                    <div className="header_left">
                        <button className="homebtn" title="Home" onClick={() => this.returnHome()}>
                            <img src={logo} className="App-logo" alt="logo" width={40} height={40} />
                        </button>
                        <span className="title">WDP</span>
                    </div>
                </div>
                <div className="maincontent">
                    <div className="signin_title">Sign in to WDP</div>
                    <div className="signin_box">
                        <img src={logo2} style={{ position: 'relative', width: '70%', margin: '0 auto' }} />
                        <div style={{height: '20%'}}></div>
                        <button className="signin_git_button" onClick={() => this.handSignIn()}>
                            <i className="fab fa-github" style={{width: '20px', height: '20px', paddingRight: '10px'}}></i>
                            <span>Sign in with GitHub</span>
                        </button>
                    </div>
                </div>
                <div className="footer">
                    <span>v1.0</span>
                    <span>© 2019 Web Development Platform | Develop by HoiThanhDucChuaTroi</span>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);