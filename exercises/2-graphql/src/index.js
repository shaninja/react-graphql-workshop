import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FamilyAlbum from './Applications/FamilyAlbum/FamilyAlbum.js';
import registerServiceWorker from './registerServiceWorker';
import {FGQL_URL} from './Applications/FamilyAlbum/Constants/index.js';

/**
 * Making the FGQL call and returning the response
 * @param {string} query 
 */
const getFamilyData = (query) => {
    return fetch(FGQL_URL(), {
        method: "POST",
        headers: {
            "Accept": "application/json",
        },
        /**
         * TODO
         * Finish the request
         */
    })
    .then(response => response.json());
}

getFamilyData(/* TODO Pass you query as an argument to getFamilyData */)
  .then(data => {
    if ("errors" in data) {
        ReactDOM.render(<FamilyAlbum />, document.getElementById('root'));
    } else {
        ReactDOM.render(<FamilyAlbum familyInformation={data}/>, document.getElementById('root'));
    }
  })
  .catch(error => {
      console.error(error);
      console.error('Rendering the app with default mock information');
      ReactDOM.render(<FamilyAlbum />, document.getElementById('root'));
    })
    .finally(() => {
        registerServiceWorker();
    }
);
