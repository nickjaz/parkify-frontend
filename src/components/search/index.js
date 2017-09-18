import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '../search-bar';
import SearchResult from '../search-result';

class Search extends React.Component {
  render() {
    return (
      <div className='search'>
        <SearchBar />
        <div className='search-results'>
          {this.props.nearbyLots ? this.props.nearbyLots.map(lot => <SearchResult key={lot._id} lot={lot} />) : undefined}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  nearbyLots: PropTypes.array
};

const mapStateToProps = (state) => ({
  nearbyLots: state.nearbyLots
});

export default connect(mapStateToProps, null)(Search);