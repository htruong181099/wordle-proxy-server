const express = require('express');
const router = express.Router();

const fetchData = require('../api/index');

router.get('/', async (req, res) => {
	const data = await fetchData();
	// console.log(data);
	return res.send(data);
});

module.exports = router;
