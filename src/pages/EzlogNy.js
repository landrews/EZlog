import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../store/actions/user'
import EzlogNav from '../components/nav/EzlogNav';


class EzlogNy extends Component {
  render() {
    return (
      <div className="EzlogNy">
          <EzlogNav></EzlogNav>
          <p class='text-center'>Welcome {`${this.props.user.email}`}</p>
          <h1 class="text-center"> NYSE </h1>
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
