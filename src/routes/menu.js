const router = require('express').Router(); 
const {get} = require('../services/menuService');
module.exports = router;

router.route('/appetizers')
.get(async (req, res) => {
    try {
        const collectionName = "appetizers";
        const result = await get(collectionName);
        return res.status(200).send(result);
    } catch (err) {
        console.log(`Error getting appetizers: ${err.message}`);
        return res.status(500).send('Internal Service Error');
    }
})

router.route('/entrees')
.get(async (req, res) => {
    try {
        const collectionName = "entrees";
        const result = await get(collectionName);
        return res.status(200).send(result);
    } catch (err) {
        console.log(`Error getting appetizers: ${err.message}`);
        return res.status(500).send('Internal Service Error');
    }
})