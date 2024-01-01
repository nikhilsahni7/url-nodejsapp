const express = require('express');
const { generateNewShortUrl, getUpdatedUrl, getUrlInfo } = require('../controllers/urlController');
const router = express.Router();

router.post('/', generateNewShortUrl);

router.get('/:shortId', getUpdatedUrl);

router.get('/analytics/:shortId', getUrlInfo);

module.exports = router;