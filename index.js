const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
//Routes
app.use('/api', require('./routes/index'));

app.listen(PORT, () => {
	console.log('Listening on port ', PORT);
});
