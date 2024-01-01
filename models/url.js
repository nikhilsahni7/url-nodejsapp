const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/urlShortner").then(() => {
    console.log("connected to db");
});

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{
        timestamp: {
            type: Number,
        }
    }],
},
    { timestamps: true }
);
const urlModel = mongoose.model('url', urlSchema);
module.exports = urlModel;