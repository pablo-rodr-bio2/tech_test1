# Instructions
Clone this repository, then run `npm install`. After that, you can run `npm start` to run the app locally, or `npm test` to check the available tests

# Implemented solutions

## Header animation
I created a hook, `useHideHeaderOnScoll`, it returns a boolean, if the header must be shown or not. Inside the hook, a `useEffect` will check on scroll if the user is moving up or down, and then it will programmatically show or hide the header

## Header navigation
I implemented a rudimentary navigation using the already implemented `useState` in `<App />`, and in `<MainNavigation/>` I used `window.push` to add the page url and passed as a prop the `setState` to pass the new page

## Favorite logic button
I moved the data fetching to `<AllMeetupsPage/>`, so `<MeetUpItem />` only receives data. Then, in `<App />`, I added a new state, `favorites`, where the favorite pages will be saved, and its handler passed to each Card. Also, the header will have as a prop the favorites length to show the number of favorite pages.

# Exercise 1
It is implemented in `ejercicio_1.js`