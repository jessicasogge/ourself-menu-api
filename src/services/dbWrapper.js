const MongoClient = require('mongodb').MongoClient;

// reusable connection
let connection = null;

module.exports = {
    getClient: async function() {
        try {
            if (!connection) {
                console.log('Creating a new Mongo Client');
                // I would never put the url here in practice - should be read from env vars
                const client = new MongoClien(process.env.DB);
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
