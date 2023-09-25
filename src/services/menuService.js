const db = require('../services/dbWrapper');

module.exports = {
    get: async function(collectionName) {
        const mongoDb = await db.getClient();
        return await mongoDb.collection(collectionName).find().toArray(); 
    },
};