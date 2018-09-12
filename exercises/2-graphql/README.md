# GraphQL Exercise
Here you'll find the same React app from the previous exercise, only this time you'll be using GraphQL to fetch the needed data.

## Before You Start
1. `cd exercises/2-graphql/`
2. `npm install`
3. `npm start`
  <br/>We created the React apps using [create-react-app](https://github.com/facebook/create-react-app), and `npm start` should run the app. Open http://localhost:3000 to view it in the browser.
4. Create a file named `tokens.js` under `/Applications/FamilyAlbum/Constants/`
5. type `export const FAMILY_GRAPH_QL_TOKEN = 'YOUR_FGQL_TOKEN';`
6. Go to http://www.familygraphql.com/fiddle 
7. Open the console
8. Type `oauthToken`
9. Copy the token and paste it instead of `YOUR_FGQL_TOKEN`.
 
## What You Need to Do
 - Using the [fiddle](http://www.familygraphql.com/fiddle) create your query, and then use it in `/src/index.js` to make your request.
