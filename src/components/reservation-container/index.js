import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as util from '../../lib/utilities.js';

import {fetchProfileRequest} from '../../actions/profile-actions.js';
import ReservationItem from '../reservation-item';

class ReservationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    return this.props.fetchProfile();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.profile.transactions.map((transaction, index) =>
            <li key={index}>
              <ReservationItem transaction={transaction}/>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: () => dispatch(fetchProfileRequest())
});

ReservationContainer.PropTypes = {
  profile: PropTypes.object,
  transactions: PropTypes.array,
  fetchProfile: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationContainer);