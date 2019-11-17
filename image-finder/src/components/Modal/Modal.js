import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

// styles
import styles from '../PhotoCard/PhotoCard.module.css';
import css from './Modal.module.css';

Modal.setAppElement('#modal');

class MyModal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
  };

  constructor() {
    super();

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  state = {
    showModal: false,
  };

  handleOpenModal() {
    this.setState({
      showModal: true,
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const { largeImageURL } = this.props;
    return (
      <div>
        <button
          onClick={this.handleOpenModal}
          type="button"
          className={styles.fullscreenButton}
        >
          <i className={styles.fullscreenButtonI}> zoom_out_map </i>
        </button>

        <Modal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className={css.Modal}
          overlayClassName={css.Overlay}
        >
          <img src={largeImageURL} alt="img" />
          <button onClick={this.handleCloseModal} type="button">
            <i className={styles.fullscreenButtonI}> close </i>
          </button>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
