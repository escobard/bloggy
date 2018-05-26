import {SUBMIT_JOB} from './types'

export const submitJob = values =>{
	return {
		type: SUBMIT_JOB,
		payload: values
	}
}