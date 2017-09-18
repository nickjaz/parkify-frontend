import React from 'react';
import {connect} from 'react-redux';

import {createLotRequest} from '../../actions/host-lot-actions.js';
import


class HostContainer extends React.Component {

}

const mapStateToProps = (state) => {
  return {
    lots: state.lots
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    createLot: (lot) => dispatch(createLotRequest(lot))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HostContainer);