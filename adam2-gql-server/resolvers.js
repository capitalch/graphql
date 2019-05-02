const db = require('./db');

const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',
    greeting: () => 'Hello how are you?',
    students: () => db.students.list(),
    colleges: () => db.colleges.list()
}
module.exports = { Query }