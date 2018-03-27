## heroku deployment

### dev mode:

    - since the proxy side is used, we are essentially running a single server in development (localhost:3000) to handle server requests
    - with that in mind, development actually runs 2 separate servers, client and api.

### prod

    - in prod, we want to run a single server, for both the api and the public assets.
    - the public assets are the bundled client side files from create-react-app
    	- this is accomplished by the npm run build command
    - in prod, we want to instruct the server if any routes come in that the express server does NOT handle
    the express server routes us back to the browser
