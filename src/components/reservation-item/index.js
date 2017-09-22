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
        <h3><i className='fa fa-circle-o'></i>{transaction.lotName}</h3>
        <p>{transaction.lotAddress}</p>
        <br></br>
        <p>Start: {transaction.startTime.toString().split(':00')[0]}</p>
        <p>End: {transaction.endTime.toString().split(':00')[0]}</p>
      </div>
    );
  }
}

ReservationItem.propTypes = {
  transaction: PropTypes.object
};


export default ReservationItem;

