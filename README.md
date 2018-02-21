# EngBook - react && react-redux && express && mongodb

This repository contains all the files for an application built to showcase an application intended to showcase my expertise with the following technologies:

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

## Project Criteria

The main purpose of this application is to provide the following features: - A blog social network, including: + User to user profiles and a basic chat system. + User dashboard, with metrics.
_ Admin / premium content dashboard features.
= leaderboards and activity trackers for: - github activity - linkedin - crypto currencies - stocks
_ Currency system, and payment gateway + User email system to invite users to join the blog (fremium - first 5 free)

(Expand upon criteria in a later version)

### Delivery

Phase 1 - v0.05-v1.0

* Base features: + user login / creation with: - google+ - manual user creation + user profile - personal stats + to be expanded with premium addons - blog posts (forum may be added on phase 1 if not on phase 2) + user activity board + home page with widgets: + trending topics
  = based on industry
  _ at least 3 industries on phase 1, more on phase 2
  _ users can comment on trending topics + most popular posts + user with mosts posts + user with most contributions + user premium service - paid for: - mass email to email list - github / portfolio area creation ( may move to phase 2)

* Prod & Dev: - Dev features: - cont. development with nodemon on server - cont. development with browsersync on client - Prod features: - deployment to heroku - continous dev with heroku (may move to phase 2) - gulp pipeline: - minimization of code - sass compression

* Testing: - client: - jest for react components - enzyme for react reducers / actions - sever: - enzyme / superset for express - data: - (not sure how to test mongo yet)

Phase 2 - v1.0-v2.0

* Each version will add an additional feature to the application, including: - twitter authentication, twitter feed, twitter widgets - linkedin authentication, feed, and widget - facebook authentication, feed, and widget - other authentications, feeds and widgets - trade charts, calculators, trackers - user to user chat - blog updated to forum if not in phase 1: - limited base user features - premium user features + services

* Each version will expand on prod, dev, and testing pipelines.
* And much more...

## Demo

(to be expanded in a future version with the structure below)

![desktop image](https://onlinedevelopers.ca/udacity/weather-app/src/img/read-me/proj5-collage.jpg)

[To view the application live click here](http://onlinedevelopers.ca/udacity/weather-app/)

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

To initiate the database:

```
The user must either host the database locally, (to expand on local later) or host the DB through [https://mlab.com/]
```

#### Testing

To test the server components (with continous development as of v0.2), type the following command :

```
$ npm test
```

Note that the server components will NOT test unless the database URL has been configured within:

```
$ tests/config.js
```

(expand on production installation, etc)

To run this application on production:

* Download the Heroku CLI: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

* Proper production instructions coming later

## Most Recent Update - v0.15

## v0.15-user-schemas

    TODO:
    	- Add MongoDB schemas for users.
    	- Add cookie authentication and authentication handlers.

## v0.1-google-auth

    COMPLETED:
    	- Add Google OAuth API.
    	- Begin considering how to implement manual user creation.

## v0.05-server

    COMPLETED:
    	- Add Express basic server
    	- Hook up base application to Heroku for production
    	- Create base tests for Express

## To Do's - v0.2-chores

    TODO:
    	- Refactor, tests, and NPM package command cleanup to run from parent directory.
    	- add manual user server side code, potentially include JWT tokens
    	- Create wiki for the repository, and start fragmenting README.md

## Known Bugs

(expand on bugs)

## Libraries, Frameworks, APIs

[React](https://facebook.github.io/react/)

[Redux](http://redux.js.org/docs/introduction/)

[Node](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[MongoDB](https://www.mongodb.com/)

(add other maj libraries here)

## Inspired by the material from

[Node with React: Fullstack Web Development](https://www.udemy.com/node-with-react-fullstack-web-development)

[The Complete Developers Guide to MongoDB](https://www.udemy.com/the-complete-developers-guide-to-mongodb)

[Server Side Rendering with React and Redux](https://www.udemy.com/server-side-rendering-with-react-and-redux)

## Contribution

All files in this repository are protected under the MIT license, but feel free to contribute, fork, star, or share this application as you see fit.

For commercial or educational use, please paste a link to this repository to give proper credit.

## License

As of January 29th, 2018, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/mit/).
