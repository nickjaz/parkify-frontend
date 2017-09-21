import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {updateSpotRequest} from '../../action/spot-actions.js';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    let spotAvailable = this.props.lot.spots.filter(spot => spot.reserved === false).pop();

    this.state = {
      spot: spotAvailable
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let {spot} = this.state;
    spot.startTime = new Date(Date.parse(spot.startTime + ':00'));
    spot.endTime = new Date(Date.parse(spot.endTime + ':00'));
    spot.reserved = true;
    this.props.updateSpot(this.state);
  }

  render() {
    return (
      <div>
        <form className='spot-form'
          onSubmit='handleSubmit'>
          <input
            name='startTime'
            type='datetime-local'
            placeholder='Start time'
          />
          <input
            name='endTime'
            type='datetime-local'
            placeholder='End time'
          />

          <button type='submit'>Reserve</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  spot: state.spot
});


const mapDispatchToProps = (dispatch) => {
  return {
    updateSpot: (spot) => dispatch(updateSpotRequest(spot))
  };
};

SpotForm.propTypes = {
  spot: PropTypes.object,
  updateSpot: PropTypes.func,
  lot: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotForm);
