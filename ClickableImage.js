// going to make this a clickable image using Hooks

import React, { useState } from 'react';

export default function ClickableImage(imgPath) {
  const [imgURL, setImgURL] = useState(imgPath);

  return (
    <>
    <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >img</a>
     </>

  );
}