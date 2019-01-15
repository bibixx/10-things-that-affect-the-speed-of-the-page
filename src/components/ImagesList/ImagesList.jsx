import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { fetchImages } from '../../actions/images.js';

import Logo from '../Logo/Logo';
import Media from '../Media/Media';

import styles from './ImagesList.module.css';

const ImagesList = ({ images, dispatch }) => {
  useEffect(() => {
    fetchImages(dispatch)();
  }, []);

  return (
    <Fragment>
      <header className={styles.header}>
        <Logo className={styles.logo} />
      </header>
      <div className={styles.imagesGrid}>
        {images.map(({url, video, id}) => (
          <Link to={`/image/${id}`} key={id} className={styles.imgLink}>
            <Media url={url} video={video} className={styles.img} />
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default ImagesList;
