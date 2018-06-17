import React from 'react'
import ReactDOM from 'react-dom'
import AuthUserContext from './Auth/AuthUserContext'
import { firebase } from '../firebase'

class ProfileControl extends React.Component {
    constructor(props) {
        super(props);
        this.saveProfileClick = this.saveProfileClick.bind(this);
        this.state = { currentProfile: null }
    }

    componentDidMount() {
        this.getProfile()
    }

    updateInputValue = (item) => {
        this.setState({ currentProfile: {FirstName: item.value} })
    }

    getProfile = () => {
        var self = this;
        var ref = firebase.db.ref('profiles').child(this.props.uid)
        ref.on('value', function (results) {
            var profile = results.val()
            self.setState({ currentProfile: profile })
        });
    }

    renderProfile = (profile) => {
        if (profile) {
            return (
                <div>
                    <input name="FirstName" key={profile.FirstName} onChange={evt => this.updateInputValue(evt.target)} value={profile.FirstName} />
                    <input name="LastName" key={profile.LastName} value={profile.LastName} />
                    <input name="Email" key={profile.Email} value={profile.Email} />
                </div>
            )
        }
    }

    saveProfileClick(uid) {
        var myProfile = firebase.db.ref('profiles')
        var newProfile = { DisplayName: 'John Mann' }
        myProfile.child(uid).update(newProfile)
    }

    render() {
        var self = this;
        return (
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser != null ?
                        <span>
                            {this.state.currentProfile != null ?
                                <div>
                                    {this.renderProfile(this.state.currentProfile)}
                                </div> :
                                <div>here</div>
                            }
                            <SaveProfileButton onClick={evt => this.saveProfileClick(authUser.uid)} />
                        </span> : <div>Please Login</div>
                }
            </AuthUserContext.Consumer>
        );
    }
}

export default ProfileControl

function SaveProfileButton(props) {
    return (
        <button onClick={props.onClick}>
            Save Settings
      </button>
    )
}
