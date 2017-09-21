import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchSpotsRequest} from '../../action/spot-actions.js';
import * as util from '../../lib/utilities.js';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
  }

      reserved: bool,
      startTime: number,
      hours: number,
      date: date
    }
  }

  render() {

    return (
      Spots available:

      {util.renderIf(spotsAvailable > 0,
        <form className='spot-form'
          onSubmit='handleSubmit'>
          <input
            name='startTime'
            type='datetime-local'
            placeholder='starting time'
          />
          <input
            name='hours'
            type='number'
            placeholder='hours'
          />

          <button type='submit'>Reserve</button>
          </form>
      )}
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spots: state.spots
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    fetchSpots: (spot) => dispatch(fetchSpotsRequest()),
    updateSpot: (spot) => dispatch(updateSpotRequest())
  };
};

SpotForm.propTypes = {
  spots: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotForm);
