const axios = require('axios').default;

const fetchData = () => {
	const options = {
		method: 'GET',
		url: process.env.API_BASE_URL,
		params: { count: '1', wordLength: '5' },
		headers: {
			'x-rapidapi-host': process.env.API_HOST,
			'x-rapidapi-key': process.env.API_KEY,
		},
	};

	return axios
		.request(options)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.error(error);
		});
};

module.exports = fetchData;
