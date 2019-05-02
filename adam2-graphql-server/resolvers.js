const db = require('./db');
const axios = require('axios');
const Query = {
	test: () => 'Test Success, GraphQL server is up & running !!',
	greeting: () => 'Hello how are you',
	colleges: () => db.colleges.list(),
	students: () => db.students.list(),
	contacts: () =>
		axios.get('http://chisel.cloudjiffy.net/contacts/short').then(function(response) {            
            return response.data
		})
};
module.exports = { Query };
