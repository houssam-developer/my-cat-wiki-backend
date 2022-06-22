const express = require('express');

const startup = () => {
	const app = express();

	app.get('/', (req, res) => {
		return res.send({ greeting: 'welcome to My Cat Wiki API', author: "houssam developer" });
	});

	const PORT = 8080;
	app.listen(process.env.PORT || PORT, () => console.log('Server Started...'));
}

module.exports = startup;