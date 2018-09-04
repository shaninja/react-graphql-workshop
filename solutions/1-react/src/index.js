import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FamilyAlbum from './Applications/FamilyAlbum/FamilyAlbum.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FamilyAlbum />, document.getElementById('root'));
registerServiceWorker();
