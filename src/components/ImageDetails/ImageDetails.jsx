import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'

import { fetchImageById } from '../../actions/images.js';

import styles from './ImageDetails.module.css';

const ImageDetails = ({ dispatch, images, match: { params: { id: rawId } } }) => {
  const id = +rawId;
  const { comments, url, description } = images.find(img => img.id === id) || {};

  useEffect(() => {
    fetchImageById(dispatch)(id);
  }, []);

  return (
    <div>
      <div className={styles.bannerImageContainer}>
        {url && <img src={url} alt="" className={styles.bannerImage} />}
      </div>
      <div className={styles.comments}>
        {description
          ? (<p>{description}</p>)
          : (<p>Loading...</p>)
        }

        <h2 className={styles.header}>Comments:</h2>
        <ul>
          {
            comments
              ? comments.map((comment) => (
                <li key={comment.id}>{comment.user}: {comment.text}</li>
              ))
              : (<li>Loading...</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default withRouter(ImageDetails);
