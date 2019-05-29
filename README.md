# Raiden Channels

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is a proof of concept of a dApp that connects to a token network and listens to the events in the smart contract to display the channels and events.

It in build on `ReactJS` with `web3` without Redux ([You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)), this dApp doesn't require to share state of components

It should look like this when running:
![scheenshot](https://lh3.googleusercontent.com/-llGgd3Fv7Mk/XO6bEtngsKI/AAAAAAAASWE/e896w_fqIzMe-QEnGBzDRmyA4nnVdqaGwCK8BGAs/s0/2019-05-29.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
Test are using [react-test-renderer](https://www.npmjs.com/package/react-test-renderer) to create snapshots of the components: `src/test/components/__snapshots__`

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

It uses [StandandJS](https://standardjs.com/)