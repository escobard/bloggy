module.exports = function(app){
	app.get('/', (req, res) => {

		console.log('headers: ', req.headers)
		// sends the json object below to the route specified
		res.send({ hi: 'there' });

	})
};
