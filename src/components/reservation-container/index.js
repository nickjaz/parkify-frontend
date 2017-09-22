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

  render() {
    let {transactions} = this.props;

    return (
      <div>
        <h2>Your reserverations</h2>
        <ul>
          {transactions.map((transaction, index) =>
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
    transactions: state.profile.transactions
  };
};

ReservationContainer.PropTypes = {
  transactions: PropTypes.array
};

export default connect(mapStateToProps, undefined)(ReservationContainer);