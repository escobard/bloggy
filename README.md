# EngBook - react && react-redux && express && mongodb 

This repository contains all the files for an application built to showcase material learned from the combination of the following full stack javascript courses on Udemy:

- [Node with React: Fullstack Web Development] (https://www.udemy.com/node-with-react-fullstack-web-development)
- [The Complete Developers Guide to MongoDB] (https://www.udemy.com/the-complete-developers-guide-to-mongodb)
- [Server Side Rendering with React and Redux] (https://www.udemy.com/server-side-rendering-with-react-and-redux)

## Project Criteria

The main purpose of this application is to provide the following features:
	
	- A blog social network, including:
		+ User to user profiles and a basic chat system.
		+ User dashboard, with metrics.
			* Admin / premium content dashboard features.
			* Currency system, and payment gateway
		+ User email system to invite users to join the blog (fremium - first 5 free)

This application will be built to showcase the following technologies and practices:
	
	- Consistent data retention with MongoDB / Mongoose
	- REST API to manage HTTP requests with Express / Node
	- Render the client interface with React / Redux
	- Testing of server, data, and client applications with Mocha / Enzyme / Jest
	- Manage user Authentication with oAuth / Passport 
	- Handle payments with Stripe
	- Offline caching with Service Workers / IndexDB / LocalStorage
	- Progressive web application using responsive practices
	- Material design with the Bootstrap / MaterialUI

Possible future technologies include:

	- GraphQL / Apollo for better offline - first utilization
	- Server Side Rendering for optimized performance
	- React Native application for native devices

(Expand upon criteria in a later version)

## Demo

(to be expanded in a future version with the structure below)

![desktop image](https://onlinedevelopers.ca/udacity/weather-app/src/img/read-me/proj5-collage.jpg)

[To view the application live click here] (http://onlinedevelopers.ca/udacity/weather-app/)

To download and install, please follow the instructions below.

## Installation

(expand on yarn installation, and node.js installation instructions, as well as expo instructions before repository instructions in the future)

Clone the repository from: 
```
$ git clone https://github.com/escobard/engbook.git
```

Install NPM dependencies:
```
$ npm install (or yarn install)
```

(expand on server installation, etc)

## API Keys

( to split documentation into a wiki later, adding API key docs)
For the google oauth API, create your API key from the API console here: https://console.developers.google
```
	- search for the google+ 
	- create oauth credentials
	- add cookie restrictions to the API key
	- place within constants/index.js
```

## Usage

### Server Side

All these commands are assuming you are within the server directory. To access the server directory from the parent directory use the following command:

```
$ cd server
```

#### Development

To initiate normal server runtime:

```
$ node server
```

To initiate nodemon for continous server development:

```
$ npm run dev
```

#### Testing

To test the server components, type the following command :

```
$ npm test
```

(expand on production installation, etc)

To run this application on production:

- Download the Heroku CLI: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

- Proper production instructions coming later

## Most Recent Update - v0.05

## v0.15
	TODO:
		- Add MongoDB schemas for users.
		- Add cookie authentication and authentication handlers.
		- Begin considering how to implement manual user creation.
		FOR NEXT VERSION:
			- Refactor, tests, and NPM package command cleanup to run from parent directory.

## v0.1
	COMPLETED:
		- Add Google OAuth API.
		- Begin considering how to implement manual user creation.

## v0.05
	COMPLETED:
		- Add Express basic server
		- Hook up base application to Heroku for production
		- Create base tests for Express

## To Do's - v0.15
	TODO:
		- Add MongoDB schemas for users.
		- Add cookie authentication and authentication handlers.
		- Begin considering how to implement manual user creation.
		FOR NEXT VERSION:
			- Refactor, tests, and NPM package command cleanup to run from parent directory.


## Known Bugs

(expand on bugs)

## Libraries, Frameworks, APIs

[React](https://facebook.github.io/react/)

[Redux] (http://redux.js.org/docs/introduction/)

[Node] (https://nodejs.org/en/)

[Express] (https://expressjs.com/)

[MongoDB] (https://www.mongodb.com/)

(add other maj libraries here)


## Contribution

All files in this repository are protected under the MIT license, but feel free to contribute, fork, star, or share this application as you see fit.

For commercial or educational use, please paste a link to this repository to give proper credit.

## License

As of January 29th, 2018, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/mit/).