import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/utilities.js';
import PropTypes from 'prop-types';

import {fetchLotsRequest, createLotRequest} from '../../actions/host-lot-actions.js';
import HostLotForm from '../host-lot-form';
import HostLotItem from '../host-lot-item';

class HostContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchHostLots()
    .catch(util.logError);
  }

  render() {
    return (
      <div>
        <div className='host-dashboard'>
          <h2>Add a Lot!</h2>
          <HostLotForm
            buttonText='Add Lot'
            onComplete={(lot) => {
              return this.props.createLot(lot)
              .catch(console.error);
            }}
          />
        </div>
        
        {this.props.lots.map((lot) =>
          <HostLotItem key={lot._id} lot={lot} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lots: state.hostLots,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    fetchHostLots: () => dispatch(fetchLotsRequest()),
    createLot: (lot) => dispatch(createLotRequest(lot))
  };
};

HostContainer.propTypes = {
  lots: PropTypes.arr,
  createLot: PropTypes.func,
  fetchHostLots: PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(HostContainer);