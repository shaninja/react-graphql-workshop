import React from 'react';
import ReactDOM from 'react-dom';
import FamilyAlbum from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FamilyAlbum />, div);
  ReactDOM.unmountComponentAtNode(div);
});
