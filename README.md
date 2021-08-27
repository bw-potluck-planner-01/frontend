# POTLUCK PLANNER DETAILS

Deployed at `https://potluck-planner-plus.netlify.app/`

## Endpoints

Base url: `https://potluckplannerplus.herokuapp.com`

A complete list can be found in the readme at `https://github.com/bw-potluck-planner-01/potluckplannerplus`

### Authentication

Signup: [POST] `/auth/register` returns the created user

Login: [POST] `/auth/login` returns the user id and token

Logout *Restricted* : [GET] `/auth/logout` 

### Potlucks

New potluck *Restricted* : [POST] `/org/:id` requires valid organizer id in params, unique potluck name, and valid date/time/location as such - { "potluck_name": "Thanksgiving", "date": "Nov 25, 2021", "time": "18:00", "location": "My House" } returns newly created potluck as such - { "organizer_id": 1, "potluck_name": "Thanksgiving", "date": "2021-11-25T08:00:00.000Z", "time": "18:00:00", "location": "My House" }

View potlucks: [GET] `/potlucks` returns an array of all potlucks currently in database

View individual potluck: [GET] `/potlucks/:id` requires a valid potluck_id in params returns a potluck by given id

## Axios with Auth

At present, the login page stores the user id and newly created token to both global state and local storage, and logout deletes them both. The axiosWithAuth function in the utils folder can be used to send any restricted axios calls.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
