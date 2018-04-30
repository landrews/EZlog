import React, { Component } from 'react';
import Header from '../components/header/Header';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'store/actions/user'
import { Link } from 'react-router-dom'

class EzlogNy extends Component {
  render() {
    return (
      <div className="EzlogNy">
        <h1>NYSE Interface Container</h1>
        <p>Welcome {`${this.props.user.email}`}</p>
        <Link to={'/EzlogNas'}>Nasdaq</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EzlogNy)
