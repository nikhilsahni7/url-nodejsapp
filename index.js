const express = require("express");
const app = express();
const urlRoute = require("./routes/urlRoute");
const staticRoute = require("./routes/staticRoute");
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', staticRoute);
app.use('/url', urlRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})