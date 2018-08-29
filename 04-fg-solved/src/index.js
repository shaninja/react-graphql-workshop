import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FamilyAlbum from './Applications/FamilyAlbum/index.js';
import registerServiceWorker from './registerServiceWorker';
import {FAMILY_GRAPH_QL_TOKEN} from './Applications/FamilyAlbum/Constants/tokens.js';
import {FGQL_URL, FGQL_QUERY} from './Applications/FamilyAlbum/Constants/index.js';

const getFamilyData = (query) => {
    return fetch(FGQL_URL + FAMILY_GRAPH_QL_TOKEN, {
        method: "POST",
        headers: {
            "Accept": "application/json",
        },
        body: JSON.stringify({query: query}),
    })
    .then(response => response.json());
};

getFamilyData(FGQL_QUERY)
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


