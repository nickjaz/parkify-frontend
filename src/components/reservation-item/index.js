import React from 'react';

class ReservationItem extends React.Component {
  constructor(props) {
      super(props);
  }

  let {transaction} = this.props;

  render() {
    return (
      <div className='reservation-item'>
        <span>{transaction.startTime}</span>
        <span>{transaction.endTime}</span>
        <span>{transaction.price}</span>
      </div>
    )
  }
}
