import React from 'react';
import PropTypes from 'prop-types';
import * as util from '../../lib/utilities.js';
import SpotForm from '../spot-form'

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
        <h3 className='lot-name'>{lot.name}</h3>
        <p className='lot-address'>{lot.address}</p>
        <p className='lot-description'>{lot.description}</p>
        <button onClick={() => this.setState({ reserving: true })}>Reserve</button>

        {util.renderIf(this.state.reserving,
          <SpotForm lot={lot} />
        )}
      </div>
    );
  }
}

SearchResult.propTypes = {
  lot: PropTypes.object
};

export default SearchResult;
