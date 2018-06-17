import Layout from '../components/Layout'
import React from 'react'
import { firebase } from '../firebase'
import AuthUserContext from '../components/Auth/AuthUserContext'
import ProfileControl from '../components/Profile'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { profiles: null }
    }

    render() {
        return (
            <Layout>
                <p>This is the about page!</p>
                <AuthUserContext.Consumer>
                    {authUser =>
                        authUser != null ?
                        <ProfileControl uid={authUser.uid} /> :
                        <div>-</div>
                    }
                </AuthUserContext.Consumer>
            </Layout>
        )
    }
}

export default About