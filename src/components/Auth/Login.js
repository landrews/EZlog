import React from 'react'
import ReactDOM from 'react-dom'
import AuthUserContext from './AuthUserContext'

// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase';

// These imports load individual services into the firebase namespace.
import { auth, provider } from '../../firebase';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        var self = this;
        auth.signInWithGoogle(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //var token = result.credential.accessToken;

            // The signed-in user info.
            var user = result.user;

        }).catch(function (error) {
            console.log(error);
        })
    }

    handleLogoutClick() {
        var self = this;
        auth.signOut().then(function () {
            console.log('logged out')
        }, function (error) {
            // An error happened.
        });
    }

    render() {
        var self = this;
        return (
            <AuthUserContext.Consumer>
                {authUser =>
                    <span className='loginButtonsWrapper'>
                        {authUser != null ?
                            <span className='loginButtons'>
                                <div className='profileImgWrapper'>
                                    <img className='profileImg' src={authUser.photoURL} />
                                </div>

                                <LogoutButton onClick={self.handleLogoutClick} />
                            </span> : 
                            <LoginButton onClick={self.handleLoginClick} />}
                    </span>
                }
            </AuthUserContext.Consumer>
        );
    }
}

export default LoginControl

function LoginButton(props) {
    return <button className="loginSolo" onClick={props.onClick}>
        Login
      </button>;
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
      </button>
    )
}
