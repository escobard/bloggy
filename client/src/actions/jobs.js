import axios from 'axios'

import {SUBMIT_JOB, FETCH_USER} from './types'

export const submitJob = values => async dispatch => {
	let res = await axios.post('/api/jobs', values);

	// we are using the FETCH_USER action type here to ensure that the user data is correctly loaded
	// upon action submital 
	dispatch( {
			type: FETCH_USER,
			payload: res.data
		})
}