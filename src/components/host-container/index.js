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
          <div className='cool-bar'>
            <p>solving the citys parking problem</p>
          </div>

          <h2><i className='fa fa-home'></i> Lots</h2>
          <HostLotForm
            buttonText='Add Lot'
            onComplete={(lot) => {
              return this.props.createLot(lot)
              .catch(console.error);
            }}
          />
        </div>
        <ul>
          {this.props.lots.map((lot, index) =>
            <li key={index}>
              <HostLotItem lot={lot} />
            </li>
          )}
        </ul>
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
  lots: PropTypes.array,
  createLot: PropTypes.func,
  fetchHostLots: PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(HostContainer);
