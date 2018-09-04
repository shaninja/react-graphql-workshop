import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FamilyAlbum from './Applications/FamilyAlbum/FamilyAlbum.js';
import registerServiceWorker from './registerServiceWorker';
import {FAMILY_GRAPH_QL_TOKEN} from './Applications/FamilyAlbum/Constants/tokens.js';
import {FGQL_URL, FGQL_QUERY} from './Applications/FamilyAlbum/Constants/index.js';

/**
 * Making the FGQL call and returning the response
 * @param {string} query 
 */
const getFamilyData = async (query) => {
    const response = await fetch(FGQL_URL + FAMILY_GRAPH_QL_TOKEN, {
        method: "POST",
        headers: {
            "Accept": "application/json",
        },
        // TODO remove this line and add an explanation what to do, remove async await
        body: JSON.stringify({query: query}),
    });
    return await response.json();
}

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
