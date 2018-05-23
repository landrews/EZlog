import React from 'react';
import '../config/keys.js';

// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/database';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { database: firebase.database(), messages: null, newMessage: '' }
    }

    componentDidMount() {
        this.props.updateMessages()
    }

    updateInputValue = (newValue) => {
        this.setState({ newMessage: newValue })
    }

    sendMessage = () => {
        var myCollection = this.state.database.ref('messages')
        var message = this.state.newMessage
        myCollection.push({ message: message })
        this.updateInputValue('')
        this.props.updateMessages()
    }

    deleteMessage = (id) => {
        // find message whose objectId is equal to the id we're searching with
        var idToDelete = id.target.dataset.id
        var messageReference = this.state.database.ref('/messages/' + idToDelete)
        messageReference.remove()
    }

    renderMessages = (messages) => {
        var self = this
        if (this.props.isLoggedIn) {
            var displayMessage = messages.map(function (item) {
                return <tr key={item.key}><td>{item.message}</td><td className='delete' data-id={item.key} onClick={evt => self.deleteMessage(evt)}>Delete</td></tr>
            })
            return displayMessage
        }
    }

    render() {
        return (
            <div className="container">
                <section className="formSection hidden">
                    <input type="text" id="message" onChange={evt => this.updateInputValue(evt.target.value)} value={this.state.newMessage} />
                    <button id="sendMessage" onClick={this.sendMessage}>Post Message</button>
                    {this.props.messages && (
                        <section className="messages">
                            <table>
                                <tbody>
                                {this.renderMessages(this.props.messages)}
                                </tbody>
                            </table>
                        </section>
                    )}
                </section>
            </div>
        )
    }
}

export default Messages