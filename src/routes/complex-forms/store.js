import { writable } from 'svelte/store';

// Initialize the formData store with default values
export const formData = writable({
	personalInfo: {
		name: '',
		email: ''
	},
	jobInfo: {
		position: '',
		experience: 0
	},
	confirmSubmission: false
});
