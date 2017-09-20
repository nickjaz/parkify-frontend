import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as util from '../../lib/utilities.js';

import {createCarRequest, fetchCarsRequest} from '../../actions/car-actions.js';
import ProfileForm from '../profile-form';
import CarForm from '../car-form';
import CarItem from '../car-item';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCars()
    .catch(util.logError);
  }

  render() {
    return (
      <div className='settings-container'>
        <h2>Settings</h2>

        <ProfileForm />

        <h3>Add a car</h3>
        <CarForm
          buttonText='add'
          onComplete={car => {
            return this.props.createCar(car)
            .catch(console.error);
          }}
        />

        <div className='car-list'>
          <p>Your saved cars</p>
          {this.props.profile.cars.map((car,index) => <CarItem key={index} car={car} />)}
        </div>
      </div>
    );
  }
}

SettingsContainer.propTypes = {
  profile: PropTypes.object,
  createCar: PropTypes.func,
  fetchCars: PropTypes.func
};

let mapStateToProps = (state) => ({
  profile: state.profile
});

let mapDispatchToProps = (dispatch) => ({
  createCar: (car) => dispatch(createCarRequest(car)),
  fetchCars: () => dispatch(fetchCarsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
