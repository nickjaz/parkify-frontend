import './_reservation-container.scss';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as util from '../../lib/utilities.js';

import ReservationItem from '../reservation-item';

class ReservationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {transactions} = this.props;

    return (
      <div className='reservation-container'>
        <h2>
          <i className='fa fa-calendar'></i> Reserverations
        </h2>
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