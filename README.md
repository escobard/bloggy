# EngBook - react && react-redux && express && mongodb

This repository contains all the files for an application built to showcase an application intended to showcase my expertise with the following technologies:

    - Consistent data with MongoDB / Mongoose
    - REST API to manage HTTP requests with Express / Node
    - Currency transactions handled with the Stripe API
    - Testing of server, data, and client applications with Mocha / Enzyme / Jest
    - Manage user Authentication with oAuth / Passport
    - Email and email metrics with SendGrid
    - Offline caching with Service Workers / IndexDB / LocalStorage
    - Client interface built with React / Redux
    - Progressive web application using responsive practices
    - Material design with the Bootstrap / MaterialUI

Possible future technologies include:

    - GraphQL / Apollo for better offline - first utilization
    - Server Side Rendering for optimized performance
    - React Native application for native devices

## Project Criteria

The main purpose of this application is to provide the following features:

*   A proffesional social media network for enginners. 
    + User to user profiles and a basic chat system (phase 2). 
    + User dashboard, with metrics - add tabs for each dashboard subpage for improved ux
        - Currency system, and payment gateway 
            + A job post feature, where the post is shared globally and emailed to specific users. 
            + contains an job post, which the recipients fill out to apply for the position.
            + contains a single job post page, where users can apply for the job: 
                - Via email initially, a more complex application system to be introduced later.
        - Profile:
            - Base features (phase 1) - editable:
                - Name
                - Email
                - Links to linkedin, github, website
                - resume (possible phase 2 - pdf update)
            - premium profile features (phase 2).
                + leaderboards and activity trackers for: 
                    - github activity 
                    - linkedin 
                    - crypto currencies 
                    - stocks
            - other features:
                + profile image (aws phase 2 after node.js advanced course)
                + facebook, twitter, github feeds
        - Musings:
            - Allows users to create a basic post  (with HTML phase 2)
            - Allows users to set under following categories:
                - educational
                - request for help
                - external job post
                - more categories / user created categories in phase 2
        - Chat (p2):
            - user-to-user chat system.
            - linked with premium job posts, approval required for users to communicate with employers.



(Expand upon criteria in a later version)

### Delivery

Phase 1 - v0.05-v1.0

*   Base features:

    *   user login / creation with:
        *   google+
        *   manual user creation
    *   user profile
        *   personal stats
            *   to be expanded with premium addons
        *   blog posts (forum may be added on phase 1 if not on phase 2)
    *   user activity board
    *   home page with widgets:
        *   trending topics
            = based on industry
            _ at least 3 industries on phase 1, more on phase 2
            _ users can comment on trending topics
        *   most popular posts
        *   user with mosts posts
        *   user with most contributions
    *   user premium service - paid for:
        *   mass job post emails, and job post single post view
        *   github / portfolio area creation ( may move to phase 2)

*   Prod & Dev:

    *   Dev features:
        *   cont. development with nodemon on server
        *   cont. development with browsersync on client
    *   Prod features:
        *   deployment to heroku
            *   continous dev with heroku (may move to phase 2)
        *   gulp pipeline:
            *   minimization of code
            *   sass compression
        *   authentication with a cookie

*   Testing:
    *   client:
        *   jest for react components, reducers, and actions
    *   sever:
        *   enzyme / superset for express
    *   data:
        *   mocha for mongoDB / mongoose

Phase 2 - v1.0-v2.0

*   Each version will add an additional feature to the application, including:

    *   twitter authentication, twitter feed, twitter widgets
    *   linkedin authentication, feed, and widget
    *   facebook authentication, feed, and widget
    *   other authentications, feeds and widgets
    *   trade charts, calculators, trackers
    *   user to user chat
    *   blog updated to forum if not in phase 1:
        *   limited base user features
        *   premium user features + services

*   Each version will expand on prod, dev, and testing pipelines.
*   And much more...

## Demo

(to be expanded in a future version with the structure below)

![desktop image](https://onlinedevelopers.ca/udacity/weather-app/src/img/read-me/proj5-collage.jpg)

[To view the application live click here](http://onlinedevelopers.ca/udacity/weather-app/)

To download and install, please follow the instructions below.

## Bugs & errors / warnings 

- compile warnings on unused variables need to be cleaned up (client side)
- devDependencies and depency duplications in package.json file

## Expanded Documentation

Since this application utilizes several different technologies, the documentation has been split up into different wiki articles to avoid cluttering the main README.md file.

*   [Directory](https://github.com/escobard/engbook/wiki)
*   [Installation](https://github.com/escobard/engbook/wiki/Installation)
*   [Usage](https://github.com/escobard/engbook/wiki/Usage)
*   [Changelog](https://github.com/escobard/engbook/wiki/Changelog)
*   [Known bugs](https://github.com/escobard/engbook/wiki/Known-Bugs)
*   [Libraries, Frameworks, APIs](https://github.com/escobard/engbook/wiki/Libraries,-Frameworks,-APIs)

## Contribution

All files in this repository are protected under the MIT license, but feel free to contribute, fork, star, or share this application as you see fit.

For commercial or educational use, please paste a link to this repository to give proper credit.

## License

As of January 29th, 2018, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/mit/).
