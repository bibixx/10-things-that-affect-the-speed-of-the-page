import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'

import { fetchImageById } from '../../actions/images.js';

import Media from '../Media/Media';
import Logo from '../Logo/Logo';

import styles from './ImageDetails.module.css';

const ImageDetails = ({ dispatch, images, match: { params: { id: rawId } } }) => {
  const id = +rawId;
  const { comments, url, description, video } = images.find(img => img.id === id) || {};

  useEffect(() => {
    fetchImageById(dispatch)(id);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className={styles.bannerImageContainer}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink} />
          <Logo />
        </nav>
        {(url || video) && <Media url={url} video={video} className={styles.bannerImage} />}
      </div>
      <div className={styles.description}>
        <h2 className={styles.header}>Description</h2>
        {description
          ? (<p>{description}</p>)
          : (<p>Loading...</p>)
        }

        <h2 className={styles.header}>Comments</h2>
        <ul className={styles.comments}>
          {
            comments
              ? comments.map((comment) => (
                <li key={comment.id} className={styles.comment}>
                  <p><strong>{comment.user}</strong></p>
                  <p>{comment.text}</p>
                </li>
              ))
              : (<li>Loading...</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default withRouter(ImageDetails);
