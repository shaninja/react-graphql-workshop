# React Exercise
In this exercise you'll find a React app with Simpsons family data. The only thing the app shows is Homer's photo.

## Before You Start
1. `cd exercises/1-react/`
2. `npm install`
3. `npm start`
  <br/>We created the React apps using [create-react-app](https://github.com/facebook/create-react-app), and `npm start` should run the app. Open http://localhost:3000 to view it in the browser.

## What You Need to Do
- Use the `Photo` component as an example, and create a new `Card` component to display details about a family member: photo, name, and date of birth. [Compose](https://reactjs.org/docs/components-and-props.html#composing-components) the `Card` component using the `Photo` component.
- Using your `Card`, display all the Simpson family members.
- Allow the user to choose Homer's favorite family member by clicking on a card. You should save this family member in the [app's state](https://reactjs.org/docs/faq-state.html). Display this person's photo at the top of the page, near Homer's.
- Add size as prop to the `Photo` component to make it more reusable in different situations (alternatively, you can [pass a className](https://reactjs.org/docs/faq-styling.html) and control the size using CSS classes).
