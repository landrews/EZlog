import Layout from '../components/Layout.js'
import React from 'react';
import '../config/keys.js';

// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import LoginControl from '../components/Login.js';
import MessagesControl from '../components/Messages.js';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: null, isLoggedIn: false, authChecked: false, messages: null };
    }
    componentDidMount() {
        var self = this;
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                self.handleLogin({ isLoggedIn: true, user: user })
            }
            self.setState({ authChecked: true }, () => { })
        })
    }

    handleLogin = (props) => {
        this.setState({ isLoggedIn: props.isLoggedIn, user: props.user })
        this.getMessages()
    }

    updateMessages = (props) => {
        this.setState({ messages: props.messages })
    }

    getMessages = () => {
        var self = this;
        firebase.database().ref('messages').on('value', function (results) {
            let allMessages = []
            var messages = results.val()
            // iterate through results coming from database call; messages
            for (var item in messages) {
                allMessages.push({ key: item, message: messages[item].message })
            }
            self.updateMessages({messages: allMessages});
        });
    }

    render() {
        if (!this.state.authChecked) {
            return null;
        }
        return (
            <Layout>
                <div className="container">
                    <LoginControl handleLogin={this.handleLogin} {...this.state} />
                    <MessagesControl updateMessages={this.getMessages} {...this.state} />
                </div>
            </Layout>
        )
    }
}

export default Chat;
