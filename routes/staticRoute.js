const express = require('express');

const router = express.Router();
const userModel = require('../models/url');

router.get('/', async (req, res) => {
    const allUrls = await userModel.find({});
    res.render('home', {
        urls: allUrls
    });
});


module.exports = router;