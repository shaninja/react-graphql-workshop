import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FamilyAlbum from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FamilyAlbum />, document.getElementById('root'));
registerServiceWorker();
