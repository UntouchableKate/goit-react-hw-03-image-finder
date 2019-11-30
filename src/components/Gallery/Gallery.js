import React from 'react';
import PropTypes from 'prop-types';

// Components
import PhotoCard from '../PhotoCard';

// styles
import styles from './Gallery.module.css';

const Gallery = ({ photoCards }) => (
  <>
    <ul className={styles.gallery}>
      {photoCards.map(photoCard => (
        <PhotoCard key={photoCard.id} photoCard={photoCard} />
      ))}
    </ul>
  </>
);

Gallery.propTypes = {
  photoCards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Gallery;
