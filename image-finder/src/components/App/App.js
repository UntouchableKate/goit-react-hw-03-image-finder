import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';

// Components
import SearchForm from '../SearchForm';
import Gallery from '../Gallery';
import Grid from '../Loader';

// services
import fetchCards from '../../services/PhotoCardsAPI';

// styles
import styles from './App.module.css';

class App extends Component {
  // static defaultProps = {};

  // static propTypes = {};

  state = {
    photoCards: [],
    isLoading: false,
    pageNumber: 1,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.fetchCards();
    }
    this.scrollCards();
  }

  onSearch = query => {
    this.setState({ query, photoCards: [], pageNumber: 1 });
  };

  fetchCards = () => {
    const { query, pageNumber } = this.state;

    this.setState({ isLoading: true });

    fetchCards(query, pageNumber)
      .then(photoCards => {
        this.setState(state => ({
          photoCards: [...state.photoCards, ...photoCards],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .catch(error => {
        toast.error('Oops...something wrong.', error, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  scrollCards = () => {
    window.scrollBy({
      left: 0,
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { isLoading, photoCards } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm onSearch={this.onSearch} />
        {photoCards.length > 0 && <Gallery photoCards={photoCards} />}

        {isLoading && <Grid />}

        {photoCards.length > 0 && (
          <button
            type="button"
            onClick={this.fetchCards}
            className={styles.button}
          >
            Load more
          </button>
        )}
        <ToastContainer />
      </div>
    );
  }
}
export default App;
