import React from 'react';

export default function ClickableImg(url, path, alt) {

  return (
    <>
      <a
        className="click-img-anchor"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        <img className="clickable-img" src={path} alt={alt}></img>
      </a>
    </>

  );
}
