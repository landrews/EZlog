import Layout from '../components/Layout.js'
import React from 'react';
import { firebase } from '../firebase'

import MessagesControl from '../components/Messages.js';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: null, isLoggedIn: true };
    }

    updateMessages = (props) => {
        this.setState({ messages: props.messages, isLoggedIn: true })
    }

    getMessages = () => {
        var self = this;
        firebase.db.ref('messages').on('value', function (results) {
            let allMessages = []
            var messages = results.val()
            // iterate through results coming from database call; messages
            for (var item in messages) {
                allMessages.push({ key: item, message: messages[item].message })
            }
            self.updateMessages({ messages: allMessages });
        });
    }

    render() {
        return (
            <Layout>
                    <MessagesControl updateMessages={this.getMessages} authUser=''  {...this.state} />
            </Layout>
        )
    }
}

export default Chat;
