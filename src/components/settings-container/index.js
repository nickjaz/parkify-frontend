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
        <div className='cool-bar'>
          <p>solving the city&#39;s parking problem</p>
        </div>
        <h2><i className='fa fa-cog'></i> Settings</h2>

        <h3><i className='fa fa-id-card-o'></i> Update your profile</h3>
        <ProfileForm />

        <h3><i className='fa fa-car'></i> Add a car</h3>
        <CarForm
          buttonText='Add'
          onComplete={car => {
            return this.props.createCar(car)
            .catch(console.error);
          }}
        />

        <div className='car-list'>
          <h3>Your saved cars</h3>
          <ul>
            {this.props.profile.cars.map((car, index) =>
              <li key={index}>
                <CarItem car={car} />
              </li>
            )}
          </ul>
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
