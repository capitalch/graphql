const { GraphQLScalarType } = require('graphql').GraphQLScalarType;
const db = require('./db');
const axios = require('axios');
const pgp = require('pg-promise')();
const cn = {
	host: 'localhost',
	port: 5432, 
	database: 'ecomm',
	user: 'postgres',
	password: 'su$hant123'
};
const pdb = pgp(cn);

const sqls = {
	'sql-category': 'select id, label from category',
	brands: `select * from brand`
};

const qr = async (args) => {
	const data = await pdb.any(sqls[args]);
	return data;
};

const Query = {
	test: () => 'Test Success, GraphQL server is up & running !!',
	greeting: () => 'Hello how are you',
	colleges: () => db.colleges.list(),
	students: () => db.students.list(),
	contacts: () =>
		axios.get('http://chisel.cloudjiffy.net/contacts/short').then(function(response) {
			return response.data;
		}),
	brands: () => qr('brands')
};
const Mutation = {
	insertTest: async (parent, args) => {
		const res = await pdb.none('insert into test(name,address) values(${name}, ${address})', { ...args });
		return { ...args };
	}
};
module.exports = { Query, Mutation };
