import Layout from '../components/Layout'
import React from 'react';
import { firebase } from '../firebase';
import NYSECalculator from '../components/NYSE/NYSECalculator';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { profiles: null }
    }

    componentDidMount() {
        this.getProfiles()
    }

    renderProfiles = (profiles) => {
        var self = this
        if (profiles) {
            var displayMessage = profiles.map(function (item) {
                return <div key={item.key}>{item.profile.displayName}</div>
            })
            return displayMessage
        }
    }

    getProfiles = () => {
        var self = this;
        var ref = firebase.db.ref('profiles').orderByChild('displayName').equalTo('Test Key')
        ref.on('value', function (results) {
            let allProfiles = []
            var profiles = results.val()
            // iterate through results coming from database call; messages
            for (var item in profiles) {
                allProfiles.push({ key: item, profile: profiles[item] })
            }
            self.setState({ profiles: allProfiles })
        });
    }

    render() {
        return (
            <Layout>
                <NYSECalculator/>
                {this.state.profiles && (
                    <div>
                        {this.renderProfiles(this.state.profiles)}
                    </div>
                )}
            </Layout>
        )
    }
}

export default Index