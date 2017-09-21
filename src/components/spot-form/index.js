import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {createSpotRequest} from '../../actions/spot-actions.js';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    console.log('**LOT_FROM_PROPS**', this.props.lot);
    // let spotAvailable = this.props.lot.spots.filter(spot => spot.reserved === false).pop();

    var now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth().toString().length === 1 ? '0' + (now.getMonth() + 1).toString() : now.getMonth() + 1;
    let date = now.getDate().toString().length === 1 ? '0' + (now.getDate()).toString() : now.getDate();
    let hours = now.getHours().toString().length === 1 ? '0' + now.getHours().toString() : now.getHours();
    let minutes = now.getMinutes().toString().length === 1 ? '0' + now.getMinutes().toString() : now.getMinutes();

    let d = year + '-' + month + '-' + date + 'T' + hours + ':' + minutes;

    this.state = {
      startTime: d,
      endTime: d
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
    let spot = {...this.state};
    spot.startTime = new Date(Date.parse(spot.startTime + ':00'));
    spot.endTime = new Date(Date.parse(spot.endTime + ':00'));
    // spot.reserved = true;
    spot.lotID = this.props.lot._id;
    console.log('**NEW_SPOT**', spot);
    this.props.createSpot(spot);
  }

  render() {
    return (
      <div>
        <form className='spot-form'
          onSubmit={this.handleSubmit}>
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
    createSpot: (spot) => dispatch(createSpotRequest(spot))
  };
};

SpotForm.propTypes = {
  spot: PropTypes.object,
  createSpot: PropTypes.func,
  lot: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotForm);
