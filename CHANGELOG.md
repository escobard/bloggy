# CHANGELOG - EngBook - react && react-redux && express && mongodb

## ToDo's - No version, but need to be completed:

        - add manual user server side code, potentially include JWT tokens
        - set up different environments for prod vs dev
        - clean up file structure
        - tests for authenticated routes to be implemented at a later date
        - cross browser origin for cookies - if necessary revert back to the single hosting setup
            + may revert back to original server setup, but will need to address cross domain auth before prod / v1.0
        - consider adding the following to each user's profile:
            - A 'service' area, where the eng's most recent work is displayed.
                + This includes a brief description.
                + Expanded description if the project is public
                + Ratings from the client
                + Link to project (if applicable)
                + Testimonial / feedback for the service provided
                    + Option to hide feedback
                    + Premium options for additional services


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

    COMPLETED:
        - Migrated base structure from redux assesment project, includes the following tech:
            - SASS bundling with webpack, and base mixins / variables.
            - Base testing component set up for redux and async request testing
            - Material UI components for base structure including:
                - Header
                - Footer
                - Routes, and children routes
                - TODO: Remove legacy action / containers from application before v0.45 is completed
            - React / Redux working action / reducer structure.
    TODO:
        - Set up base front end components
        - Refactor EVERYTHING to improve scalability including:
            + Proper use of SASS mixins / variables
            + Fracture component architecture for improved reusability

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
