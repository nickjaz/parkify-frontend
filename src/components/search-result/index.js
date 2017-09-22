import './_search-result.scss';
import React from 'react';
import PropTypes from 'prop-types';
import * as util from '../../lib/utilities.js';
import ReservationForm from '../reservation-form';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reserving: false
    };
  }

  render() {
    let {lot} = this.props;

    return (

      <div className='search-result'>
        <button className='search-result-main' onClick={() => this.setState({ reserving: !this.state.reserving })}>
          <div className='search-result-content'>
            <h3 className='lot-name'>{lot.name}</h3>
            <p className='lot-address'>{lot.address}</p>
            {/* <p className='lot-description'>{lot.description}</p> */}
          </div>
          <p>{this.state.reserving ? '▲' : '▼'}</p>
        </button>
        {util.renderIf(this.state.reserving,
          <ReservationForm lot={lot} stopReserving={() => {
            this.setState({ reserving: false});
          }} />
        )}
      </div>
    );
  }
}

SearchResult.propTypes = {
  lot: PropTypes.object
};

export default SearchResult;
