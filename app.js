const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	return res.json({
		status: '000',
		message: 'Root path visited'
	});
});

app.listen(3000, () => {
	console.log('The application is listening on the port %s', 3000);
});
