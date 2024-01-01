var { nanoid } = require('nanoid');
const urlModel = require("../models/url");
async function generateNewShortUrl(req, res, next) {
    const body = req.body;
    const shortId = nanoid(7);
    if (!body.url) {
        return res.status(400).json({
            success: false,
            message: "url is required"
        });
    }
    await urlModel.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });
    return res.status(200).render("home", {
        Id: shortId
    });
}
getUpdatedUrl = async (req, res) => {
    const shortId = req.params.shortId
    const url = await urlModel.findOneAndUpdate({
        shortId
    },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            },
        }
    );

    res.redirect(url.redirectUrl);
}
getUrlInfo = async (req, res) => {
    const shortId = req.params.shortId
    const url = await urlModel.findOne({
        shortId
    });
    return res.status(200).json({
        success: true,
        clicks: url.visitHistory.length,
        OriginalSiteName: url.redirectUrl,
        analytics: url.visitHistory
    });
}

module.exports = { generateNewShortUrl, getUpdatedUrl, getUrlInfo };