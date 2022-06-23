const { default: axios } = require("axios");

const myCatWikiService = (function () {
	const X_API_KEY = "8d4c9b80-462e-4101-b73e-7ab7df0124f3";
	const API_BASE_URL = "https://api.thecatapi.com/v1/"
	//const API_BASE_URL = "https://api.thecatapi.com/v1/favourites/"
	//const API_BASE_URL = "https://api.thecatapi.com/v1/images/search?breed_id=beng"
	const params = {
		mode: 'cors',
		cache: 'no-cache',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'x-api-key': X_API_KEY
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	}

	function findAllCategories() {
		// https:	//api.thecatapi.com/v1/categories
		// queries: limit, page
		try {
			axios.get(`${API_BASE_URL}categories`, params);
		} catch (error) {
			console.log(`🚫 findAllCategories() #err: `, err);
		}
	}

	function findAllFavourites() {
		// https:	//api.thecatapi.com/v1/favourites
		// queries: sub_id, limit, page
		try {
			axios.get(`${API_BASE_URL}v1/favourites`, params);
		} catch (error) {
			console.log(`🚫 findAllFavourites() #err: `, err);
		}
	}

	function findAllImages() {
		// https:	//api.thecatapi.com/v1/images/search
		// queries: size, mime_types, order, limit, page, category_ids, format, breed_id
		try {
			axios.get(`${API_BASE_URL}images/search`, params);
		} catch (error) {
			console.log(`🚫 findAllImages() #err: `, err);
		}
	}

	function findAllBreeds() {
		// https://api.thecatapi.com/v1/breeds
		// queries  -> 	 attach_breed, page, limit
		try {
			axios.get(`${API_BASE_URL}breeds`, params);
		} catch (error) {
			console.log(`🚫 findAllBreeds() #err: `, err);
		}
	}

	function findBreedByName(name) {
		console.log(`📡 findByBreedByName() `);
		// https://api.thecatapi.com/v1/breeds/search?q=beng
		// queries -> q
		// <---   { description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly }

		// add q=name (breed) to params
		try { return axios.get(`${API_BASE_URL}/breeds/search`, params); }
		catch (error) { console.log(`🚫 findBreedByName(): `, error); }
	}

	return {
		findBreedByName
	}

})();

module.exports = myCatWikiService;