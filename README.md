# Instructions
1. Clone this repository, then run `npm install`. 
2. In a terminal, run `json-server --watch db.json --port 3001`
3. In another terminal, you can run `npm start` to run the app locally, or `npm test` to check the available tests

# Implemented solutions

## Header animation
I created a hook, `useHideHeaderOnScoll`, it returns a boolean, if the header must be shown or not. Inside the hook, a `useEffect` will check on scroll if the user is moving up or down, and then it will programmatically show or hide the header

## Header navigation
I implemented a rudimentary navigation using the already implemented `useState` in `<App />`, and in `<MainNavigation/>` I used `window.push` to add the page url and passed as a prop the `setState` to pass the new page

## Favorite logic button and adding a new Meetup
I installed `json-server` to mock a server for getting data request and installed `TankstackQuery` v4 for querying and mutating data

# Exercise 1
It is implemented in `ejercicio_1.js`