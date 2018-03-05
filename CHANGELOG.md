# CHANGELOG - EngBook - react && react-redux && express && mongodb

## ToDo's - No version, but need to be completed:

        - add manual user server side code, potentially include JWT tokens
        - set up different environments for prod vs dev
        - clean up file structure
        - tests for authenticated routes to be implemented at a later date
        - cross browser origin for cookies - if necessary revert back to the single hosting setup
            + may revert back to original server setup, but will need to address cross domain auth before prod / v1.0

## v0.45-frontend-setup-3

    TODO:
        - Set up router and component animations
        - Possible set up manual auth with the backend
        - CSS cleanup for responsive
        - Refactor of components to use best scalable practices

## v0.4-frontend-setup-2

    TODO:
        - Finalize front end class setup
        - Choose CSS library, (material-ui seems best for now, explore options)
        - Update repo wiki with front end usage commands

## v0.35-frontend-setup-1

    TODO:
        - Set up base front end components
        - Properly sync with server
        - Add build operations for FE

## v0.3-client-side

    COMPLETED:
        - set up client side application:
            + webpack server
            + running both front and back servers
            + routing updates
            + create app proxy
            + software architecture improvements

## v0.25-production-vs-dev

    COMPLETED:
        - Set up env. variables for prod
        - Set up conditional handlers to handle prod / dev routes

## v0.2-chores

    COMPLETED:
        - Refactor, base tests for MongoDB
        - Create wiki for the repository, and start fragmenting README.md

## v0.15-user-schemas

    COMPLETED:
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
