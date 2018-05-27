import React from 'react';
import '../config/keys.js';
import AuthUserContext from './AuthUserContext';

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
        if (this.props.authUser != null) {
            var displayMessage = messages.map(function (item) {
                return <li key={item.key}><p>{item.message}</p><button className='delete' data-id={item.key} onClick={evt => self.deleteMessage(evt)}>Delete</button></li>
            })
            return displayMessage
        }
    }

    render() {
        return (
            <AuthUserContext.Consumer>
                {authUser =>
                    <div className='container content'>
                        {authUser != null ?
                            <section className="formSection hidden">
                                <div className='actionsWrapper'>
                                    <div className='actions'>
                                        <input type="text" id="message" onChange={evt => this.updateInputValue(evt.target.value)} value={this.state.newMessage} />
                                        <button id="sendMessage" onClick={this.sendMessage}>Post Message</button>
                                    </div>
                                </div>
                                {this.props.messages && (
                                    <section className="messages">
                                        <ul className='chatList'>
                                            {this.renderMessages(this.props.messages)}
                                        </ul>
                                    </section>
                                )}
                            </section>

                            : ''}
                    </div>
                }
            </AuthUserContext.Consumer>
        )
    }
}

export default Messages