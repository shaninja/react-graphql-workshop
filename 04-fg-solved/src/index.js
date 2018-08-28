import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FamilyAlbum from './Applications/FamilyAlbum/index.js';
import registerServiceWorker from './registerServiceWorker';
import {FAMILY_GRAPH_QL_TOKEN} from './Applications/FamilyAlbum/Constants/tokens.js';

const getFamilyData = (query) => {
    const familyGraphQlUrl = 'https://familygraphql.myheritage.com/?bearer_token=';
    return fetch(familyGraphQlUrl + FAMILY_GRAPH_QL_TOKEN, {
        method: "POST",
        // mode: "cors", // no-cors, cors, *same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Accept": "application/json",
        },
        // redirect: "follow", // manual, *follow, error
        // referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({query: query}), // body data type must match "Content-Type" header
    })
    .then(response => response.json());
};

let query = '{user(id:"user-10"){name}}';

getFamilyData(query)
  .then(data => console.log(JSON.stringify(data)))
  .catch(error => console.error(error));

ReactDOM.render(<FamilyAlbum />, document.getElementById('root'));
registerServiceWorker();
