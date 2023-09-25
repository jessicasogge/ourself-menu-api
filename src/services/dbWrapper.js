const MongoClient = require('mongodb').MongoClient;

// reusable connection
let connection = null;

module.exports = {
    getClient: async function() {
        try {
            if (!connection) {
                console.log('Creating a new Mongo Client');
                // I would never put the url here in practice - should be read from env vars
                const client = new MongoClient('mongodb+srv://api-manager:1cYBf4gVeFwEO2oC@cluster0.4b6ocab.mongodb.net/ourself?retryWrites=true&w=majority');
                await client.connect();
                connection = client.db('menu');
            }

            return connection;
        } catch (err) {
            console.log('Unable to get MongoDB Client:', err.message);
            connection = null;
        }
    },
};
