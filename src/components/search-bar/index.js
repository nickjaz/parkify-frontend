import './_search-bar.scss';
import React from 'react';
import {connect} from 'react-redux';
import {searchRequest} from '../../actions/search-actions.js';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;

    if (name === 'search') {
      this.setState({ query: value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.query);
  }

  render() {
    return (
      <form className='search-bar' onSubmit={this.handleSubmit}>
        <input
          name='search'
          type='text'
          placeholder='Address'
          onChange={this.handleChange} />
        <button type='submit'>Search</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func
};

let mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(searchRequest(query))
});

export default connect(null, mapDispatchToProps)(SearchBar);
