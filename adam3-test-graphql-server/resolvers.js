const axios = require('axios')
const resolvers = {
    Query: {
        person: () => 'Sushant',
        contacts: () => axios.get('http://chisel.cloudjiffy.net/contacts/short')
            .then(function (response) {
                return response.data;
            })
        
    }
}

module.exports = resolvers;