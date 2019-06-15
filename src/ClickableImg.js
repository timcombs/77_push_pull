// going to make this a clickable image using Hooks

import React from 'react';

export default function ClickableImg(imgPath, imgURL, imgDescription) {

  return (
    <>
    <img src={imgPath} className="clickable-img" alt={imgDescription} />
            <a
              className="click-img-anchor"
              href={imgURL}
              target="_blank"
              rel="noopener noreferrer"
            >img</a>
    </>

  );
}