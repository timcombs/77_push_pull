import React from 'react';
import ReactDOM from 'react-dom';
import ClickableImg from './ClickableImg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClickableImg />, div);
  ReactDOM.unmountComponentAtNode(div);
});
