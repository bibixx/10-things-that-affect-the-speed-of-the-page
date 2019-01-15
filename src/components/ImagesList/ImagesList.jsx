import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchImages } from '../../actions/images.js';

import styles from './ImagesList.module.css';

const ImagesList = ({ images, dispatch }) => {
  useEffect(() => {
    fetchImages(dispatch)();
  }, []);

  return (
    <div className={styles.imagesGrid}>
      {images.map(({url, id}) => (
        <Link to={`/image/${id}`} key={id} className={styles.imgLink}>
          <img
            src={url}
            className={styles.img}
            alt=""
          />
        </Link>
      ))}
    </div>
  );
};

export default ImagesList;
