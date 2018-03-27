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
    - for continues development, and testing before deployment we an use CircleCI / github
    	- For more on clircle CI and continous development, visit this URL: https://circleci.com/
    - to customize the build process within heroku, we can set a preinstall / postinstall script within the package.json file which does exactly that.
    - to learn more on heroku build customization go here: https://devcenter.heroku.com/articles/nodejs-support#customizing-the-build-process
	- on herok-postbuild script:
		- NPM_CONFIG_PRODUCTION=false - for the duration of the post-build heroku script, we set the env of production to false.
			- this is since the heroku server recognizes the parent directory (server) and automatically installs its dependencies - this command is to handle client installation after server installation
		- next is installation
		- next is bundling of the client server