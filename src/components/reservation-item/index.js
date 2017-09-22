import React from 'react';
import PropTypes from 'prop-types';

class ReservationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {transaction} = this.props;

    return (
      <div className='reservation-item'>
        <span>{transaction.startTime}</span>
        <span>{transaction.endTime}</span>
        <span>{transaction.price}</span>
      </div>
    );
  }
}

ReservationItem.propTypes = {
  transaction: PropTypes.object
};


