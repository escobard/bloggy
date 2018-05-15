import { emailRe } from "../../../constants"

export default emails =>{
	console.log('EmaiLRE', emailRe)
	let invalidEmails = emails

		// splits the emails string into an array,
		// splitting each string after a comma
		.split(',')

		// maps the array we just created, removes trailing spaces, returns clean array
		.map(email => email.trim())

		// filters the array, checking if any of the strings (emails) within the emails array
		// contains valid characters - aka email@address.com

		// tests to see if our email string contains valid characters
		// tested vs the email regular expression within src/utils
		// this returns all emails that DO NOT match the regex
		// into our array, so we can display them to the user
		.filter(email => !emailRe.test(email))

		// returns invalid emails
		if (invalidEmails.length) {
			return `These emails are invalid: ${invalidEmails}`
		}

}