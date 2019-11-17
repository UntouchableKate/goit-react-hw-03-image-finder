import React from 'react';
import PropTypes from 'prop-types';
import MyModal from '../Modal';

// styles
import styles from './PhotoCard.module.css';

const PhotoCard = ({ photoCard }) => (
  <li className={styles.photoCard} key={photoCard.id}>
    <div className={styles.galleryItem}>
      <img
        src={photoCard.webformatURL}
        alt="abc"
        className={styles.photoCardImg}
      />
      <div className={styles.stats}>
        <p className={styles.statsItem}>
          <i className={styles.materialIcons}>thumb_up</i>
          {photoCard.likes}
        </p>
        <p className={styles.statsItem}>
          <i className={styles.materialIcons}>visibility</i>
          {photoCard.views}
        </p>
        <p className={styles.statsItem}>
          <i className={styles.materialIcons}>comment</i>
          {photoCard.comments}
        </p>
        <p className={styles.statsItem}>
          <i className={styles.materialIcons}>cloud_download</i>
          {photoCard.downloads}
        </p>
      </div>
      <MyModal
        largeImageURL={photoCard.largeImageURL}
        photoCard={photoCard}
        id={photoCard.id}
      />
    </div>
  </li>
);

PhotoCard.propTypes = {
  photoCard: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PhotoCard;
