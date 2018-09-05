
import {FAMILY_GRAPH_QL_TOKEN} from './tokens.js';

export const FGQL_URL = () => 
  `https://familygraphql.myheritage.com/?bearer_token=${FAMILY_GRAPH_QL_TOKEN}`;

export const FGQL_QUERY = `
{
    individual(id:"individual-179443761-1000003"){
      name
      gender
      personal_photo {url}
      birth_date {text}
      close_family(hops: 1) {
        data{
          individual{
            name
            gender
                  personal_photo {url}
                  birth_date {text}
          }
        }
      }
    }
  }
`;