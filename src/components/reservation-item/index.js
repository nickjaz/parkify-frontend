import './_reservation-item.scss';
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
        <h3><i className='fa fa-map-pin'></i>    {transaction.lotName}</h3>
        <p>{transaction.lotAddress}</p>
        <br></br>
        <p className='reservation-label'>From:</p>
        <p className='reservation-time'>{transaction.startTime.toString().split(':00')[0]}</p>
        <p className='reservation-label'>To:</p>
        <p className='reservation-time'>{transaction.endTime.toString().split(':00')[0]}</p>
      </div>
    );
  }
}

ReservationItem.propTypes = {
  transaction: PropTypes.object
};


export default ReservationItem;

