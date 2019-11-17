import React, { Component } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          className={styles.searchFormInput}
          value={query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchForm;
