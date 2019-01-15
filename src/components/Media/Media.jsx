import React from 'react';

const Media = ({url, video, className}) => (
    url
    ? (
      <img
        src={url}
        className={className}
        alt=""
      />
    )
    : (
      <video className={className} autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>
    )
);

export default Media;
