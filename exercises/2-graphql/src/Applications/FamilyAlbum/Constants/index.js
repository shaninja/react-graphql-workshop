/**
 * TODO
 * 1. Create a file named tokens.js in this directory.
 * 2. type:
 *    export const FAMILY_GRAPH_QL_TOKEN = 'YOUR_FGQL_TOKEN';
 * 3. Go to http://www.familygraphql.com/fiddle 
 * 4. Open the console
 * 5. Type 'oauthToken'
 * 6. Copy the token and paste it instead of YOUR_FGQL_TOKEN.
 * The token is valid for 12 hours.
 * DO NOT keep tokens.js in source control.
 * 
 * IRL you would get the token from the server.
 */
import {FAMILY_GRAPH_QL_TOKEN} from './tokens.js';

export const FGQL_URL = () => 
  `https://familygraphql.myheritage.com/?bearer_token=${FAMILY_GRAPH_QL_TOKEN}`;