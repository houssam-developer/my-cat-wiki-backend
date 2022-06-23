const express = require('express');
const myCatWikiService = require('./domain/services/MyCatWikiService');

const startup = () => {
	const app = express();

	app.get('/', (req, res) => {
		myCatWikiService.findBreedByName()
			.then(res => console.log(`📦 #res: `, res.data))
			.catch(err => console.log(`🚫 err: `, err));

		return res.send({ greeting: 'welcome to My Cat Wiki API', author: "houssam developer" });
	});

	const PORT = 8080;
	app.listen(process.env.PORT || PORT, () => console.log('Server Started...'));
}

module.exports = startup;