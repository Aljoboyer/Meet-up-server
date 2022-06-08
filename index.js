const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;


// database connetion
const connectDB = require("./config/DBconnection.js");

// route
const UserRoutes = require("./routes/UserRoute.js");

connectDB();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


app.use('/user', UserRoutes)

app.get('/', (req, res) => {
    res.send('Mark Polo Server Is Connected');
})

app.listen(port, () => {
    console.log(`Mark Polo Server Port is ${port}`);
});