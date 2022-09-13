const express = require("express");
const app = express();

const cors =  require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const api = require('./src/routes/api');
app.use('/api', api);

app.listen(4001, () => {
    console.log("App listening in port 4001");
})