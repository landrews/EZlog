import React from 'react'
import ReactDOM from 'react-dom'

// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            provider: new firebase.auth.GoogleAuthProvider(),
            auth: firebase.auth() };
    }

    handleLoginClick() {
        var self = this;
        this.state.auth.signInWithPopup(this.state.provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //var token = result.credential.accessToken;

            // The signed-in user info.
            var user = result.user;
            // The signed-in user info.
            self.props.handleLogin({ user: user, isLoggedIn: true });
        }).catch(function (error) {
            console.log(error);
        })
    }

    handleLogoutClick() {
        var self = this;
        this.state.auth.signOut().then(function () {
            console.log('logged out')
            self.props.handleLogin({ isLoggedIn: false, currentUser: null });
        }, function (error) {
            // An error happened.
        });
    }

    render() {
        const button = this.props.isLoggedIn ? (
            <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
                <LoginButton onClick={this.handleLoginClick} />
            );

        return (
            <div>
                <Greeting {...this.props} />
                {button}
            </div>
        );
    }
}

export default LoginControl

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
      </button>
    )
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
      </button>
    )
}

function UserGreeting(props){
    return <h1>Welcome {props.username}</h1>;
}

function GuestGreeting(props){
    return <h1>Please login.</h1>;
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting username={props.user.displayName} />;
    }
    return <GuestGreeting />;
}
