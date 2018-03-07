# EngBook - react && react-redux && express && mongodb

This repository contains all the files for an application built to showcase an application intended to showcase my expertise with the following technologies:

    - Consistent data with MongoDB / Mongoose
    - REST API to manage HTTP requests with Express / Node
    - Currency transactions handled with the Stripe API
    - Testing of server, data, and client applications with Mocha / Enzyme / Jest
    - Manage user Authentication with oAuth / Passport
    - Offline caching with Service Workers / IndexDB / LocalStorage
    - Client interface built with React / Redux
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

## Expanded Documentation

Since this application utilizes several different technologies, the documentation has been split up into different wiki articles to avoid cluttering the main README.md file.

* [Directory](https://github.com/escobard/engbook/wiki)
* [Installation](https://github.com/escobard/engbook/wiki/Installation)
* [Usage](https://github.com/escobard/engbook/wiki/Usage)
* [Changelog](https://github.com/escobard/engbook/wiki/Changelog)
* [Known bugs](https://github.com/escobard/engbook/wiki/Known-Bugs)
* [Libraries, Frameworks, APIs](https://github.com/escobard/engbook/wiki/Libraries,-Frameworks,-APIs)

## Contribution

All files in this repository are protected under the MIT license, but feel free to contribute, fork, star, or share this application as you see fit.

For commercial or educational use, please paste a link to this repository to give proper credit.

## License

As of January 29th, 2018, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/mit/).
