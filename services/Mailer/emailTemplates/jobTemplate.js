// this contains all the html for the body of the email
// we can style this with a LOT of customization, and add tons of content

// this will be expanded in future versions of the application to render a job post
// to the recipients 

// there are TONS of tools online to rapidly develop email templates - look for these instead of hard coding

module.exports = job => {
	return `<html>
		<body>
			<div style="text-align: center;">
				<h3>I'd like your input!</h3>
				<p>Please answer the following question:</p>
				<p>${job.body}</p>
				<div>
					<a href="http://localhost:3000">
						Yes
					</a>
				</div>
			</div>
		</body>
	</html>`;
};