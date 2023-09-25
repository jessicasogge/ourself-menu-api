const router = require('express').Router();
const {get} = require('../services/menuService');
module.exports = router;

router.route('/')
    .get(async (req, res) => {
        try {
            const collectionName = 'menu';
            const result = await get(collectionName);
            return res.status(200).send(result);
        } catch (err) {
            console.log(`Error getting appetizers: ${err.message}`);
            return res.status(500).send('Internal Service Error');
        }
    });


