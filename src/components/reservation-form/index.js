import './_reservation-form.scss';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import superagent from 'superagent';

import {createReservationRequest} from '../../actions/reservation-actions.js';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    var now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    now = now.toISOString().slice(0, 16);
    
    this.state = {
      startTime: now,
      endTime: now,
      price: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;

    if (!value) {
      this.setState({ [name]: value });
      return;
    }

    let startTimeString = name ==='startTime' ? value + ':00': this.state.startTime + ':00';
    let endTimeString = name ==='endTime' ? value + ':00' : this.state.endTime + ':00';

    let startTime = new Date(Date.parse(startTimeString));
    let endTime = new Date(Date.parse(endTimeString));

    if (!isNaN(startTime.getTime()) && !isNaN(endTime.getTime())) {
      startTime =  startTime.toISOString();
      endTime =  endTime.toISOString();
      
      return superagent.get(`${__API_URL__}/price`)
      .set('Authorization', `Bearer ${this.props.auth}`)
      .query({ startTime })
      .query({ endTime })
      .then(response => {
        this.setState({ 
          [name]: value,
          price: response.body.price
        });
      });
    }
    else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let reservation = {...this.state};
    let {lot} = this.props;
    reservation.startTime = new Date(Date.parse(reservation.startTime + ':00'));
    reservation.endTime = new Date(Date.parse(reservation.endTime + ':00'));
    reservation.lotID = lot._id;
    reservation.hostID = lot.userID;
    reservation.lotName = lot.name;
    reservation.lotAddress = lot.address;
    this.props.createReservation(reservation)
    .then(() => this.props.stopReserving());
  }

  render() {
    return (
      <div>
        <form className='reservation-form'
          onSubmit={this.handleSubmit}>
          <input
            name='startTime'
            type='datetime-local'
            value={this.state.startTime}
            onChange={this.handleChange}
            placeholder='Start time'

          />
          <input
            name='endTime'
            type='datetime-local'
            value={this.state.endTime}
            onChange={this.handleChange}
            placeholder='End time'
          />
          <div className='reservation-bar'>
            <p className='price'>${this.state.price}</p>
            <button type='submit'>Reserve</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  spot: state.spot
});


const mapDispatchToProps = (dispatch) => {
  return {
    createReservation: (reservation) => dispatch(createReservationRequest(reservation))
  };
};

ReservationForm.propTypes = {
  reservation: PropTypes.object,
  createReservation: PropTypes.func,
  lot: PropTypes.object,
  stopReserving: PropTypes.func,
  auth: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
