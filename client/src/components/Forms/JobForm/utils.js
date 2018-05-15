export default (emails) =>{
	let emailsArray = emails

		// splits the emails string into an array,
		// splitting each string after a comma
		.split(',')

		// maps the array we just created, removes trailing spaces, returns clean array
		.map(email => email.trim())

}